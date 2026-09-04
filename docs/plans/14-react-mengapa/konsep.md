# Konsep Bab 14: React: Mengapa Framework Ada

Kembali ke [overview](overview.md).

## Tujuan bab

Bab 6 sampai 13 membangun halaman dengan tangan. Setiap kali data berubah, kode memilih elemen, mengubah isinya, dan memasang pendengar event satu per satu. Cara ini jalan, dan enam bab penuh memakainya. Bab ini menjawab pertanyaan yang pasti muncul saat halaman membesar: mengapa framework ada, dan apa yang sebenarnya diganti React dari kerja tangan itu.

Dua pertanyaan wajib seri ini dijawab dalam urutan itu. Pertama, mengapa halaman yang tumbuh membuat kerja manual jadi berat. Kedua, bagaimana React menyingkat kerja itu di baliknya, dari komponen sampai re-render.

## Isi

### Mengapa framework ada

Framework adalah kumpulan kode dan aturan baku yang mengurus pekerjaan berulang, sehingga penulisnya fokus ke bagian yang khas dari aplikasinya. React sendiri lebih tepat disebut library, kumpulan fungsi siap pakai, tetapi ia membakukan satu hal penting: alur data dari state ke tampilan. Sebutan framework dipakai di seri ini karena React mengubah cara kerja, bukan sekadar menambah fungsi.

Recap pola yang dipakai terus sejak bab 8. Data berubah, lalu kode menyuruh DOM berubah. querySelector memilih elemen, textContent atau innerHTML mengubah isinya, addEventListener memasang pendengar. Bab 10 menambah state di localStorage, bab 11 mengambil data dari server, bab 12 merender daftar, bab 13 memvalidasi form. Semua memakai gaya yang sama, gaya imperatif.

### Titik lelah halaman yang tumbuh

Gaya imperatif tidak salah. Ia hanya mulai berat saat halaman tumbuh. Bebannya tiga.

Pertama, sinkronisasi manual. Satu data sering muncul di beberapa tempat, misalnya jumlah barang di keranjang tampil di ikon, di daftar, dan di total. Setiap perubahan harus diubah ke semua tempat itu dengan tangan. Satu tempat terlewat, tampilan menunjukkan angka yang bohong.

Kedua, kode menyebar. Pendengar event ada di satu tempat, fungsi pembaruan di tempat lain, elemen yang diubah di tempat ketiga. Halaman masih kecil, urutannya mudah diikuti. Saat fitur bertambah, melacak siapa mengubah apa jadi pekerjaan tersendiri.

Ketiga, pengulangan. Bab 12 dan 13 berulang kali menulis pola yang mirip: pilih wadah, susun teks atau elemen, pasang kembali. Pola yang ditulis berulang-ulang adalah tanda pekerjaan yang seharusnya bisa diotomasi.

### Deklaratif dan imperatif

Dua gaya itu punya nama. Imperatif berarti memberi perintah langkah demi langkah: cari elemen ini, ubah teksnya, lalu pasang pendengar. Deklaratif berarti menyatakan seperti apa hasilnya, dan membiarkan langkahnya dikerjakan pihak lain.

React memilih gaya deklaratif. Tampilan dinyatakan sebagai fungsi dari state. Kalau state berisi jumlah 3, tampilan yang benar adalah teks berangka 3. Kalau state berubah jadi 4, fungsi itu dijalankan ulang dan tampilan mengikutinya. Penulis kode tidak pernah menyuruh DOM langsung, ia hanya mengubah state.

### Komponen: tampilan sebagai fungsi

Wadah deklaratif di React disebut komponen. Komponen adalah fungsi yang mengembalikan tampilan, dan namanya selalu diawali huruf besar. Halaman besar dipecah menjadi komponen kecil, tombol, daftar, form, yang bisa dipakai ulang. Detail penulisannya menyusul di bab 15, yang penting di bab ini adalah bentuknya: tampilan lahir dari fungsi, bukan dari perintah yang tersebar.

### State dan re-render

State, ingatan data yang bisa berubah dan sudah ditemu di bab 10, di React jadi milik komponen. Komponen menyimpan nilai lewat useState dan mengubahnya lewat fungsi pengubah, bukan lewat penugasan biasa. Setiap kali nilai diubah, React menjalankan ulang fungsi komponen. Menjalankan ulang inilah yang disebut re-render, tampilan dirender kembali dari state yang baru.

Inilah ganti yang paling besar. Di bab-bab sebelumnya, mengubah data dan mengubah tampilan adalah dua pekerjaan yang ditulis terpisah. Di React, mengubah data otomatis membawa tampilannya, karena tampilan memang fungsi dari data.

### Di balik re-render

Terdengar mahal, fungsi dijalankan ulang setiap ada perubahan. React menahan biayanya. Hasil render baru dibandingkan dengan hasil sebelumnya, dan hanya bagian yang berubah yang disentuh di DOM. Salinan ringan tampilan yang dipakai untuk membandingkan itu disebut virtual DOM. Angka 3 jadi 4 pada satu baris teks, hanya teks baris itu yang diperbarui, sisanya dibiarkan.

### Batas framework

Framework bukan sihir, dan React tidak menghapus apa pun yang sudah dipelajari. Di baliknya tetap DOM yang sama, createElement membangun objek elemen, dan React yang memasangnya ke halaman. Bab 6 sampai 13 justru jadi bekal: tanpa tahu kerja manualnya, re-render terlihat seperti sulap. Batasnya juga perlu jujur. Halaman kecil tidak butuh framework, memasang satu bingkai foto lebih cepat dilakukan sendiri. React menambah berkas dan aturan, dan itu dibayar dengan penghematan saat aplikasi membesar.

### Analogi: tukang dan denah

Satu gambar untuk semuanya. Kamu adalah arsitek, state adalah denah rumah, React adalah tim tukang, dan DOM adalah bangunannya. Gaya imperatif adalah memasang bata dengan tangan sendiri, setiap perubahan kamu yang merangkak ke atap. Gaya deklaratif adalah menggambar denah lalu membiarkan tukang mewujudkannya, denah berubah, tukang bekerja lagi. Re-render adalah tukang yang cerdas, ia merombak hanya ruangan yang denahnya berubah, ruangan lain tidak disentuh. Dan untuk gantung satu bingkai, memanggil tim tukang justru memperlambat, itulah halaman kecil yang lebih cocok dengan vanilla.

### Pasangan contoh

Contohnya penghitung (counter), satu angka dan dua tombol, tambah satu dan reset. Vanilanya menyimpan jumlah di variabel, dua pendengar klik masing-masing mengubah variabel lalu menulis ulang teks dengan textContent. React-nya menyimpan jumlah di state dengan useState, tombol hanya memanggil setJumlah, dan teks ikut berubah sendiri. Kalau angka harus muncul di tiga tempat, versi vanilla butuh tiga textContent, versi React tetap cukup satu setJumlah.

Kode React di kolom kanan ditulis dengan JSX, cara React menulis tampilan yang mirip HTML di dalam JavaScript. JSX baru diajarkan di bab 15, jadi demo di bawah memakai bentuk mentahnya, React.createElement, yang jalan tanpa build tool.

### Demo Hidup

Demo memuat React sungguhan lewat CDN ESM dan menjalankan komponen penghitung yang sama dengan pasangan contoh. Tekan Tambah satu, angka naik. Tekan Reset, angka kembali ke nol. Yang bekerja di baliknya setiap klik adalah setJumlah, React yang mengurus DOM-nya.

Ringkasan bab ini. Kerja manual DOM jadi berat saat halaman tumbuh, bebannya sinkronisasi, kode menyebar, dan pengulangan. React menjawab dengan gaya deklaratif, tampilan adalah fungsi dari state, ditulis dalam komponen. Mengubah state memicu re-render, dan React hanya menyentuh bagian DOM yang berubah. Bab berikutnya mengajarkan bahasa penulisannya: JSX, props, dan state.

## Pasangan contoh

- Vanilla: variabel `jumlah`, dua `addEventListener`, masing-masing mengubah `jumlah` lalu menulis ulang `textContent` kalimat yang sama.
- React: `React.useState(0)`, dua tombol memanggil `setJumlah`, tampilan membaca `jumlah` langsung dari state, ditulis dengan JSX.

## Perbedaan inti

Di vanilla, setiap tombol mengurus dua pekerjaan sekaligus, mengubah data dan mengubah tampilan. React memisahkannya. Tombol hanya mengubah data lewat fungsi pengubah state, dan tampilan mengikuti karena ia fungsi dari state. Konsekuensinya terasa saat tampilan tumbuh: penambahan tempat tampil tidak menambah pekerjaan pada sumber perubahannya. Seperti bab-bab sebelumnya, React tidak menghapus pekerjaan vanilla, ia membakukan urutannya, data dulu, tampilan menyusul.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: Client-side frameworks introduction.
- MDN: Getting started with React.
- react.dev: Learn React.
- react.dev: Writing markup with JSX.
- MDN: Document Object Model (DOM).
