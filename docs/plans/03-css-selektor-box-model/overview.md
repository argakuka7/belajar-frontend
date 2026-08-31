# Overview Bab 3: CSS: Selektor & Box Model

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 3 menjelaskan cara CSS memberi tampilan pada struktur HTML dari bab 2. Dua pokok bahasa: selektor, cara memilih elemen mana yang dihias, dan box model, cara browser menghitung ruang setiap elemen. Ini fondasi untuk bab 4 (flex dan grid).

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/03-css-selektor-box-model/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup mengubah box model (padding, border, margin) sekali klik. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `03-css-selektor-box-model`, sesuai perintah pengerjaan dan judul TOC.
- Repo sudah memuat link lama ke `/03-css-selektor/` di `public/index.html` dan `public/02-html-semantik/index.html`. Link itu di luar empat deliverable bab ini, jadi tidak diubah di sini. Pencocokan slug ke `03-css-selektor-box-model` direncanakan sebagai pekerjaan ikut dalam fase verifikasi lintas bab.
- Link bab berikutnya menunjuk `/04-css-layout-flex-grid/`. Bab 4 belum dibuat, jadi slug ini adalah perkiraan terbaik, mengikuti pola penamaan bab ber-cover model.
- Demo memakai JavaScript inline untuk mengubah padding, border, dan margin pada satu kartu. Paling ringkas, tanpa build tool.
- Ilustrasi dua buah, mengikuti pola bab 1 dan 2.
- `konsep.md` adalah kerangka isi; naskah penuh sesuai kerangka itu ada di halaman publik.
