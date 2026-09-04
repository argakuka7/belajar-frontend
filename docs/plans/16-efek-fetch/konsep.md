# Konsep Bab 16: React: Efek & Pengambilan Data

Kembali ke [overview](overview.md).

## Tujuan bab

Bab 14 dan 15 menyelesaikan rumahnya: tampilan adalah fungsi dari state, ditulis dalam komponen dengan JSX, props, dan useState. Tetapi semua state sejauh ini lahir dari dalam halaman, ketikan pengguna atau tombol yang ditekan. Data yang paling sering dibutuhkan halaman nyata tidak lahir di sana. Harga, pos, dan cuaca tinggal di server, dan cara memintanya sudah dipelajari di bab 11. Bab ini menyambungkan keduanya: bagaimana sebuah komponen meminta data dari dunia luar tanpa merusak aturan main React.

Dua pertanyaan wajib seri ini dijawab dalam urutan itu. Pertama, mengapa permintaan fetch tidak boleh ditulis langsung di badan komponen, dan ke mana tempat yang benar. Kedua, bagaimana efek bekerja di baliknya, dari urutan render dan efek sampai dua jawaban yang pulang tidak berurutan.

## Isi

### Mengapa efek ada

Fungsi komponen punya satu tugas: mengembalikan tampilan dari props dan state. React menjalankannya berkali-kali, setiap ada re-render, dan diharapkan cepat serta tidak meninggalkan jejak. Bandingkan dengan fetch dari bab 11: permintaan itu menyentuh dunia luar, butuh waktu, dan bisa gagal. Pekerjaan yang keluar dari hitungan tampilan seperti ini disebut efek samping (side effect), contohnya meminta data lewat jaringan, menulis localStorage, atau mengubah judul tab.

Kalau fetch ditulis langsung di badan komponen, setiap re-render memicu permintaan baru. Komponen penghitung bab 14 yang ditekan sepuluh kali akan memesan cuaca sepuluh kali. React menyediakan tempat resminya: useEffect, hook kedua setelah useState, fungsi yang berisi pekerjaan dunia luar dan dijalankan React setelah render selesai.

### Data datang terlambat

Render pertama tidak pernah menunggu data. fetch butuh waktu, dan membekukan render berarti membekukan halaman, kegagalan yang sudah dibedah bab 11. Maka komponen yang mengambil data selalu melewati tiga keadaan: memuat (loading), data belum tiba, lalu berhasil atau gagal setelah jawaban datang.

Ketiganya state biasa dari bab 14. Yang berubah hanya sumber nilainya: dulu ketikan pengguna, kini jawaban server. Kondisi dari bab 12 memilih tampilan mana yang dirender untuk tiap keadaan, teks Memuat selama menunggu, data kalau berhasil, pesan gagal kalau permintaan putus.

### useEffect dan array dependensi

Bentuk pemanggilannya dua bagian. Bagian pertama fungsi efek, berisi pekerjaan dunia luarnya. Bagian kedua array dependensi (dependency array), daftar nilai yang menentukan kapan efek perlu jalan lagi.

Cara bacanya tiga. Array kosong berarti jalan sekali, setelah render pertama, cocok untuk data yang tidak bergantung pada apa pun. Array berisi nilai, misalnya nama kota, berarti jalan setelah render pertama dan setiap kali kota berganti. Array yang lupa ditulis berarti efek jalan setiap selesai render, dan untuk fetch itu permintaan berulang tanpa henti. Kesalahan pemula yang paling sering ada di bagian kedua ini.

### Di balik efek

Urutan kerja React setiap ada perubahan: jalankan ulang fungsi komponen, perbarui DOM, baru jalankan efek yang array dependensinya berubah. Render dulu, efek belakangan. Itu sebabnya badan komponen bukan tempat fetch, badan fungsi jalan jauh sebelum DOM siap, dan berulang tiap re-render. Sebaliknya, re-render yang dipicu state lain tidak mengulang efek, selama dependensinya tidak berubah.

Fungsi efek boleh mengembalikan satu fungsi lagi, namanya cleanup, pekerjaan beres-beres. React menjalankannya tepat sebelum efek berikutnya, dan terakhir kali saat komponen dibongkar (unmount), keluar dari layar. Untuk fetch, isinya biasanya sesederhana satu bendera, tanda bahwa hasil permintaan ini tidak akan diterima lagi.

### Balapan dua jawaban

Pengaman itu perlu karena jawaban tidak selalu berurutan. Kota berubah dari Jakarta ke Bandung, dua permintaan berada di jalan, dan yang dikirim belakangan bisa pulang duluan. Tanpa pengaman, suhu Bandung tampil dulu lalu tertimpa suhu Jakarta, dan layar menunjukkan kota yang salah. Peristiwa dua jawaban yang datang tak berurutan ini disebut balapan (race).

Penangkal paling sederhana memakai cleanup. Setiap efek baru mematikan bendera efek sebelumnya, dan jawaban yang datang setelah benderanya mati dibuang. Biayanya tiga baris, dan tanpanya bug muncul hanya sesekali, justru yang paling susah dicari.

### Analogi: kurir dan catatan belanja

Satu gambar untuk semuanya, lanjutan tukang dan denah dari bab 14. Kamar yang ditata dari denah adalah tampilan komponen. Sebagian perabot tidak ada di gudang, ia harus dipesan ke toko, dan kurir yang kamu kirim itulah efek. Aturannya satu: kurir berangkat setelah kamar tertata, bukan di tengah penataan, sama dengan efek yang jalan setelah render. Catatan belanja di tangan kurir adalah array dependensi. Catatan tidak berubah, kurir tidak dikirim ulang, sekalipun kamu menata ulang kamar. Satu baris catatan berganti, kurir berangkat lagi. Sebelum kurir baru melangkah, pesanan lama kamu tandai tidak lagi diterima, itulah cleanup. Dan selama barang masih di jalan, rak memang kosong, itulah layar memuat.

### Pasangan contoh

Contohnya cuaca Jakarta dari API Open-Meteo, yang sama dengan demo bab 11. Vanilanya satu fungsi async: tulis Memuat dengan textContent, fetch, cek `jawaban.ok`, ubah jawaban jadi objek dengan json(), tulis suhu, dan try/catch menampung gagal. Pemeriksaan `jawaban.ok` penting karena fetch hanya gagal otomatis saat jaringan gagal, bukan saat server menjawab 404 atau 500. Tombol Muat ulang memanggil fungsi yang sama. React-nya dua state, keadaan dan suhu, plus satu useEffect dengan array kosong. Fungsi komponen membaca keadaan dan me-render tampilan yang cocok, dan useEffect hanya bertugas mengubah state begitu jawaban datang.

Kode React di kolom kanan ditulis dengan JSX dari bab 15. Demo di bawah memakai bentuk mentahnya, React.createElement, yang jalan tanpa build tool. Versi pasangan sengaja dibuat ramping tanpa pengaman balapan, pengamannya dijelaskan di demo.

## Perbedaan inti

Di vanilla, kamu yang mengatur kapan fetch jalan dan menulis sendiri pembaruan teks untuk tiap keadaan, satu textContent per keadaan. Di React, keadaan adalah state, tampilan mengikutinya, dan useEffect hanya memasukkan hasil dunia luar ke state. Tiga keadaan, tiga tampilan, tanpa satu baris pun menyentuh DOM langsung. Dan polanya tetap yang sama sejak bab 14: React tidak menghapus pekerjaan vanilla, ia membakukan urutannya, render dulu, efek belakangan, data yang datang menyusul lewat state.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- react.dev: Synchronizing with Effects.
- react.dev: You Might Not Need an Effect.
- MDN: Fetch API.
- MDN: Using the Fetch API.
- Open-Meteo: API Documentation.
