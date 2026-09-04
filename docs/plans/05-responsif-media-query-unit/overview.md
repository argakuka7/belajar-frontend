# Overview Bab 5: Responsif: Media Query & Unit

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 5 menjelaskan cara membuat halaman yang menyesuaikan lebar layar, dari ponsel sampai layar lebar. Dua pokok bahasa: media query, cara menulis aturan CSS yang hanya berlaku pada lebar tertentu, dan unit relatif, cara ukuran menyesuaikan diri secara terus-menerus. Bersama bab 3 (selektor dan box model) dan bab 4 (flex dan grid), bab ini menutup fondasi tampilan.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/05-responsif-media-query-unit/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup merespons lebar jendela secara nyata: jumlah kolom kartu berubah pada ambang tertentu, angka lebar layar mengikuti saat jendela digeser. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `05-responsif-media-query-unit`, sesuai perintah pengerjaan dan pola penamaan bab ber-cover model yang dipakai bab 3 dan 4.
- Link bab sebelumnya menunjuk `/04-css-layout-flex-grid/`, mengikuti link bab berikutnya yang sudah dipakai bab 3.
- Link bab berikutnya menunjuk `/06-js-dasar/`, sesuai TOC di `public/index.html`.
- Demo Hidup memakai tiga elemen untuk menunjukkan sifat responsif: media query mengubah jumlah kolom pada ambang lebar, unit persen dan `rem` membuat kolom dan teks mengalir, dan `clamp()` membatasi ukuran huruf. Angka lebar layar di-render oleh React yang dimuat lewat CDN ESM, sesuai perintah pengerjaan bab React, tanpa build tool.
- Grid demonya tulis sebagai HTML murni agar tetap terlihat responsif meskipun React gagal dimuat saat jaringan offline.
- Analogi tunggal bab ini adalah meja makan yang bisa dipanjangkan. Lebar ruang makan mewakili lebar layar, daun meja yang ditambah mewakili perubahan pada ambang lebar, dan porsi makanan di piring mewakili unit relatif.
- Jargon yang didefinisikan pertama kali: viewport, media query, unit relatif, ambang (breakpoint), `em`, `rem`, persen, `vw`, `vh`, `clamp()`, fluida.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 3.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
