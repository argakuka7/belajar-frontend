# Konsep Bab 1: Apa Itu Front End

Kembali ke [overview](overview.md).

## Tujuan bab

Pembaca sudah punya alat dari bab 0. Bab ini menjawab apa itu front end dan bagaimana browser menyusun halaman. Ini fondasi untuk semua bab berikutnya.

## Dua pertanyaan wajib

1. Mengapa front end ada: front end adalah bagian aplikasi yang dilihat dan disentuh pengguna di browser.
2. Bagaimana cara kerjanya di baliknya: browser mengubah HTML menjadi struktur, lalu menjadi gambar di layar lewat alur HTML parse, DOM, render tree, dan paint.

## Garis besar

- Apa itu front end: bagian yang tampil di browser, lawan dari backend.
- Cara browser menyusun halaman: HTML parse, DOM, render tree, paint.
- Kenapa tiga bahasa terpisah: HTML untuk struktur, CSS untuk tampilan, JavaScript untuk perilaku.
- Pasangan contoh: vanilla `getElementById` dan React pertama via CDN.
- Demo Hidup: tombol yang mengubah teks halaman lewat DOM.

## Pasangan contoh

- Vanilla: `document.getElementById` mengubah teks elemen.
- React: komponen pertama lewat CDN, sesuai ADR-0003, tanpa build tool.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11.

## Rujukan

- MDN: How the web works, DOM, HTML.
- web.dev: How browsers work.
