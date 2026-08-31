# Konsep Bab 2: HTML: Struktur & Semantik

Kembali ke [overview](overview.md).

## Tujuan bab

Pembaca sudah tahu dari bab 1 bahwa browser menyusun halaman dari HTML. Bab ini menjawab kenapa HTML adalah struktur terpenting, dan kenapa memilih elemen yang tepat, bukan sekadar elemen yang tampak sama, itu penting. Ini fondasi untuk CSS dan JavaScript di bab berikutnya.

## Dua pertanyaan wajib

1. Mengapa HTML struktur terpenting: browser membangun DOM dari markup HTML. CSS dan JavaScript bekerja di atas struktur itu, jadi struktur yang buruk membuat semuanya ikut buruk.
2. Bagaimana cara kerjanya di baliknya: elemen semantik memberi makna pada bagian halaman. Browser, pembaca layar, dan mesin pencari memakai makna itu untuk memahami halaman.

## Garis besar

- HTML sebagai kerangka tulang bangunan: analogi tunggal bab ini.
- Semantik vs div soup: perbedaan elemen bermakna dan elemen netral.
- Elemen struktural: header, nav, main, article, section, aside, footer.
- Hierarki heading yang benar: satu h1, urutan tanpa lompatan.
- Atribut dan metadata ringkas: lang, title, meta description.
- Pasangan contoh: halaman HTML manual vs komponen React JSX.
- Demo Hidup: panel div soup yang diganti markup semantik.

## Pasangan contoh

- Vanilla: halaman HTML dengan header, main, article, dan markup manual.
- React: komponen JSX yang me-render markup semantik yang sama, dimuat lewat CDN ESM sesuai ADR-0003.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11.

## Rujukan

- MDN: HTML, semantic HTML, heading, metadata.
- web.dev: semantic HTML.
