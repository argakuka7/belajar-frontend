# Overview Bab 22: Testing Front End

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 22 masuk kelompok kemahiran. Halaman sudah bisa dibangun, dirouting, dibuat aksesibel, dipercepat, dan dioptimalkan. Bab ini menutup risikonya: setiap perubahan bisa merusak bagian lain tanpa terlihat. Temanya testing front end, memindahkan pemeriksaan manual jadi test, kode yang membandingkan harapan dengan hasil dan bisa dijalankan komputer berulang-ulang. Rutenya: mengapa halaman perlu diuji, test paling sederhana sebagai pembanding harapan dan hasil (assertion dan unit test), regresi sebagai musuh utamanya, tiga lapis pengujian (unit, integration, end-to-end), test runner, menguji komponen React dengan Testing Library, analogi tunggal, pasangan contoh, dan demo. Demo hidupnya vanilla, test runner mini yang jalan di halaman tanpa alat apa pun, karena bab 22 bukan bab React (ketentuan CDN ESM hanya untuk bab 14 sampai 17) dan ADR-0003 mewajibkan demo jalan tanpa build tool.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/22-testing/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan dengan sekali klik: tombol Jalankan tes menampilkan tiga baris LOLOS dan ringkasan 3 dari 3 test. Tombol Rusak fungsi, tes ulang mematikan pemangkasan spasi pada fungsi, dua test berubah GAGAL, ringkasan 1 dari 3, lalu tombol yang sama (berlabel Perbaiki fungsi) mengembalikan semuanya ke hijau. Pasangan contoh menunjukkan niat yang sama di kedua kolom, vanilla dengan fungsi asersi sendiri, React dengan Testing Library. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `22-testing`, sesuai TOC di `public/index.html`.
- Link bab sebelumnya menunjuk `/21-performa/` dengan judul lengkap Performa: Bundle, Lazy Load & Gambar dari README; link bab berikutnya menunjuk `/23-caching-pwa/` dengan judul Caching, PWA & Offline. Bab 15 sampai 21 dikerjakan paralel oleh worker lain, jadi halamannya belum ada di cabang ini. Slug dan judul diambil dari pola TOC `public/index.html` dan README, mengikuti kebiasaan bab 14 yang menaut ke bab 15 sebelum bab 15 ada.
- Analogi tunggal bab ini adalah bengkel mobil. Unit test adalah mengecek satu komponen di bangku kerja, integration test merakit beberapa komponen jadi satu set, end-to-end adalah uji jalan di jalan raya, regresi adalah kerusakan lama yang kambuh, dan test suite adalah buku riwayat bengkel yang mengulang semua pemeriksaan lama setiap servis.
- Demo hidup vanilla: test runner mini berisi daftar tiga test untuk fungsi murni `normalkanEmail` (memangkas spasi, huruf kecil), lanjutan tema validasi form bab 13. Dua tombol, Jalankan tes dan Rusak fungsi (toggle ke Perbaiki fungsi). Tidak memuat React lewat CDN karena demo bab React saja yang menuntut itu.
- Kolom React di pasangan contoh memakai React Testing Library (render, screen, fireEvent, expect) dan hanya ditampilkan, tidak dijalankan di halaman, karena butuh test runner di Node. Ini konsisten dengan bab 14 yang menampilkan JSX di kolom React sementara demonya memakai bentuk yang jalan tanpa build.
- Jargon yang didefinisikan pertama kali: testing manual, test, assertion, lolos (pass), gagal (fail), unit test, fungsi murni (diulang dari konteks bab 13), regresi, integration test, end-to-end atau e2e, test runner, Node, Testing Library, render (diulang satu klausa), test suite, peran elemen. Fetch, state, dan komponen mengacu ke bab 11, 10, dan 14.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 14.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
