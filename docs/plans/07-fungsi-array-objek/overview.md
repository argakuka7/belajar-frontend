# Overview Bab 7: Fungsi, Array & Objek

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 7 melanjutkan seksi "JavaScript & Halaman", langsung setelah bab 6 yang membahas variabel, tipe data, dan kontrol aliran. Tiga pokok bahasa: fungsi untuk memakai ulang perintah, array untuk menyimpan banyak nilai berurutan, dan objek untuk menyimpan nilai dengan label. DOM dan event tidak dibahas di sini, itu bab 8 dan 9. Demo bab ini bekerja pada data biasa, bukan pada manipulasi halaman.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/07-fungsi-array-objek/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup benar-benar menjalankan JavaScript: pembaca menambah angka ke array, lalu melihat hasil `map` dan `filter` berubah langsung. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `07-fungsi-array-objek`, sesuai TOC di `public/index.html` yang sudah menautkan `/07-fungsi-array-objek/`.
- Link bab sebelumnya menunjuk `/06-js-dasar/`, link bab berikutnya menunjuk `/08-dom/`, mengikuti slug TOC.
- Demo Hidup memakai array sebagai data utama. Pembaca mengetik angka, menekan tombol Tambah, dan melihat tiga hasil langsung: array asli, hasil `map` (dikali dua), dan hasil `filter` (bilangan genap). Ini memakai fungsi, array, dan objek sekaligus tanpa build tool. Aman karena semua kode berjalan di browser pembaca sendiri.
- React hanya muncul di pasangan contoh sebagai kode teks. Demo tidak memuat React lewat CDN, karena subjek bab ini adalah fungsi, array, dan objek itu sendiri dan demo vanilla sudah cukup. Ini lebih sederhana dan tetap memenuhi perintah pengerjaan.
- Analogi tunggal bab ini adalah toko kecil. Fungsi adalah resep standar yang bisa dipanggil kapan saja, array adalah rak berisi barang berurutan bernomor, objek adalah kartu stok dengan label.
- Jargon yang didefinisikan pertama kali: fungsi, parameter, `return`, arrow, array, indeks, metode, `map`, `filter`, objek, kunci, akses titik, akses kurung siku.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 6.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
