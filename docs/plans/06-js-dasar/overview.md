# Overview Bab 6: JavaScript: Variabel, Tipe & Kontrol Aliran

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 6 membuka seksi "JavaScript & Halaman". Ini bab pertama yang menyentuh JavaScript, untuk pembaca yang belum pernah koding. Tiga pokok bahasa: variabel untuk menyimpan nilai, tipe data untuk mengenal macam nilai, dan kontrol aliran untuk membuat keputusan serta pengulangan. Fungsi, array, dan objek tidak dibahas di sini, itu bab 7.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/06-js-dasar/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup benar-benar menjalankan JavaScript: pembaca mengetik ekspresi, menekan tombol, dan melihat hasil serta tipe datanya. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `06-js-dasar`, sesuai TOC di `public/index.html` yang sudah menautkan `/06-js-dasar/`.
- Link bab sebelumnya menunjuk `/05-responsif-media-query-unit/`, link bab berikutnya menunjuk `/07-fungsi-array-objek/`, mengikuti slug TOC.
- Demo Hidup memakai `eval()` untuk mengevaluasi ekspresi yang diketik pembaca. Ini cara paling sederhana membuat taman bermain REPL tanpa build tool. Aman karena kode dijalankan di browser pembaca sendiri, dan pembaca mengevaluasi kode miliknya. Hasil dan tipe datanya ditampilkan, dengan penanganan error.
- React hanya muncul di pasangan contoh sebagai kode teks. Demo tidak memuat React lewat CDN, karena subjek bab ini adalah JavaScript itu sendiri dan demo vanilla sudah cukup. Ini lebih sederhana dan tetap memenuhi perintah pengerjaan.
- Analogi tunggal bab ini adalah dapur dan resep. Variabel adalah stoples berlabel, tipe data adalah macam isi stoples, kontrol aliran adalah urutan dan keputusan dalam resep.
- Jargon yang didefinisikan pertama kali: bahasa pemrograman, pernyataan, variabel, tipe data, string, number, boolean, `null`, `undefined`, kontrol aliran, kondisi, operator, `console.log`, loop, ekspresi, state.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 5.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
