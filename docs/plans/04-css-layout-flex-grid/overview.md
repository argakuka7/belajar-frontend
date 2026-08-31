# Overview Bab 4: CSS Layout: Flex & Grid

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 4 menjelaskan cara menyusun kotak-kotak elemen dari bab 3 menjadi sebuah layout. Dua pokok bahasa: Flexbox untuk menyusun item dalam satu arah, dan Grid untuk menyusun item dalam baris dan kolom. Ini jembatan dari bab 3 (tampilan satu elemen) ke bab 5 (layout yang menyesuaikan lebar layar).

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/04-css-layout-flex-grid/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup mengubah perilaku flex dan grid sekali klik, serta merespons lebar layar (item flex membungkus saat jendela disempitkan). Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `04-css-layout-flex-grid`, sesuai perintah pengerjaan dan judul TOC. Navigasi bab 3 sudah menunjuk ke `/04-css-layout-flex-grid/`, sehingga link bab sebelumnya sampai bab berikutnya utuh dalam satu bab ini. `public/index.html` memakai `/04-flex-grid/` yang berbeda; file itu di luar empat deliverable bab ini, jadi tidak diubah. Pencocokan slug ke `04-css-layout-flex-grid` direncanakan sebagai pekerjaan ikut dalam fase verifikasi lintas bab.
- Bab ini bukan bab React, jadi Demo Hidup memakai JavaScript murni tanpa build tool, mengikuti pola bab 2 dan 3. React hanya muncul di pasangan contoh sebagai kode JSX. Tidak ada React dalam demo.
- Demo terdiri dari dua panel, satu flex dan satu grid. Tombol mengubah properti utama (arah, justify-content, jumlah kolom). Container flex memakai `flex-wrap`, sehingga demo nyata merespons lebar layar tanpa perlu scroll atau JS tambahan.
- Ilustrasi dua buah, mengikuti pola bab 1, 2, dan 3.
- `konsep.md` adalah kerangka isi; naskah penuh sesuai kerangka itu ada di halaman publik.
