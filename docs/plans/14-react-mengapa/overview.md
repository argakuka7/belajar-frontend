# Overview Bab 14: React: Mengapa Framework Ada

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 14 menutup cerita enam bab kerja manual. Bab 8 sampai 13 selalu memakai pola yang sama: data berubah, lalu kode menyuruh DOM berubah, elemen demi elemen. Bab ini menjawab pertanyaan yang pasti muncul saat halaman membesar: mengapa framework ada. Tiga pokok bahasan. Pertama titik lelah, tiga beban yang tumbuh bersama halaman: sinkronisasi manual ke banyak tempat, kode yang menyebar, dan pola yang diulang terus. Kedua gantinya, gaya deklaratif, menyatakan seperti apa tampilan dari state, lalu biarkan React yang menjalankan perintah DOM. Ketiga cara kerjanya di balik layar, komponen sebagai fungsi, state milik komponen, re-render yang hanya menyentuh bagian yang berubah. Rutenya: mengapa framework ada, titik lelah, deklaratif dan imperatif, komponen, state dan re-render, di balik re-render, batas framework, lalu analogi tunggal, pasangan contoh, dan demo. Ini bab React pertama, jadi demo hidupnya memuat React lewat CDN ESM, tanpa build tool, sesuai ketentuan perintah pengerjaan untuk bab 14 sampai 17. Demo memakai createElement, bukan JSX, karena JSX butuh proses build dan justru diajarkan di bab 15.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/14-react-mengapa/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan tanpa klik tambahan: komponen React terpasang di halaman, tulisan hitungan muncul, tombol Tambah satu menaikkan angka satu per satu, tombol Reset mengembalikan ke nol. Demo butuh jaringan untuk memuat React dari CDN; jika jaringan putus, teks Memuat React tetap tampil tanpa merusak halaman. Pasangan contoh menunjukkan perilaku yang sama di kedua versi, vanilla dan React, sehingga pembaca bisa membandingkan langsung. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `14-react-mengapa`, sesuai TOC di `public/index.html`.
- Link bab sebelumnya menunjuk `/13-form-validasi/` dengan judul Form & Validasi di Sisi Klien, link bab berikutnya menunjuk `/15-jsx-props-state/`. Bab 12 dan 13 dikerjakan paralel oleh worker lain, jadi halamannya belum ada di cabang ini. Slug dan judul diambil dari pola TOC `public/index.html` dan README, mengikuti kebiasaan bab 11 yang sudah menaut ke bab 12 sebelum bab 12 ada.
- Analogi tunggal bab ini adalah tukang dan denah. Kamu adalah arsitek, state adalah denah, React adalah tim tukang, DOM adalah bangunannya. Menulis perintah DOM sendiri adalah memasang bata dengan tangan, gaya imperatif. Menggambar denah lalu membiarkan tukang bekerja adalah gaya deklaratif. Re-render adalah tukang yang merombak hanya ruangan yang denahnya berubah, ruangan lain tidak disentuh. Gantung satu bingkai lebih cepat sendiri, itulah halaman kecil yang tidak butuh framework.
- Demo Hidup memuat React lewat CDN ESM dari esm.sh, versi dipatok `react@19.2.8` dan `react-dom@19.2.8`, tanpa import map dan tanpa build tool, sesuai ADR-0003 dan ketentuan bab React. Demo memakai `React.createElement` karena JSX tidak bisa jalan tanpa build, dan JSX memang wilayah bab 15. Ini sekaligus jujur secara pedagogis: pembaca melihat bentuk mentah yang nanti disingkat JSX.
- Pasangan contoh memakai penghitung (counter), satu angka dan dua tombol. Vanilanya mengubah data dan tampilan dalam satu fungsi pendengar; React-nya hanya mengubah state lewat `setJumlah`. Kolom React tetap ditulis dengan JSX agar konsisten dengan bab 7 sampai 13, disertai kalimat pengantar bahwa JSX dipelajari di bab 15.
- State, DOM, event, dan fetch tidak diajarkan ulang; masing-masing mengacu ke bab 10, 8, 9, dan 11.
- Jargon yang didefinisikan pertama kali: framework, library, imperatif, deklaratif, komponen, re-render, virtual DOM, CDN, ESM atau modul ES, JSX, counter atau penghitung. Render sudah didefinisikan lewat konteks bab 12; definisi satu kalimat diulang saat istilah re-render muncul.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 11.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
