# Overview Bab 16: React: Efek & Pengambilan Data

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 14 dan 15 merender tampilan dari state yang sudah ada di memori. Bab ini memasukkan dunia luar: data yang harus diminta dari server, dengan fetch dari bab 11. Bab ini menjawab dua pertanyaan. Pertama, mengapa permintaan data tidak boleh ditulis langsung di badan komponen, dan ke mana ia ditaruh: efek, pekerjaan yang keluar dari hitungan tampilan, dijalankan lewat useEffect. Kedua, bagaimana efek bekerja di balik layar: urutan render dulu efek belakangan, array dependensi, fungsi cleanup, sampai dua jawaban yang pulang tidak berurutan. Rutenya: mengapa efek ada, data datang terlambat, useEffect dan array dependensi, di balik efek, balapan dua jawaban, analogi tunggal, pasangan contoh, dan demo. Demo memuat React lewat CDN ESM tanpa build tool sesuai ketentuan bab 14 sampai 17, tetap memakai createElement, dan mengambil data cuaca dari API yang sama dengan bab 11 sehingga pembaca mengenali sumbernya.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/16-efek-fetch/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan tanpa klik tambahan: teks Memuat data cuaca tampil dulu, lalu berganti suhu Jakarta dari Open-Meteo, dan tombol Muat ulang mengulang permintaan dengan mengubah dependensi. Demo butuh jaringan untuk memuat React dari CDN dan mengambil data; jika jaringan putus, pesan gagal tampil tanpa merusak halaman. Pasangan contoh menunjukkan perilaku yang sama di kedua versi, vanilla dan React, memuat lalu suhu, sehingga pembaca bisa membandingkan langsung. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `16-efek-fetch`, sesuai TOC di `public/index.html`.
- Link bab sebelumnya menunjuk `/15-jsx-props-state/` dengan judul React: JSX, Props & State. Bab 15 dikerjakan paralel oleh worker lain, jadi halamannya belum ada di cabang ini. Slug dan judul diambil dari pola TOC `public/index.html` dan README, mengikuti kebiasaan bab 14 yang menaut ke bab 15 sebelum bab 15 ada. Link bab berikutnya menunjuk `/17-custom-hooks/` dengan judul lengkap README, React: Custom Hooks & Pola Komposisi.
- Analogi tunggal bab ini adalah kurir dan catatan belanja. Kamar yang ditata dari denah adalah tampilan komponen, lanjutan analogi tukang dan denah bab 14. Kurir yang dikirim ke toko adalah efek, dengan aturan berangkat setelah kamar tertata, bukan di tengah penataan. Catatan belanja adalah array dependensi, kurir tidak dikirim ulang selama catatannya sama. Menandai pesanan lama tidak lagi diterima sebelum kurir baru berangkat adalah cleanup, dan rak kosong selama barang di jalan adalah layar memuat.
- Demo Hidup memuat React lewat CDN ESM dari esm.sh, versi dipatok `react@19.2.8` dan `react-dom@19.2.8`, tanpa import map dan tanpa build tool, sesuai ADR-0003 dan ketentuan bab React. Demo memakai `React.createElement` karena JSX tidak bisa jalan tanpa build tool. Sumber datanya API Open-Meteo dengan URL yang sama persis dengan demo bab 11, suhu Jakarta saat ini, supaya bab ini fokus ke efek, bukan ke API baru.
- Pasangan contoh memakai kasus yang sama dengan demo, cuaca Jakarta. Kolom React tetap ditulis dengan JSX agar konsisten dengan bab 7 sampai 15, disertai kalimat pengantar bahwa demo memakai bentuk mentahnya. Versi pasangan sengaja tanpa pengaman balapan; pengaman bendera dijelaskan di naskah dan dipakai di demo.
- Fetch, Promise, async dan await, JSON, API tidak diajarkan ulang, mengacu ke bab 11. State ke bab 10 dan 14. Kondisi dan key ke bab 12. JSX, props, dan useState ke bab 15.
- Jargon yang didefinisikan pertama kali di bab ini: efek, efek samping (side effect), useEffect, array dependensi (dependency array), cleanup, bongkar (unmount), balapan (race). Istilah memuat (loading) sudah dipakai bab 12, definisi singkatnya diulang.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 15.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
