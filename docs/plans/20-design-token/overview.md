# Overview Bab 20: Styling Modern: Variabel & Design Token

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 20 membuka kemahiran styling. Sejak bab 3, semua CSS ditulis dengan nilai langsung, dan bab ini menunjukkan biayanya saat halaman tumbuh: satu nilai yang sama hidup di banyak tempat. Tiga pokok bahasan. Pertama variabel CSS, custom property yang memberi nama pada nilai, didefinisikan di `:root` dan dibaca lewat `var()`. Kedua cara kerjanya di baliknya, warisan nilai dari induk ke anak, penulisan ulang per cabang, dan isi ulang dari JavaScript. Ketiga design token, disiplin penamaan yang membuat variabel jadi kosakata bersama, lengkap dengan penerapan paling populer, tema gelap tanpa menulis ulang aturan. Rutenya: mengapa styling modern, variabel CSS, di balik var, design token, tema gelap, batas variabel, lalu analogi tunggal, pasangan contoh, dan demo. Halaman yang sedang dibaca sendiri memakai cara ini, `enhancements.css` membuka dirinya dengan `:root` berisi variabel, dan bab itu memanfaatkan fakta ini sebagai bukti hidup.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/20-design-token/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan tanpa klik tambahan: kotak demo tampil dengan tema terang, tombol Gelap mengubah warna latar, teks, kartu, dan chip di dalam kotak sekaligus, tombol Terang mengembalikannya, baris status menunjukkan nilai atribut `data-tema` yang ikut berganti. Pasangan contoh menunjukkan perilaku sama di kedua versi, satu kartu dengan aksen yang bisa diganti tombol, sehingga pembaca bisa membandingkan langsung. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `20-design-token`, sesuai TOC di `public/index.html`.
- Link bab sebelumnya menunjuk `/19-aksesibilitas/` dengan judul Bab 19 - Aksesibilitas (a11y), link bab berikutnya menunjuk `/21-performa/` dengan judul Bab 21 - Performa: Bundle, Lazy Load & Gambar. Bab 19 sedang dikerjakan paralel oleh worker lain, jadi halamannya belum ada di cabang ini; slug dan judul diambil dari pola TOC `public/index.html` dan README, mengikuti kebiasaan bab 14 yang menaut ke bab 15 sebelum bab 15 ada.
- Analogi tunggal bab ini adalah toples berlabel di dapur. Variabel adalah toplesnya, isi toples adalah nilai, resep yang menyebut label adalah aturan CSS yang membaca `var()`. Token adalah kebiasaan memberi label sesuai isi, dan mode gelap adalah mengganti isi semua toples tanpa menulis ulang resep.
- Demo Hidup tidak memuat React. Bab 20 bukan bab React, jadi demo vanilla murni sudah memenuhi ADR-0003 dan ketentuan perintah pengerjaan; tema adalah materi CSS, bukan materi React.
- Demo membahas tema di dalam kotaknya sendiri lewat atribut `data-tema` pada elemen `.demo`, bukan pada `html` halaman, supaya tema demo tidak menabrak tampilan situs dan tetap bisa diperiksa lewat baris status. Pola atribut di `html` tetap diajarkan di naskah dan contoh kode.
- Pasangan contoh memakai kartu dengan aksen yang bisa diganti. Vanilanya `setProperty` pada elemen; React-nya state plus atribut `style` berisi variabel. Kolom React memakai `useState` yang sudah diajarkan bab 15, tanpa efek.
- Jargon yang didefinisikan pertama kali: variabel, custom property atau properti kustom, `:root`, `var()`, warisan, design token, design system, tema, `prefers-color-scheme` (dikenal di bab 5, diulang satu kalimat). Media query, state, dan render sudah didefinisikan di bab 5, 10, dan 12, cukup dirujuk.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 14.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
