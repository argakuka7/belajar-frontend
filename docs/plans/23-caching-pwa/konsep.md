# Konsep Bab 23: Caching, PWA & Offline

Kembali ke [overview](overview.md).

## Tujuan bab

Sejak bab 11, data halaman datang lewat jaringan. Bab 21 menghemat beban muat awalnya. Bab ini menyambung keduanya dengan pertanyaan yang tinggal: mengapa berkas dan data yang sama harus diambil berulang-ulang, dan apa yang terjadi saat jaringan hilang. Dua pertanyaan wajib seri ini dijawab dalam urutan itu. Pertama, mengapa salinan hasil permintaan perlu disimpan di tiga lapis yang berbeda. Kedua, bagaimana setiap lapis bekerja di baliknya, dari header Cache-Control sampai service worker yang menentukan strategi.

## Isi

### Mengapa caching, PWA, dan offline ada

Cache adalah salinan hasil permintaan yang disimpan, supaya permintaan yang sama tidak perlu dikerjakan ulang. Di front end, kerja yang paling mahal adalah menyeberangi jaringan. Bab 21 sudah membuktikannya lewat ukuran bundle dan gambar, dan bab 11 menunjukkan satu permintaan fetch bisa memakan waktu lebih lama daripada seluruh kode halaman. Kalau data itu jarang berubah, mengambilnya ulang setiap kunjungan adalah kerja yang dibuang begitu saja.

Alasan keduanya lebih kasar: jaringan bisa hilang. Naik kereta, masuk lift, atau listrik di suatu tempat padam, dan halaman yang mengandalkan server mendadak jadi kertas kosong. Halaman yang tetap menyala saat koneksi putus disebut jalan offline, kondisi tanpa jaringan. Kemampuan itu bukan fitur tambahan yang muncul sendiri, ia dibangun dari salinan yang sudah disimpan sebelumnya.

Rangkaian perkakas untuk dua masalah itu akhirnya diberi satu nama. PWA atau Progressive Web App adalah halaman web yang memenuhi syarat tertentu agar bisa dipasang seperti aplikasi dan tetap jalan tanpa jaringan. Bab ini membedah syaratnya satu per satu, karena setiap syarat adalah konsep penting yang berguna bahkan tanpa PWA.

### HTTP cache: lemari bawaan browser

Lapisan pertama sudah bekerja tanpa kamu tulis satu baris pun. Browser menyimpan salinan berkas yang pernah diambil, gaya, gambar, JavaScript, dan memakai ulang salinannya di kunjungan berikutnya. Simpanan otomatis ini disebut HTTP cache.

Cara kerjanya ada di jawaban server. Setiap jawaban HTTP membawa header, baris-baris keterangan yang menyertai isi jawaban. Salah satunya bernama Cache-Control, perintah tertulis dari server tentang bagaimana salinannya boleh disimpan. Nilai max-age=31536000 artinya salinan ini sah dipakai 31536000 detik, sekitar satu tahun. Selama masa itu, permintaan berikutnya untuk berkas yang sama dijawab dari simpanan browser, tidak ada paket yang menyeberang jaringan.

Batas lapisan ini jelas. Aturannya ditulis server dan browser hanya patuh, halaman tidak bisa ikut memutuskan. Ia juga tidak menolong saat halaman sendiri dibuka pertama kali tanpa jaringan, karena lemari masih kosong. Untuk ikut memutuskan, halaman butuh lemari yang kuncinya ada di tangannya sendiri.

### Cache API: lemari yang bisa kamu buka

Lapisan kedua bernama Cache API, antarmuka JavaScript untuk membuat dan membaca simpanan permintaan dan jawaban milik halaman sendiri. Perkakasnya kecil. caches.open("nama") membuka lemari dengan nama itu, atau membuatnya kalau belum ada. cache.add(url) mengambil sebuah alamat lewat fetch lalu langsung menyimpan jawabannya. cache.match(url) membaca kembali salinannya. Semua lewat Promise dan await, persis kebiasaan bab 11.

Simpanannya rapi per origin. Origin adalah asal-usul halaman, gabungan skema, domain, dan port, misalnya https://www.argakuka.com. Halaman dari satu origin tidak bisa membaca lemari origin lain, jadi salinanmu tidak tertukar dengan situs tetangga.

### Service worker: penjaga di pintu

Lapisan ketiga mengambil keputusan. Service worker adalah skrip yang dipasang browser sebagai penjaga di pintu jaringan sebuah halaman. Setiap permintaan halaman itu, berkas, gambar, data API, lewat tangannya lebih dulu. Ia boleh meneruskan ke jaringan, boleh menjawab dari cache, boleh mencampur keduanya.

Karena penjaga bisa menjawab dari cache, halaman tetap hidup saat jaringan mati, dan itulah offline yang sebenarnya. Service worker juga hidup terpisah dari tab. Tab ditutup, penjaga tetap terpasang dan bekerja untuk kunjungan berikutnya. Pemasangannya satu baris, navigator.serviceWorker.register("/sw.js"), tetapi perhatikan isinya, service worker wajib berupa berkas tersendiri, ia tidak bisa ditanam di dalam HTML halaman.

### Strategi: cache dulu atau jaringan dulu

Memasang penjaga saja belum cukup, kamu harus menuliskan aturannya. Dua strategi paling umum punya nama. Cache-first berarti tanya lemari dulu, ada salinannya langsung disajikan, kosong baru belanja ke jaringan. Cepat, dan cocok untuk berkas yang jarang berubah seperti gaya dan gambar logo. Network-first berarti ke jaringan dulu, jawaban terbaru disajikan dan disalin ke lemari, dan salinan hanya jadi penyelamat saat jaringan gagal. Sedikit lebih lambat, tetapi datanya segar, dan cocok untuk data yang sering berubah.

Memilihnya bukan soal benar dan salah, melainkan soal mana yang lebih penting untuk data itu, kecepatan atau kesegaran. Satu halaman boleh memakai keduanya sekaligus, cache-first untuk berkas, network-first untuk data.

### PWA: dari halaman jadi aplikasi

Setelah caching dan offline beres, PWA tinggal melengkapinya dengan dua syarat kecil. Pertama, halaman disajikan lewat HTTPS, sambungan terenkripsi yang menjadi rumah semua service worker. Kedua, ada manifest, berkas kecil berformat JSON yang berisi nama aplikasi, ikon, dan warna temanya. Browser membaca manifest itu lalu menawarkan pengunjung untuk memasang halaman di layar utama, lengkap dengan ikonnya sendiri dan tanpa bilah alamat. Sekali terpasang, aplikasi membuka halaman lewat penjaga yang sudah menunggu, dan jalan walau pasarnya tutup.

### Batas dan jebakan

Semua perkakas bab ini berjalan hanya di konteks aman, halaman lewat HTTPS atau localhost di komputer sendiri. Dibuka lewat file langsung dari folder, Cache API tidak tersedia. Cache juga tidak punya aturan membereskan diri sendiri, salinan versi lama tetap duduk di lemari sampai dihapus, dan itulah sebabnya nama lemari biasanya diberi versi, catatan-v1 berubah jadi catatan-v2 saat isi berubah, yang lama dihapus. Terakhir, service worker yang salah aturan bisa menyimpan halaman yang rusak untuk waktu lama, karena setiap kunjungan dijawab penjaga yang sama. Aturannya ditulis dengan sengaja, dan ujilah sebelum dipasang.

### Analogi: dapur dan lemari persediaan

Satu gambar untuk semuanya. Kamu juru masak, jaringan adalah pasar, cache adalah lemari persediaan di dapur, dan HTTP cache adalah lemari yang isinya diatur perjanjian dengan penjual, berganti stok hanya sesuai tanggal yang disepakati di kertasnya. Cache API adalah lemari kedua yang kamu beli sendiri dan kamu isi sendiri dengan tas belanja dari pasar. Service worker adalah asisten dapur yang berdiri di pintu belakang, setiap bahan lewat tangannya, dan ia memegang aturan stok yang kamu tulis, ambil dari lemari dulu, atau belanja dulu dan simpan sisanya. Saat pasar tutup, asisten tetap bisa menyajikan dari lemari, itulah offline. Dan papan nama warung di depan rumah beserta menunya, itulah manifest yang membuat dapur resmi disebut warung, PWA.

### Pasangan contoh

Contohnya memuat daftar catatan dari /api/catatan dengan strategi cache-first. Vanilanya membuka lemari bernama catatan-v1, menanyakan salinan lewat cache.match, dan langsung menampilkannya kalau ada. Kalau kosong, fetch ke jaringan berjalan, jawabannya disalin lewat cache.put sebelum ditampilkan. Perhatikan jawaban.clone(), satu jawaban hanya boleh dibaca sekali, jadi satu salinan untuk lemari dan satu untuk layar.

- Vanilla: `caches.open` lalu `cache.match`, kalau kena tampilkan dari cache, kalau kosong `fetch` lalu `cache.put` dengan `jawaban.clone()` sebelum ditampilkan.
- React: logika yang sama dibungkus hook `useCacheFirst(url)` dengan `useState` dan `useEffect` dari bab 16 dan 17, komponen memanggilnya satu baris.

### Perbedaan inti

Strategi cache-first-nya sama persis di kedua versi, tanya lemari dulu, belanja kalau kosong, simpan sisanya. Yang berbeda hanya bungkusnya. Vanilanya fungsi biasa yang halaman panggil sendiri. React membungkus logika yang sama dalam hook, sehingga komponen mana pun bisa memuat data dengan satu baris useCacheFirst("/api/catatan") tanpa menulis ulang aturan lemarnya. Cache tidak mengganti fetch, ia berdiri di depannya.

### Demo Hidup

Demo memakai Cache API sungguhan, lapisan inti bab ini, untuk menyimpan salinan berkas /enhancements.css dari halaman yang sedang dibaca. Tombol simpan menjalankan caches.open lalu cache.add, tombol baca menjalankan cache.match dan menampilkan awal isinya beserta ukurannya. Setelah tersimpan, tombol baca jalan tanpa jaringan. Demo memakai try/catch dan menampilkan pesan bila Cache API tidak tersedia di luar konteks aman.

Ringkasan bab ini. Menyeberangi jaringan itu mahal dan tidak selalu bisa, karena itu hasilnya disimpan. HTTP cache menyimpan otomatis sesuai header Cache-Control dari server. Cache API memberi halaman lemari sendiri yang bisa dibuka lewat caches.open, cache.add, dan cache.match, per origin. Service worker adalah penjaga di pintu jaringan yang memutuskan dari mana permintaan dijawab, cache-first untuk kecepatan, network-first untuk kesegaran. Manifest dan HTTPS melengkapinya menjadi PWA yang bisa dipasang dan jalan offline. Bab berikutnya menutup seri dengan menyatukan semuanya dalam satu proyek.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: HTTP caching.
- MDN: CacheStorage.
- MDN: Cache.
- MDN: Service Worker API.
- MDN: Web app manifest.
- web.dev: Service workers (Learn PWA).
- web.dev: Learn PWA.
