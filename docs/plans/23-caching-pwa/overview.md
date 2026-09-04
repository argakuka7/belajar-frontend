# Overview Bab 23: Caching, PWA & Offline

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 23 adalah bab pertama fase penutup. Bab 11 membuat halaman bisa meminta data, bab 21 membuat muatan awalnya hemat. Bab ini melanjutkan ke dua sisa masalah jaringan: permintaan yang sama diulang terus, dan jaringan yang bisa hilang. Tiga pokok bahasan. Pertama lapisan yang sudah bekerja sendiri, HTTP cache dan header Cache-Control, salinan otomatis yang aturannya ditulis server. Kedua lapisan yang dikendalikan halaman, Cache API sebagai lemari milik sendiri dan service worker sebagai penjaga di pintu jaringan yang memilih strategi cache-first atau network-first. Ketiga rangkainnya, PWA, halaman yang lewat manifest dan HTTPS bisa dipasang seperti aplikasi dan jalan offline. Rutenya: mengapa caching dan offline ada, HTTP cache, Cache API, service worker, strategi, PWA, batas dan jebakan, lalu analogi tunggal, pasangan contoh, dan demo. Bab ini bukan bab React, jadi demo hidupnya JavaScript murni dengan Cache API, dan demo tetap jalan tanpa build tool.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/23-caching-pwa/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan tanpa build tool: tombol Simpan mengambil /enhancements.css dari origin halaman lalu menyimpannya lewat caches.open dan cache.add, tombol Baca membaca kembali lewat cache.match dan menampilkan ukuran serta awal isinya. Setelah tersimpan, tombol Baca jalan tanpa jaringan. Cache API hanya tersedia di konteks aman, HTTPS atau localhost, dan halaman menampilkan pesan jujur bila tidak tersedia. Pasangan contoh menunjukkan strategi cache-first yang sama di kedua versi, vanilla dan React hook. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `23-caching-pwa`, sudah tertulis di TOC `public/index.html`.
- Link bab sebelumnya menunjuk `/22-testing/` dengan judul Bab 22 - Testing Front End, link bab berikutnya menunjuk `/24-proyek-akhir/` dengan judul Bab 24 - Proyek Penutup. Bab 22 dan 24 dikerjakan paralel oleh worker lain, jadi halamannya belum ada di cabang ini. Slug dan judul diambil dari pola TOC `public/index.html`, mengikuti kebiasaan bab 11 dan 14 yang menaut ke bab yang belum ada.
- Analogi tunggal bab ini adalah dapur dan lemari persediaan. Jaringan adalah pasar, cache adalah lemari, HTTP cache adalah lemari yang aturannya perjanjian dengan penjual (max-age), Cache API adalah lemari yang kamu isi sendiri, service worker adalah asisten di pintu belakang yang memegang aturan stok, offline adalah menyajikan dari lemari saat pasar tutup, dan manifest adalah papan nama warung yang menjadikan dapur resmi disebut PWA.
- Demo Hidup memakai Cache API, bukan service worker sungguhan. Service worker wajib berupa berkas terpisah yang dipasang lewat register, dan perintah pengerjaan melarang berkas di luar daftar empat deliverable. Cache API adalah lapisan inti yang sama yang dipakai service worker, jadi demonya tetap memegang kode bab. Catatan batas: Cache API hanya jalan di konteks aman, HTTPS atau localhost, dan halamannya sudah menampilkan pesan bila tidak tersedia.
- Pasangan contoh memakai pemuatan daftar catatan dari /api/catatan dengan strategi cache-first. Vanilanya caches.open, cache.match, fetch, lalu cache.put dengan jawaban.clone(). React-nya membungkus logika yang sama dalam hook useCacheFirst dengan useState dan useEffect, menyambung ke bab 16 dan 17.
- Bab 14 sampai 17 diwajibkan memuat React lewat CDN ESM di demo. Bab 23 bukan bab React, jadi demo memakai JavaScript murni dan tidak memuat apa pun dari CDN.
- Nama cache diberi versi, demo-bab-23 dan catatan-v1, sekaligus contoh pola penggantian versi yang dibahas di bagian batas.
- Jargon yang didefinisikan pertama kali: cache, offline, PWA atau Progressive Web App, header, Cache-Control, max-age, Cache API, origin, service worker, cache-first, network-first, manifest, konteks aman. clone dan hook didefinisikan singkat di tempatnya; fetch, Promise, await, dan state sudah diajarkan bab 11, 10, dan 16.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 14.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
