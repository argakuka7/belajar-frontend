# Konsep Bab 17: React: Custom Hooks & Pola Komposisi

Kembali ke [overview](overview.md).

## Tujuan bab

Bab 15 melatih komponen dengan JSX, props, dan state. Bab 16 melengkapinya dengan efek dan pengambilan data. Setelah dua bab itu, sebuah masalah baru muncul bukan dari kekurangan alat, melainkan dari keberhasilannya. Komponen yang berbeda ternyata sering menjalankan logika yang sama persis. Bab ini menjawab bagaimana logika yang sama itu dipakai ulang, dan bagaimana halaman besar disusun dari bagian kecil.

Dua pertanyaan wajib seri ini dijawab dalam urutan itu. Pertama, mengapa logika yang berulang antar komponen jadi masalah. Kedua, bagaimana custom hook dan pola komposisi menyelesaikannya di baliknya.

## Isi

### Kebocoran dari dua bab lalu

Recap singkat. State, ingatan data yang bisa berubah dan milik komponen, diubah lewat fungsi pengubah seperti useState. Efek, kode yang dijalankan React di samping render, ditulis lewat useEffect dan berguna untuk pekerjaan di luar tampilan, termasuk menyimpan data ke localStorage atau mengambil data dari server.

Masalahnya begini. Ambil dua komponen yang sama-sama menyimpan teks ke localStorage. Keduanya menulis panggilan useState yang sama, lalu useEffect yang sama, lalu daftar ketergantungan yang sama. Logikanya identik, hanya kuncinya berbeda. Halaman masih kecil, duplikat ini terlihat jinak. Tambah komponen ketiga dan keempat, salin-tempel ikut bertambah. Saat ada yang perlu diperbaiki, misalnya localStorage penuh, perbaikan harus dilakukan di semua tempat. Satu terlewat, satu komponen berperilaku berbeda diam-diam.

Ini kebalikan dari pesan bab 14. React menghapus pengulangan dalam mengubah tampilan, tetapi pengulangan dalam logika masih mengintai. Custom hook adalah jawabannya.

### Hook dan aturan mainnya

Sebelum lanjut, rapikan istilah. Hook adalah fungsi khusus React yang menyimpan state atau menjalankan efek, contohnya useState dan useEffect. React punya aturan baku untuknya, sering disebut aturan hook. Panggil hook hanya di tingkat atas komponen, tidak di dalam if atau loop. Panggil hook hanya dari komponen React atau dari hook lain. Alasannya bukan formalitas, React membaca urutan panggilan hook untuk mencocokkan tiap state dengan pemiliknya, dan urutan itu harus sama setiap render.

### Custom hook: logika yang bisa dipinjam

Custom hook, atau hook kustom, adalah fungsi biasa yang namanya diawali use dan di dalamnya memanggil hook lain. Ia bukan fitur baru di React, melainkan konvensi: bungkus logika berstate dalam fungsi, awali namanya dengan use, dan fungsi itu boleh dipanggil dari komponen mana pun.

Dua komponen yang tadi menulis logika localStorage dua kali kini cukup memanggil satu hook, useSimpanLokal, masing-masing dengan kuncinya sendiri. Bagian pentingnya: hook tidak membagikan satu state bersama. Setiap pemanggil mendapat panggilan useState sendiri, jadi state mereka terpisah total. Yang dibagi adalah logikanya, bukan nilainya. Dua dapur memakai resep yang sama, bahan di masing-masing dapur tetap milik dapurnya.

### Di balik nama use

Nama yang diawali use bukan gaya bebas. React memakainya sebagai penanda bahwa fungsi itu memanggil hook di dalamnya. Alat pemeriksa React, linter, membaca penanda ini untuk memberi peringatan saat aturan hook dilanggar, misalnya ada useState di dalam if. Bagi pembaca kode juga sama, nama use langsung mengabari bahwa memanggil fungsi ini akan menyimpan state atau efek, sesuatu yang tidak bisa ditebak dari fungsi biasa.

### Pola komposisi

Custom hook menyelesaikan pengulangan logika. Pertanyaan keduanya, bagaimana halaman besar tidak berubah jadi satu fungsi raksasa, dijawab komposisi. Komposisi berarti menyusun halaman dari komponen kecil yang masing-masing punya satu pekerjaan, lalu memasangnya seperti balok. Satu komponen DaftarBarang berisi banyak komponen BarisBarang, satu halaman berisi header, daftar, dan form yang masing-masing komponen tersendiri.

Lubang masuknya dua. Props adalah data yang dilewatkan dari luar, bab 15 sudah membahasnya. Children adalah props istimewa yang membawa isi di antara tag pembuka dan penutup komponen, sehingga komponen wadah seperti Kartu bisa membungkus apa saja tanpa tahu isinya. Dengan dua lubang ini, komponen kecil bisa dipasang ulang di halaman lain tanpa diubah. Ditambah custom hook untuk logikanya, tersusunlah pola yang dipakai hampir semua aplikasi React: tampilan dari komponen kecil, logika dari hook.

### Batas: jangan mengekstrak terlalu dini

Custom hook bukan tujuan, melainkan alat. Logika yang dipakai sekali tidak perlu dibungkus, bungkusan ekstra justru menambah lompatan saat membaca. Tanda waktunya adalah pengulangan yang nyata, pola yang sama muncul di dua tempat atau lebih dan keduanya bergerak bersama saat berubah. Ekstrak saat pola itu terlihat, bukan sebelum. Aturan yang sama berlaku untuk komposisi, pecah komponen saat ia kebesaran, bukan supaya terlihat rapi di atas kertas.

### Analogi: resep dapur

Satu gambar untuk semuanya. Custom hook adalah resep masakan yang ditulis sekali dan ditempel di banyak dapur. Komponen adalah dapurnya, state adalah bahan di tiap dapur, dan memanggil hook adalah mengikuti resep dengan bahan sendiri. Resep yang sama di dapur berbeda menghasilkan masakan berbeda, karena bahannya berbeda. Kalau resepnya perlu diperbaiki, cukup satu kertas yang diganti, semua dapur yang menempelnya ikut benar. Dan untuk masakan yang hanya dimasak sekali, menulis resepnya justru buang waktu, itulah logika yang tidak perlu dijadikan hook.

### Pasangan contoh

Contohnya masih localStorage, kasus pembuka tadi. Vanilanya logika dipakai ulang lewat fungsi pabrik, fungsi yang mengembalikan objek siap pakai. buatSimpanLokal menerima kunci, lalu mengembalikan dua fungsi, baca dan simpan, yang membungkus localStorage.getItem dan localStorage.setItem. Tiap pemanggilan buatSimpanLokal menghasilkan alat sendiri dengan kuncinya sendiri.

React-nya logika yang sama dibungkus custom hook useSimpanLokal. Di dalamnya ada useState yang membaca localStorage dan useEffect yang menulis kembali tiap teks berubah, dengan daftar ketergantungan yang direcap dari bab 16. Hook mengembalikan pasangan nilai dan pengubah, dan komponen KotakCatatan memakainya sambil menerima label dan kunci lewat props. Perbedaannya tipis di permukaan dan besar di cara kerja: fungsi pabrik mengembalikan alat yang kamu panggil manual, hook mengembalikan state yang tampilannya mengikuti sendiri.

### Demo Hidup

Demo memuat React sungguhan lewat CDN ESM dan menjalankan dua KotakCatatan, satu hook useSimpanLokal yang dipanggil dua kali. Ketik di kotak Nama, ketik di kotak Catatan, lalu muat ulang halaman. Keduanya kembali dengan tulisan masing-masing. Dua panggilan hook, dua state terpisah, satu logika yang ditulis sekali.

Ringkasan bab ini. Komponen yang berbeda sering menulis logika yang sama, state plus efek yang menempel berulang-ulang. Custom hook membungkusnya jadi fungsi berawalan use, logika dibagi, state tetap milik tiap pemanggil. Komposisi melengkapi, halaman besar disusun dari komponen kecil dengan lubang masuk props dan children. Ekstrak saat pengulangan nyata, bukan sebelum. Bab berikutnya keluar dari React dan menyusun halaman dari banyak halaman, routing.

## Pasangan contoh

- Vanilla: fungsi pabrik `buatSimpanLokal(kunci)` yang mengembalikan objek `{ baca, simpan }`, dua pemanggilan menghasilkan dua alat dengan kunci berbeda.
- React: custom hook `useSimpanLokal(kunci)` berisi `useState` awal dari localStorage dan `useEffect` yang menulis tiap perubahan, dipakai komponen `KotakCatatan` lewat props `label` dan `kunci`.

## Perbedaan inti

Kedua kolom menyelesaikan masalah yang sama, logika localStorage yang tidak mau ditulis dua kali. Vanilla membaginya sebagai alat, fungsi yang mengembalikan pasangan baca dan simpan, dan pemanggil yang mengurus kapan tampilan diubah. React membaginya sebagai hook, dan pemisahan data dan tampilan dari bab 14 tetap bekerja, ubah state lewat pengubah, tampilan menyusul sendiri. Konsekuensinya terlihat di komponen pemakai: KotakCatatan tidak tahu detail localStorage sama sekali, ia hanya memanggil hook dan merender. Kode vanilla tidak punya lapisan itu, alat dan pemakaiannya berdampingan di halaman yang sama.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- react.dev: Reusing Logic with Custom Hooks.
- react.dev: Rules of Hooks.
- react.dev: Passing Props to a Component.
- react.dev: Passing Children.
- MDN: Web Storage API (localStorage).
