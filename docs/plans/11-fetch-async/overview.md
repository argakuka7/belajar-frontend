# Overview Bab 11: Fetch & Async: Konsumsi API

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 11 keluar dari data milik halaman sendiri. Sampai bab 10 semua nilai lahir dari kode halaman atau localStorage, padahal halaman nyata menampilkan data yang tinggal di server: harga, pos, cuaca. Tiga pokok bahasan. Pertama fetch, perintah browser untuk meminta data ke server saat halaman sudah jalan, lewat API milik pihak lain. Kedua async dan await, cara menunggu hasil jaringan tanpa membekukan halaman, dibangun di atas konsep Promise. Ketiga penanganan gagal, dua jenisnya, gagal jaringan yang ditangkap try/catch dan jawaban buruk yang diperiksa lewat response.ok. Rutenya: mengapa fetch ada, jaringan yang lambat dan JavaScript satu jalur, Promise, async dan await, fetch dan Response, dua jenis gagal, batas fetch, lalu analogi tunggal, pasangan contoh, dan demo. Demo bab ini mengambil suhu Jakarta dari API cuaca publik Open-Meteo, menampilkan tulisan Mengambil selama data di jalan, lalu angka suhu nyata.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/11-fetch-async/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan dengan klik: tulisan Mengambil muncul sesaat, lalu diganti suhu angka nyata dari server. Tombol kedua kali menghasilkan permintaan baru, angkanya bisa berubah karena server mengukur ulang. Jika jaringan diputus, pesan gagal dari catch menggantikan angka. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `11-fetch-async`, sesuai TOC di `public/index.html` dan link lanjutan yang sudah ditulis bab 10.
- Link bab sebelumnya menunjuk `/10-state-localstorage/`, link bab berikutnya menunjuk `/12-merender-data/`, mengikuti slug TOC.
- Analogi tunggal bab ini adalah kantin. Konter adalah API, memesan adalah fetch, bon berisi nomor pesanan adalah Promise, menunggu sambil mengobrol adalah async tanpa membekukan halaman, jeda hanya pada pesanan sendiri, petugas memanggil adalah janji terpenuhi, nampan adalah Response, kotak kemasan standar adalah JSON dan metode json(), pesanan habis adalah 404, dapur bermasalah adalah 500, dan listrik padam adalah gagal jaringan yang ditangkap catch.
- API untuk contoh dan demo: Open-Meteo (`api.open-meteo.com`). Gratis, tanpa kunci, HTTPS, CORS terbuka, data berubah setiap permintaan. GitHub REST API sempat dipertimbangkan tetapi batas 60 permintaan per jam per IP membuat demo bisa gagal saat pertama dicoba.
- Demo Hidup hanya vanilla, tanpa memuat React lewat CDN, mengikuti keputusan bab 7 sampai 10. React tetap muncul sebagai kode teks di pasangan contoh. Ketentuan CDN ESM di perintah pengerjaan berlaku untuk bab React 14 sampai 17.
- Bab 12 adalah merender data, jadi bab ini hanya menampilkan satu nilai dengan `textContent` dan tidak mengajarkan render daftar. Kolom `weather_code` sengaja tidak diterjemahkan karena butuh tabel kondisi, wilayah bab 12.
- `try/catch` diajarkan minimal di bab ini karena fetch menuntut penanganan gagal. Bab 10 menyebutnya sekali tanpa mengajarkan. Hanya bentuk `try` dan `catch` yang dipakai, `finally` tidak disinggung.
- Status kode disebut sebagai tiga contoh, 200, 404, dan 500, tanpa daftar lengkap. Yang diajarkan untuk dipakai adalah `response.ok`.
- CORS disebut satu kalimat sebagai batas browser, tidak diajarkan. Origin sudah didefinisikan bab 10.
- Jargon yang didefinisikan pertama kali: konsumsi, API, HTTP, fetch, async atau asynchronous, Promise, status janji, async function, await, Response, status, `response.ok`, `response.json()`, try/catch, CORS. JSON mengacu ke definisi bab 10, server dan backend mengacu ke bab 1.
- Demo menampilkan pesan loading sebelum data datang supaya sifat async terlihat dengan mata, bukan hanya dijelaskan.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 10.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
