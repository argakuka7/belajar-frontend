# Konsep Bab 24: Proyek Penutup: Dashboard Konsumsi API

Kembali ke [overview](overview.md).

## Tujuan bab

Bab 1 sampai 23 mengajarkan potongan, satu per satu. Selektor, event, state, fetch, render, komponen, cache. Setiap bab melatih satu potongan dalam contoh kecil yang berdiri sendiri. Bab ini menutup buku dengan satu proyek: dashboard cuaca yang mengambil data dari API, menyimpan cache, dan merendernya sebagai daftar, dengan form untuk menambah dan menghapus kota.

Dua pertanyaan wajib seri ini dijawab dalam urutan itu. Pertama, mengapa bab penutup berbentuk proyek, dan apa yang hanya terlihat saat potongan-potongan disusun jadi satu. Kedua, bagaimana dashboard itu bekerja di baliknya, dari alur data sampai cache dan kondisi gagal.

## Isi

### Mengapa bab penutup berbentuk proyek

Mengetahui dan bisa memakai adalah dua hal berbeda. Contoh per bab kecil dan sengaja, jadi urutan penyusunan tidak pernah jadi soal. Proyek menanyakan hal yang tidak ditanyakan bab satuan: potongan disusun dalam urutan apa, siapa menyimpan data, dan apa yang jalan duluan saat halaman dibuka.

Dashboard didefinisikan di sini: papan informasi yang mengumpulkan beberapa angka penting di satu layar, seperti dashboard mobil yang menyatukan kecepatan dan bahan bakar. Pilihan jatuh ke dashboard cuaca karena datanya nyata, gratis, tanpa kunci API, dan sudah ditemu di bab 11 lewat Open-Meteo.

Daftar bab yang terpakai disebut eksplisit: form dan validasi bab 13, state dan localStorage bab 10, fetch dan async bab 11, render daftar bab 12, cache bab 23, aksesibilitas bab 19, design token bab 20. Hampir semua buku terpakai, dan itulah poin bab penutup.

### Merencanakan proyek sebelum mengetik

Proyek mulai dari daftar fitur, bukan dari kode. Fiturnya tiga. Menampilkan suhu terkini untuk setiap kota tersimpan. Menambah dan menghapus kota lewat form. Saat halaman dibuka ulang, daftar tetap ada dan datanya tampil secepat mungkin.

Dari daftar fitur, alur data digambar dulu: form mengirim nama kota, daftar kota disimpan di localStorage, setiap kota memicu satu fetch, hasilnya dirender sebagai kartu. Data dulu, tampilan menyusul, pola bab 10 dan 14. Satu keputusan lingkup: kota dibatasi enam pilihan dengan koordinat yang sudah tertulis, karena mengetik nama bebas butuh API pencarian lokasi tambahan yang tidak dibayar kebutuhan bab ini.

### Alur data dari form ke layar

Semua perubahan lewat satu pintu. Fungsi render membaca state dan menggambar ulang daftar dari awal. Menambah kota berarti satu nama masuk state lalu render dipanggil. Menghapus kota sama, satu nama keluar. Tidak ada kode yang mengubah kartu satu per satu, daftar selalu digambar ulang dari state, cara bab 12.

### Cache, minta sekali, pakai beberapa kali

Setiap kartu butuh satu fetch, dan fetch butuh waktu serta kuota. Cache, simpanan jawaban agar permintaan yang sama tidak diulang, sudah ditemu di bab 23. Aturannya: sebelum fetch, lihat cache. Ada datanya dan belum kedaluwarsa, pakai yang lama. Tidak ada atau sudah basi, minta baru lalu simpan.

Umur cache ditulis bersama datanya. localStorage menyimpan waktu jawaban diterima, dan setiap kali dibaca, selisihnya dihitung dengan Date.now(). Lebih dari sepuluh menit, data dianggap basi dan diminta ulang. Angka sepuluh menit tidak ada rumusnya, cukup sesuai cuaca yang berubah perlahan. Menghapus kota ikut menghapus cache-nya.

### Kondisi menunggu dan gagal

Selama menunggu, kartu menampilkan tulisan Mengambil, bukan kosong. Kalau fetch gagal, kartu menampilkan pesan galat dan kota lain tetap aman, karena setiap kota mencoba dengan try/catch sendiri, pola bab 11. Daftar kosong juga punya tulisan, suruh menambah kota pertama. Halaman yang diam tanpa penjelasan terlihat seperti macet.

### Batas proyek

Proyek sengaja kecil. Tidak ada grafik, tidak ada pembaruan otomatis, tidak ada login. Tujuan bab ini menyatukan yang sudah dipelajari, bukan menambah yang baru. Dashboard sungguhan akan menambah refresh berkala, pindah halaman tanpa muat ulang bab 18, dan tes bab 22. Daftar itu jadi peta kalau pembaca mau melanjutkan.

### Analogi: dapur

Satu gambar untuk semuanya. Proyek adalah memasak satu menu lengkap, bukan latihan memotong satu bahan. Data cuaca adalah bahan mentahnya, fetch adalah perjalanan ke pasar, cache adalah kulkas, beli sekali, pakai beberapa kali, dan yang terlalu lama dibuang. State adalah catatan pesanan di meja dapur, sumber tunggal yang menentukan apa yang sedang dibuat. Render adalah menata piring, setiap pesanan baru menata ulang piring dari catatan, bukan mengubah satu piring di tempat. Bahan habis bukan bencana, cukup tulis di piring itu, pesanan lain tetap keluar.

### Pasangan contoh

Contoh yang dipasangkan adalah unit inti, satu kartu kota, dari ambil data sampai jadi tampilan. Vanilanya satu async function: cek cache, fetch kalau perlu, simpan cache dengan waktu, lalu bangun elemen kartu dan isi textContent. React-nya kartu yang sama sebagai komponen, cuaca masuk state lewat useEffect, tampilan membaca state. Kode fetch dan cache-nya sama persis, yang berubah hanya tempat hasilnya dititipkan.

### Demo Hidup

Demo menjalankan dashboard utuhnya: form pilih kota, daftar kartu, cache localStorage dengan umur sepuluh menit, hapus kota, dan muat ulang halaman yang menampilkan data cache seketika. Vanilla, tanpa build tool, tanpa CDN, satu-satunya jaringan yang dipakai adalah API cuacanya.

Ringkasan bab ini. Proyek menyatukan potongan-potongan buku jadi satu halaman yang bekerja. Alurnya satu: form mengubah state, state tersimpan di localStorage, render menggambar ulang dari state, setiap kota mengambil datanya sendiri dengan cache di depannya. Buku berakhir di sini, dan proyek ini titik mulai kalau pembaca mau melanjutkan sendiri.

## Pasangan contoh

- Vanilla: `JEDA_CACHE`, `kartuKota(nama)` async, cek cache di localStorage, fetch dengan pemeriksaan ok, simpan `{ suhu, waktu }`, tulis ke kartu lewat textContent, catch menulis pesan gagal.
- React: komponen `KartuKota({ nama })`, `useEffect` dengan dependensi `[nama]`, logika cache dan fetch sama, hasilnya masuk `useState`, JSX menampilkan status tunggu, suhu, atau gagal.

## Perbedaan inti

Kedua versi menjalankan logika yang sama, cek cache dulu, fetch kalau basi, simpan lagi. Vanilanya penulis kode yang mengurus urutannya, dan urutan itu jalan karena kedisiplinan. React menaruh hasil fetch di state dan membiarkan tampilan mengikuti, tempat yang sama dengan bab 16. Kosakata proyek tetap milik vanilla, state, fetch, cache, render, dan React hanya membungkusnya. Pesan penutup buku: tidak ada yang baru di bab ini, dan justru itu ukurannya.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: Fetch API.
- MDN: Window.localStorage.
- MDN: Response.
- MDN: async function.
- MDN: JSON.
- web.dev: Learn JavaScript.
- Open-Meteo: API Documentation.
