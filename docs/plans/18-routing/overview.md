# Overview Bab 18: Routing di Front End

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 18 membuka bagian Kemahiran. Bab 0 sampai 17 selalu bekerja di satu halaman yang dimuat sekali. Situs sungguhan punya banyak halaman, dan bab ini menjawab pertanyaannya: bagaimana satu halaman JavaScript bisa punya banyak halaman sekaligus tanpa memuat ulang, sementara URL tetap jujur mengikuti. Tiga pokok bahasan. Pertama mengapa routing ada, SPA mengganti isi halaman dengan JavaScript dan menitipkan posisi navigasi ke URL supaya bookmark, share, dan tombol back tetap bekerja. Kedua cara kerjanya di balik layar, tumpukan history milik browser, pushState yang menulis rute tanpa memuat ulang, popstate yang memberi tahu saat back dan forward dipakai, plus dua tempat menyimpan rute, hash yang kebal refresh dan jalur sungguhan yang butuh bantuan server. Ketiga bungkusannya, router sebagai tabel rute plus fungsi render, dan React Router yang membakukan pola yang sama. Rutenya: mengapa routing ada, URL sebagai state, tumpukan history, dua cara menulis rute, tabel rute dan fungsi render, React Router, analogi tunggal, pasangan contoh, demo. Ini bab Kemahiran pertama, bukan bab React, jadi demo hidupnya vanilla murni tanpa CDN; kolom React tetap hadir di pasangan contoh sesuai ADR-0002.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/18-routing/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan tanpa build tool dan tanpa jaringan: klik Beranda mengubah URL menjadi berakhiran `#/beranda` dan konten berganti tanpa memuat ulang, klik Tentang sama dengan `#/tentang`, angka isi tumpukan history bertambah setiap navigasi, tombol Mundur mengembalikan konten sebelumnya karena hashchange terdengar. Demo tidak pernah mengubah path halaman, jadi menyegarkan halaman di tengah demo tidak menghasilkan 404. Pasangan contoh menunjukkan router dua halaman yang perilakunya sama di kedua versi, vanilla dan React. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `18-routing`, menyalin href di TOC `public/index.html`. Semua folder bab 0 sampai 14 mengikuti href TOC-nya persis, jadi pola itu dipakai juga di sini.
- Link bab sebelumnya menunjuk `/17-custom-hooks/` dengan judul penuh React: Custom Hooks & Pola Komposisi dari README. Bab 17 dikerjakan paralel oleh worker lain, jadi halamannya belum ada di cabang ini; slug diambil dari TOC `public/index.html`, mengikuti kebiasaan bab 11 sampai 14 yang menaut ke bab berikutnya sebelum bab itu ada. Link bab berikutnya menunjuk `/19-aksesibilitas/` dengan judul Aksesibilitas (a11y).
- Analogi tunggal bab ini adalah hotel dan buku tamu. SPA adalah gedung hotel yang sudah berdiri, router adalah resepsionis, URL adalah nomor kamar, tumpukan history adalah buku tamu, dan tombol back membaca buku itu mundur satu baris. Deep link adalah mengantar tamu langsung ke kamar 204, hanya berhasil kalau petugas gedung tahu kamar itu memang miliknya.
- Demo Hidup memakai router hash, bukan History API, dengan alasan praktis: rute hash aman disegarkan di mana saja tanpa bantuan server, cocok untuk halaman yang dipasang di hosting statis. Mesin yang diajarkan tetap lengkap, hashchange dipakai karena perannya persis seperti popstate, keduanya hanya sinyal bahwa URL berubah dan render tinggal membaca ulang. Bentuk modernnya, History API, tetap diajarkan penuh di naskah dan di kolom vanilla pasangan contoh.
- Ini bab Kemahiran, bukan bab React, jadi demo tidak memuat React lewat CDN ESM sesuai ketentuan perintah pengerjaan yang hanya mewajibkannya untuk bab React. Kolom React di pasangan contoh tetap ada sesuai ADR-0002 dan menunjukkan React Router.
- Pasangan contoh memakai router dua halaman, Beranda dan Tentang, plus rute 404. Vanilla memakai tabel rute objek, preventDefault dari bab 9, pushState, dan popstate. React memakai BrowserRouter, Link, Routes, dan Route dari react-router-dom.
- State, event, fetch, dan render data tidak diajarkan ulang; masing-masing mengacu ke bab 10, 9, 11, dan 12. Library sudah didefinisikan di bab 14.
- Jargon yang didefinisikan pertama kali: routing, SPA atau Single-Page Application, address bar, hash, hashchange, History API, pushState, popstate, deep link, 404, tabel rute, React Router.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 14.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
