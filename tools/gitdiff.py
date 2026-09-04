#!/usr/bin/env python3
"""Read-only git object reader: reconstruct diff between two commits."""
import zlib, os, sys

OBJ_DIR = '/root/.no-mistakes/repos/c09280396a5a.git/objects'

def read_obj(sha):
    p = os.path.join(OBJ_DIR, sha[:2], sha[2:])
    if not os.path.exists(p):
        raise FileNotFoundError(sha)
    raw = zlib.decompress(open(p, 'rb').read())
    header, _, body = raw.partition(b'\x00')
    typ, size = header.split(b' ')
    return typ.decode(), int(size), body

def parse_commit(sha):
    typ, size, body = read_obj(sha)
    assert typ == 'commit'
    lines = body.split(b'\n')
    d = {}
    for ln in lines:
        if not ln:
            break
        k, _, v = ln.partition(b' ')
        d.setdefault(k.decode(), []).append(v.decode())
    msg = body[body.index(b'\n\n') + 2:]
    return d, msg

def parse_tree(body):
    entries = []
    i = 0
    while i < len(body):
        j = body.index(b'\x00', i)
        mode, name = body[i:j].split(b' ')
        sha = body[j + 1:j + 21].hex()
        entries.append((mode.decode(), name.decode(), sha))
        i = j + 21
    return entries

def get_tree(sha):
    typ, size, body = read_obj(sha)
    assert typ == 'tree'
    return parse_tree(body)

def tree_to_dict(sha, prefix=''):
    out = {}
    for mode, name, sub in get_tree(sha):
        path = prefix + name
        if mode == '40000':
            out.update(tree_to_dict(sub, path + '/'))
        else:
            out[path] = (mode, sub)
    return out

def blob_text(sha):
    typ, size, body = read_obj(sha)
    assert typ == 'blob'
    return body

def diff_trees(a, b):
    """a, b: dict path -> (mode, sha). Returns list of (status, path)."""
    changes = []
    for path in sorted(set(a) | set(b)):
        if path not in a:
            changes.append(('ADD', path))
        elif path not in b:
            changes.append(('DEL', path))
        elif a[path] != b[path]:
            changes.append(('MOD', path))
    return changes

def main():
    base = sys.argv[1]
    head = sys.argv[2]
    d1, m1 = parse_commit(base)
    d2, m2 = parse_commit(head)
    print('BASE tree:', d1['tree'][0], '| msg:', m1.decode(errors='replace')[:100].replace('\n', ' '))
    print('HEAD tree:', d2['tree'][0], '| msg:', m2.decode(errors='replace')[:100].replace('\n', ' '))
    print('HEAD parents:', d2.get('parent'))
    print()
    ta = tree_to_dict(d1['tree'][0])
    tb = tree_to_dict(d2['tree'][0])
    for status, path in diff_trees(ta, tb):
        print(f'{status:4s} {path}')
    print()
    # full unified diff for text files
    for status, path in diff_trees(ta, tb):
        if status == 'DEL':
            continue
        old = blob_text(ta[path][1]) if path in ta else b''
        new = blob_text(tb[path][1]) if path in tb else b''
        if b'\x00' in old or b'\x00' in new:
            print(f'=== BINARY {path} ===')
            continue
        print(f'===== {path} =====')
        import difflib
        for line in difflib.unified_diff(old.decode(errors='replace').splitlines(),
                                         new.decode(errors='replace').splitlines(),
                                         fromfile='a/' + path, tofile='b/' + path, lineterm=''):
            print(line)
        print()

if __name__ == '__main__':
    main()
