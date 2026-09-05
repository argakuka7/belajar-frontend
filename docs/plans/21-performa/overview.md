# Overview Bab 21: Performa: Bundle, Lazy Load & Gambar

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 21 membuka seksi Kemahiran bersama bab 18 sampai 20. Halaman yang dibaca sejauh ini sudah pandai, tapi belum dibahas satu hal yang menentukan pembaca tinggal atau pergi: seberapa cepat halamannya siap. Bab ini menjawab dua pertanyaan wajib seri ini dalam urutan itu. Pertama, mengapa performa ada sebagai perhatian, halaman adalah unduhan, dan unduhan punya biaya waktu serta kuota. Kedua, cara kerja tiga teknik utama di baliknya: bundle yang menggabungkan kode, lazy load yang menunda pemuatan sampai benar-benar dibutuhkan, dan perawatan gambar sebagai beban terberat halaman. Rutenya: mengapa performa ada, apa yang dibawa browser saat membuka halaman, bundle, lazy load, gambar, Core Web Vitals, analogi tas piknik, pasangan contoh galeri tertunda, lalu demo. Ini bab Kemahiran, bukan bab React, jadi Demo Hidup ditulis dengan JavaScript murni. Demo membangun ulang lazy load gambar dengan IntersectionObserver supaya pembaca bisa melihat urutan pemuatan lewat log, bukan cuma membayangkannya.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/21-performa/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Urutan produksi

1. Konsep (`konsep.md`), kerangka naskah 900 sampai 1.400 kata.
2. Halaman publik (`public/21-performa/index.html`), naskah penuh plus pasangan contoh plus demo.
3. Kontrak Kuka (`kontrak-kuka.md`), dipakai fase ilustrasi.
4. Verifikasi: halaman tanpa error console, demo jalan dengan scroll, sintaks JS diperiksa, prose lolos STYLE_GUIDE.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan tanpa build tool dan tanpa jaringan: galeri kecil di dalam kotak yang bisa digulir, log menunjukkan setiap gambar baru dipasang src saat kotaknya mendekati area layar, tombol Ulangi demo mengembalikan keadaan awal. Gambar demo berupa SVG data URI yang menyatu di halaman, jadi mekanismenya sungguhan tapi tidak bergantung koneksi. Pasangan contoh menunjukkan perilaku sama di kedua versi, vanilla dan React, galeri yang baru dimuat setelah tombol ditekan. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `21-performa`, sesuai TOC di `public/index.html` dan README.
- Link bab sebelumnya menunjuk `/20-design-token/` dengan judul Styling Modern: Variabel & Design Token, link bab berikutnya menunjuk `/22-testing/` dengan judul Testing Front End. Bab 20 dikerjakan paralel oleh worker lain, jadi halamannya belum ada di cabang ini. Slug dan judul diambil dari pola TOC `public/index.html` dan README, mengikuti kebiasaan bab 14 yang menaut ke bab 15 sebelum bab 15 ada.
- Analogi tunggal bab ini adalah tas piknik. Bundle adalah mengepak semua barang ke satu tas supaya sekali jalan. Lazy load adalah menyisakan payung dan jaket tebal di mobil, diambil hanya saat hujan turun. Gambar adalah galon air, beban terberat yang sering dibawa kelebihan ukuran.
- Demo Hidup ditulis vanilla, tanpa React, karena bab ini bukan bab React dan mekanisme lazy load paling jelas dilihat tanpa lapisan library. Ketentuan React via CDN ESM berlaku untuk bab 14 sampai 17.
- Gambar demo memakai SVG data URI (gambar yang disandikan langsung di dalam teks halaman) supaya demo jalan offline. Mekanismenya tetap sungguhan: atribut src benar-benar dipasang hanya saat kotak gambar mendekati layar.
- Demo memakai IntersectionObserver, bukan atribut `loading="lazy"`, supaya pemuatannya bisa dicatat ke log dan dilihat pembaca. Atribut `loading="lazy"` tetap diajarkan di naskah dan dipakai di pasangan contoh karena itulah cara paling murah di halaman nyata.
- Pasangan contoh memakai galeri yang ditunda. Vanilanya pasang pendengar klik lalu membuat elemen img dengan createElement. React-nya state `dimuat` dan render kondisional. Perilaku kedua sisi identik sesuai ADR-0002.
- Bab 0 sampai 20 tidak diajarkan ulang; DevTools di bab 0, DOM di bab 8, event di bab 9, React state di bab 15.
- Jargon yang didefinisikan pertama kali: performa, bundle, bundler, build tool, request atau permintaan, lazy load, eager, code splitting, dynamic import, React.lazy, Suspense, format gambar, WebP dan AVIF, srcset, data URI, IntersectionObserver, layout shift atau pergeseran tata letak, Core Web Vitals, LCP atau Largest Contentful Paint, INP atau Interaction to Next Paint, CLS atau Cumulative Layout Shift, FID atau First Input Delay.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 14.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
