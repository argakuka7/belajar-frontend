# Rencana Program: Peluncuran Belajar Prinsip-Prinsip Front End

## Konteks

Buku pasangan dari Belajar Prinsip-Prinsip Backend. Backend sudah terbit: dokumentasi Indonesia 24 bab. Frontend ditulis original untuk audiens yang belum pernah koding, dengan pasangan contoh Vanilla JavaScript + React dan satu blok Demo Hidup per bab. Keputusan arah tercatat di docs/adr/0001 sampai 0004.

## Lingkup

Termasuk: scaffold repo dan halaman, bab 0 sampai 24 (naskah, halaman Versi Sederhana, demo hidup, kontrak Kuka, ilustrasi), verify per bab, deploy Netlify.
Di luar: backend book (selesai), domain www.argakuka.com (footer saja), komentar pembaca.

## Batasan

- Tanpa build tool (ADR-0003): HTML, CSS, dan JS murni di public/.
- Bahasa Indonesia gaya unslop, rujukan teknis MDN (tools/STYLE_GUIDE.md).
- Persona ilustrasi Kuka; kontrak ilustrasi per bab.
- Nol jargon sebelum didefinisikan di naskah (ADR-0004).

## Alternatif yang ditolak

1. Adaptasi dokumen open source (jalan tercepat, tapi bentrok dengan ADR-0001; ditolak).
2. Cukup 12 bab (dipotong; kapten memilih 24 sebagai cerminan seri backend).
3. Build tool (Vite) untuk demo; ditolak karena mewajibkan pembaca memasang Node, melanggar ADR-0004.

## Skill yang dipakai pengerja

- poteto-mode (playbook multi-phase-plan, tahap verifikasi per fase)
- /skill:unslop atas setiap permukaan prosa sebelum commit
- /skill:deslop atas diff sebelum commit
- /skill:technical-writing untuk halaman dan README
- /skill:show-me-your-work untuk jejak keputusan per fase

## Fase

- [phase-1-scaffold.md](phase-1-scaffold.md) - repo, beranda, style guide, netlify, ADR
- [phase-2-bab-0-dan-1.md](phase-2-bab-0-dan-1.md) - dua bab pertama sebagai unit bukti
- [phase-3-html-css.md](phase-3-html-css.md) - bab 2 sampai 5
- [phase-4-js-dom.md](phase-4-js-dom.md) - bab 6 sampai 13
- [phase-5-react.md](phase-5-react.md) - bab 14 sampai 17
- [phase-6-kemahiran.md](phase-6-kemahiran.md) - bab 18 sampai 22
- [phase-7-pwa-penutup.md](phase-7-pwa-penutup.md) - bab 23 sampai 24
- [testing.md](testing.md)

## Verification

- Setiap halaman bab terbuka tanpa error console (CDP/browser harness).
- Demo Hidup tiap bab jalan dengan sekali klik.
- Semua link antar bab dan ilustrasi utuh (tools/verify.py pattern dari seri backend).
- Prosa lolos STYLE_GUIDE (unslop pass).

## Implementation guidance

- /skill:unslop sebelum commit tiap fase; /skill:deslop atas diff.
- /skill:show-me-your-work: satu baris keputusan per fase di docs/plans/decision-log.md.
- Konten ditulis melalui subagent poteto per batch; peran model mengikuti ~/.pi/agent/pstack/models.json.
- Ilustrasi Kuka lewat kontrak per bab (pattern kontrak-kuka.md dari seri backend).
