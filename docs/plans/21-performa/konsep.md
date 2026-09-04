# Konsep Bab 21: Performa: Bundle, Lazy Load & Gambar

Kembali ke [overview](overview.md).

## Tujuan bab

Sembilan belas bab membangun halaman yang bisa apa saja: menyimpan data, mengambil API, dirender React, bisa dipakai semua orang. Bab ini membahas syarat yang membuat pembaca mau sampai ke semua itu: halamannya datang cepat. Performa (performance) adalah ukuran seberapa cepat halaman siap dipakai sejak dibuka. Bab ini menjawab dua pertanyaan wajib seri ini dalam urutan itu. Pertama, mengapa performa jadi perhatian tersendiri, halaman adalah unduhan dan unduhan punya biaya. Kedua, cara kerja tiga teknik yang paling sering dipakai menakarnya: bundle, lazy load, dan perawatan gambar.

## Isi

### Mengapa performa ada

Halaman bagus yang lambat tetap halaman yang ditinggalkan. Pembaca di ponsel dengan sinyal lemah tidak akan menunggu sepuluh detik untuk tombol yang belum hidup. Karena itu performa bukan pemanis di akhir pekerjaan, ia bagian dari pengalaman, sejajar dengan aksesibilitas di bab 19. Alasannya sederhana dan bisa dihitung. Setiap halaman adalah unduhan: browser mengambil HTML, CSS, JavaScript, dan gambar lewat jaringan. Makin banyak dan makin besar yang diunduh, makin lama pembaca menunggu, makin besar kuotanya terpakai. Pekerjaan bab ini adalah menimbang tiga hal: apa yang diunduh, kapan diunduh, dan seberapa besar.

### Apa yang dibawa browser saat membuka halaman

Rekap cara browser bekerja dari bab 1. Browser mengunduh HTML, membacanya dari atas ke bawah, lalu setiap kali menemukan berkas lain, CSS, JavaScript, atau gambar, ia mengunduhnya juga. Setiap unduhan dimulai dengan request, permintaan ke server, dan permintaan itu butuh waktu walau berkasnya kecil. Urutan unduhan halaman bisa dilihat di tab Network pada DevTools dari bab 0, dan dari sana muncul pola yang khas di hampir semua situs. Dua jenis berkas paling berat biasanya JavaScript dan gambar. JavaScript yang besar menahan halaman karena kode harus diunduh lalu dijalankan sebelum tombol dan daftar hidup. Gambar yang besar membuat kuota membengkak dan tata letak melompat saat gambarnya tiba, lompatan ini disebut layout shift, pergeseran tata letak yang mengganggu mata dan jari. Tiga teknik bab ini menyasar dua beban itu.

### Bundle: banyak berkas jadi satu

Di proyek nyata, kode JavaScript jarang tinggal satu berkas. Ada berkas untuk tombol, untuk form, untuk galeri, untuk halaman yang jarang dibuka. Mengunduhnya satu per satu boros, karena tiap berkas membayar biaya request yang sama. Bundle adalah satu berkas JavaScript berisi banyak berkas kode yang sudah digabung. Alat penggabungnya disebut bundler, dan bundler termasuk build tool, alat yang memproses kode sebelum diterbitkan. Seri ini sengaja tidak memakai build tool supaya pembaca bisa mencoba semua contoh langsung di browser, seperti tertuang di ADR-0003, jadi di sini bundle cukup dipahami konsepnya.

Penggabungan menghemat, tapi menyimpan tagihan. Satu bundle besar berarti pembaca mengunduh semua kode bahkan bagian yang tidak pernah ia buka. Halaman yang hanya menampilkan daftar tetap mengunduh kode galeri, kode form, dan sisanya. Jawabannya bukan membolak-balik antara satu berkas raksasa dan banyak berkas kecil, tapi menggabungkan lalu memecah kembali dengan cerdas. Caranya di bagian berikutnya.

### Lazy load: memuat saat dibutuhkan

Lazy load berarti menunda pemuatan sesuatu sampai benar-benar dibutuhkan. Lawannya disebut eager, memuat semuanya sejak awal. Untuk kode, tekniknya bernama code splitting, memecah bundle menjadi beberapa bagian yang diunduh terpisah. Bagian yang jarang dipakai, misalnya kode galeri foto, baru diunduh saat pembaca benar-benar membuka galerinya. Pemicu unduhannya dynamic import, perintah `import()` yang boleh dijalankan kapan saja saat halaman sudah hidup, bukan cuma di awal. Di React, kebiasaan ini dibungkus React.lazy dan komponen Suspense: React.lazy menunda pengunduhan kode komponen, Suspense menampilkan sesuatu, biasanya tulisan Memuat, selama kode itu di jalan.

Untuk gambar, browser sudah menyediakan cara paling murah: atribut `loading="lazy"` pada img. Tanpa satu baris JavaScript, browser menahan unduhan gambar sampai gambar itu mendekati layar. Demo Hidup di bawah membangun ulang perilaku itu secara manual dengan IntersectionObserver, API browser yang memberi tahu saat elemen masuk atau keluar dari layar, supaya urutan pemuatannya terlihat di log dan bisa diikuti.

### Gambar: beban terberat

Di kebanyakan halaman, gambar adalah porsi unduhan terbesar, lebih besar daripada HTML dan JavaScript digabung. Tiga langkah perawatannya. Pertama, ukuran yang sesuai. Gambar 4000 piksel untuk avatar 48 piksel itu membawa galon untuk minum segelas, kecilkan gambar sampai seukuran tempatnya tampil. Kedua, format modern. Format adalah cara menyimpan gambar menjadi berkas, dan WebP serta AVIF menyimpan gambar yang sama bagus dalam berkas jauh lebih kecil daripada JPG atau PNG. Ketiga, srcset, atribut yang memberi beberapa pilihan berkas untuk satu gambar, lalu browser memilih sendiri sesuai lebar layar, ponsel kecil tidak perlu mengunduh berkas ukuran desktop.

Dua kebiasaan kecil melengkapi. Pasang width dan height pada img supaya browser menyiapkan ruangnya sebelum gambar tiba, layout shift-nya hilang. Dan pasang `loading="lazy"` untuk semua gambar di bawah lipatan, bagian halaman yang belum terlihat sebelum digulir.

### Analogi: tas piknik

Satu gambar untuk semuanya. Kamu berangkat piknik. Bundle adalah mengepak semua barang ke satu tas besar, satu perjalanan dari dapur ke mobil, bukan bolak-balik untuk tiap sendok. Lazy load adalah menyisakan payung dan jaket tebal di bagasi mobil, diambil hanya kalau hujan benar-benar turun, membawanya jalan kaki hanya menambah beban. Dan gambar adalah galon air, beban terberat di dalam tas. Membawa galon 19 liter untuk empat orang minum segelas adalah halaman yang memuat gambar 4000 piksel untuk avatar kecil. Perkecil galonnya, tas langsung ringan.

### Pasangan contoh

Contohnya galeri foto yang ditunda. Halaman baru memuat tiga foto setelah pembaca menekan tombol Muat galeri. Vanilanya satu pendengar klik, di dalamnya createElement membuat elemen img satu per satu, atribut `loading` diisi lazy, lalu appendChild memasangnya ke galeri. React-nya satu state `dimuat` yang awalnya false, tombol mengubahnya jadi true, dan daftar img dirender hanya saat state itu sudah true. Perilaku kedua sisi identik, yang berbeda cuma cara menulisnya, DOM dibangun dengan tangan atau tampilan lahir dari state. Kode React di kolom kanan memakai JSX yang sudah dipelajari sejak bab 15.

### Demo Hidup

Demo menampilkan kotak yang bisa digulir berisi delapan gambar. Saat halaman dibuka, tidak ada satu pun gambar yang diunduh, hanya kotak kosong bertinggi tetap. Gulir kotaknya, dan begitu sebuah kotak mendekati area layar, log di bawahnya mencatat bahwa src gambar itu baru dipasang saat itu. Tombol Ulangi demo mengembalikan semuanya ke awal. Gambarnya berupa SVG data URI, gambar yang disandikan langsung sebagai teks di dalam halaman, supaya demo jalan tanpa jaringan, tapi mekanismenya sama persis dengan foto sungguhan: src hanya terpasang saat gambar dibutuhkan.

Ringkasan bab ini. Halaman adalah unduhan, dan unduhan terbesarnya biasanya JavaScript dan gambar. Bundle menggabungkan kode supaya jumlah request turun, code splitting dan lazy load menunda bagian yang belum dibutuhkan, dan gambar dirawat dengan ukuran pas, format modern, srcset, serta `loading="lazy"`. Bab berikutnya menjaga halaman tetap benar dengan cara mengujinya: testing front end.

## Pasangan contoh

- Vanilla: `addEventListener("click")`, di dalamnya loop membuat img dengan `document.createElement`, `img.loading = "lazy"`, lalu `appendChild`.
- React: `React.useState(false)` untuk state `dimuat`, render kondisional, tiga img dengan `loading="lazy"` muncul setelah tombol mengubah state.

## Perbedaan inti

Kedua versi menunda pekerjaan yang sama sampai pembaca memintanya. Vanilanya menunda lewat aksi: elemen img baru dibuat saat tombol ditekan. React-nya menunda lewat data: tampilan yang dirender mengikuti state. Konsekuensinya sama dengan bab-bab React sebelumnya, kalau daftarnya berubah jadi sepuluh foto atau sumbernya berubah dari array, versi vanilla menambah baris, versi React cukup mengubah data. Dan di kedua versi, atribut `loading="lazy"` tetap yang mengurus penundaan terakhirnya ke browser.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: Web performance.
- web.dev: Learn Performance.
- MDN: Lazy-loading images (loading attribute).
- MDN: import() dynamic import.
- MDN: Intersection Observer API.
- web.dev: Serve images in the right format (WebP, AVIF).
- web.dev: Responsive images (srcset).
