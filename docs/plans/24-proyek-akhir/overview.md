# Overview Bab 24: Proyek Penutup: Dashboard Konsumsi API

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 24 menutup buku dengan satu proyek, bukan dengan materi baru. Bab 1 sampai 23 mengajarkan potongan satu per satu, dan setiap contoh sengaja kecil sehingga urutan penyusunan tidak pernah jadi soal. Bab ini menjawab dua pokok pertanyaan. Pertama, mengapa bab penutup berbentuk proyek, apa yang hanya terlihat saat potongan disusun jadi satu halaman. Kedua, bagaimana dashboard itu bekerja di baliknya, dari perencanaan fitur, alur data dari form ke state ke render, cache localStorage dengan umur sepuluh menit, sampai kondisi menunggu dan gagal per kota. Rutenya: mengapa proyek, rencana sebelum mengetik, alur data, cache, kondisi gagal, batas proyek, analogi tunggal, pasangan contoh, dan demo. Proyeknya dashboard cuaca dengan API publik Open-Meteo yang sudah ditemu di bab 11, sehingga bab 10, 11, 12, 13, 19, 20, dan 23 terpakai nyata di satu halaman. Ini bab terakhir, jadi nav halamannya hanya Kembali ke bab 23.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/24-proyek-akhir/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console dari kode halaman sendiri. Demo Hidup jalan tanpa build tool dan tanpa CDN, satu-satunya jaringan yang dipakai adalah API cuaca: pilih kota, tekan Tambah, kartu muncul dengan tulisan mengambil lalu suhu dari server. Buka ulang halaman, daftar kota tampil kembali dan suhu datang dari cache dalam sekejap, bertanda (cache). Setelah sepuluh menit angka diminta ulang. Tombol Hapus mengeluarkan kota dari daftar dan cache. Menambah kota yang sama memunculkan pesan validasi, bukan kartu ganda. Kalau jaringan putus, kartu menampilkan pesan gagal dan kota lain tetap aman. Pasangan contoh menunjukkan logika yang sama di kedua versi, vanilla dan React, sehingga pembaca bisa membandingkan langsung. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `24-proyek-akhir`, sesuai entri TOC di `public/index.html` yang menaut `/24-proyek-akhir/` untuk Bab 24. Judul penuh di halaman mengikuti kapten, Proyek Penutup: Dashboard Konsumsi API, karena entri TOC itu ringkasannya.
- Link bab sebelumnya menunjuk `/23-caching-pwa/` dengan judul Caching, PWA & Offline. Bab 23 dikerjakan paralel oleh worker lain, jadi halamannya belum ada di cabang ini. Slug dan judul diambil dari pola TOC `public/index.html`, mengikuti kebiasaan bab 14 yang menaut ke bab 15 sebelum bab 15 ada. Tidak ada link bab berikutnya, bab 24 adalah bab terakhir TOC.
- Demo Hidup ditulis vanilla JS, bukan React. Ketentuan React via CDN ESM berlaku untuk bab React 14 sampai 17 (dicatat di overview bab 14), sedangkan bab 24 adalah bab Kemahiran. Demo vanilla membuat proyek penutup jalan dengan nol dependensi, satu-satunya jaringan yang dibutuhkan adalah API cuacanya. Varian React tetap hadir sebagai kolom kanan pasangan contoh.
- API tetap Open-Meteo seperti bab 11, alasan yang sama: publik, tanpa kunci, CORS diizinkan, datanya nyata.
- Kota dibatasi enam pilihan fixed dengan koordinat tertulis di kode (Jakarta, Bandung, Surabaya, Yogyakarta, Medan, Denpasar). Mengetik nama bebas butuh API geocoding tambahan, lingkup yang tidak dibayar kebutuhan bab ini.
- Umur cache dipatok 10 menit sebagai konstanta `JEDA_CACHE` di halaman. Angka ini knob, bukan rumus, cukup sesuai data cuaca yang berubah perlahan. Menghapus kota ikut menghapus cache-nya supaya penyimpanan tidak menumpuk.
- Analogi tunggal bab ini adalah dapur. Proyek memasak satu menu lengkap, data adalah bahan, fetch perjalanan ke pasar, cache kulkas berlabel tanggal, state catatan pesanan, render menata piring dari catatan, bahan habis ditulis di piring tanpa menghentikan pesanan lain.
- Pasangan contoh mengambil satu unit inti, kartu kota, bukan seluruh dashboard, supaya kedua kolom masih bisa dibaca berdampingan. Demo memakai versi vanilla dari unit yang sama, ditambah form, daftar, dan hapus.
- Jargon yang didefinisikan saat pertama muncul: dashboard. Istilah cache, state, fetch, render, localStorage, dan try/catch sudah didefinisikan di bab asalnya dan diulang definisi singkatnya saat dipakai, sesuai kebiasaan seri.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 14.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
