# Konsep Bab 18: Routing di Front End

Kembali ke [overview](overview.md).

## Tujuan bab

Bab 0 sampai 17 selalu bekerja di satu halaman yang dimuat sekali di awal. Situs sungguhan hampir selalu punya banyak halaman, beranda, daftar, detail, dan bab ini menjawab pertanyaannya: bagaimana satu halaman JavaScript bisa punya banyak halaman sekaligus tanpa memuat ulang, sementara URL tetap jujur mengikuti.

Dua pertanyaan wajib seri ini dijawab dalam urutan itu. Pertama, mengapa aplikasi satu halaman butuh routing, aturan yang menerjemahkan URL menjadi tampilan. Kedua, bagaimana mesinnya bekerja di baliknya, dari tumpukan history milik browser sampai tabel rute, lalu bagaimana React Router membungkus mesin yang sama.

## Isi

### Mengapa routing ada

Cara paling tua menangani banyak halaman juga cara paling sederhana. Setiap klik tautan, browser mengirim request, permintaan yang sudah ditemu di bab 11, ke server. Server membalas dengan dokumen HTML yang utuh, dan browser membuang halaman lama lalu membangunnya dari nol. Cara ini masih dipakai banyak situs dan tidak ada yang salah dengan itu.

Masalahnya muncul di aplikasi yang hidup di satu halaman. Bayangkan email: membuka satu surat tidak perlu membangun ulang seluruh kotak masuk. Memuat ulang tiap klik membuang pekerjaan yang sudah selesai, menggulir pembaca kembali ke atas, dan menghapus state yang sudah terisi. Muncul pola berlawanan, SPA atau Single-Page Application, aplikasi yang memuat satu dokumen HTML sekali di awal, lalu JavaScript mengganti isi halaman setiap pengguna berpindah.

Pola ini membuka lubang baru. Kalau JavaScript hanya mengganti isi halaman, URL di address bar, kolom alamat di bagian atas browser, tidak ikut berubah. Padahal URL dipakai pembaca untuk tiga hal: membookmark, membagikan tautan, dan menekan tombol back. Routing menambal lubang itu. Ia punya dua pekerjaan: mengubah isi halaman dengan JavaScript sekaligus menulis perubahan itu ke URL, lalu membaca URL kembali saat halaman dibuka atau tombol back ditekan.

### URL sebagai state

Bab 10 menyebut state sebagai ingatan data yang bisa berubah. Ada satu state yang berbeda dari yang lain: dia terlihat oleh semua orang, tersalin saat tautan dibagikan, dan dikirim ke server setiap kali halaman dibuka. State itu adalah URL. Kalau posisi navigasi disimpan di URL, refresh, bookmark, dan tombol share bekerja tanpa kode tambahan. URL juga tempat alami untuk data yang menentukan tampilan, misalnya /produk/42 yang menyimpan angka 42 sebagai id produk, sama seperti query menyimpan parameter fetch di bab 11.

### Di baliknya: tumpukan history

Browser menyimpan jejak kunjungan dalam tumpukan history, barisan alamat yang bisa ditelusuri lewat tombol back dan forward. Dua alat di dalamnya menjadi fondasi semua router. Yang pertama history.pushState(nilai, judul, url), perintah untuk menambah barisan tanpa memuat ulang halaman. Yang kedua event popstate, sinyal yang dipancarkan window setiap tombol back atau forward memindahkan posisi dalam barisan.

Dengan dua alat itu, router kecil selesai dalam tiga langkah. Saat tautan diklik, batalkan pindah halaman bawaan browser dengan preventDefault dari bab 9, tulis rute baru dengan pushState, lalu render. Saat popstate terdengar, baca URL yang sekarang dan render. Itu seluruh mesinnya, dan React Router di bagian akhir bab menjalankan mesin yang sama persis.

### Dua cara menulis rute di URL

Ada dua tempat menyimpan rute, dan keduanya dipakai di situs nyata.

Yang pertama hash, bagian URL setelah tanda pagar. Perubahan hash tidak pernah dikirim ke server dan memicu event hashchange. URL-nya terlihat seperti /#/tentang. Kelebihannya kebal refresh: server hanya pernah menerima alamat sebelum tanda pagar, jadi menyegarkan halaman tidak pernah gagal. Kekurangannya tampak di URL-nya sendiri, tanda pagar itu.

Yang kedua History API, kumpulan perintah browser untuk mengelola tumpukan history, dengan pushState sebagai andalannya. Jalur yang ditulis menjadi jalur sungguhan, /tentang tanpa tanda pagar, dan bentuk inilah yang dipakai situs besar. Konsekuensinya ada di sisi server. Ketika pembaca menyegarkan halaman di /tentang, request yang datang memang membawa jalur itu. Server harus tahu bahwa semua jalur tetap disajikan halaman yang sama, kalau tidak ia membalas 404, balasan untuk alamat yang tidak dikenal. Hal yang sama berlaku untuk deep link, tautan yang menunjuk langsung ke halaman dalam, misalnya yang dibagikan lewat chat.

Jadi pilihannya bukan benar dan salah, tetapi URL bersih dengan biaya konfigurasi server, atau URL bertanda pagar tanpa biaya apa pun.

### Router: tabel rute dan fungsi render

Inti sebuah router hanya dua bagian. Tabel rute, daftar pasangan jalur dan isi yang biasa ditulis sebagai objek, dan fungsi render yang membaca location lalu mengambil isi sesuai jalurnya. Polanya identik dengan bab 12, yang memetakan data server ke elemen daftar. Bedanya hanya sumber datanya: router memetakan URL ke tampilan. Tabel kecil sudah cukup untuk aplikasi nyata, dan aplikasi besar hanya menambah barisnya.

### React Router

Di dunia React, pekerjaan itu dibungkus React Router, library yang paling banyak dipakai untuk routing React. Link adalah elemen a yang di dalamnya sudah memanggil preventDefault dan pushState, jadi kliknya tidak pernah memuat ulang halaman. Routes dan Route adalah tabel rute yang ditulis sebagai JSX. Semua kenyamanan itu berdiri di atas mesin yang sudah dibaca di bagian sebelumnya, pushState dan popstate.

### Analogi: hotel dan buku tamu

Satu gambar untuk semuanya. SPA adalah gedung hotel yang sudah berdiri, kamu masuk sekali dan tidak lagi keluar masuk gedung setiap pindah kamar. Router adalah resepsionis yang membaca nomor di pintu, dan nomor itu adalah URL. Pindah halaman berarti ganti nomor di pintu dan ganti isi kamarnya, bangunannya tidak dibongkar. Tumpukan history adalah buku tamu di meja resepsionis, dan tombol back hanyalah membaca buku itu mundur satu baris. Hash dan History API adalah dua gaya menulis nomor kamar, ditempel di balik pintu atau ditulis rapi di daftar resmi gedung. Dan mengantar tamu langsung ke kamar 204, deep link itu, hanya berhasil kalau petugas gedung tahu kamar 204 memang milik gedungnya.

### Pasangan contoh

Contohnya router dua halaman, Beranda dan Tentang, lengkap dengan rute 404 untuk jalur yang tidak dikenal. Versi vanilla menyimpan tabel rute sebagai objek, memasang pendengar klik di setiap tautan untuk mencegah muat ulang, menulis rute dengan pushState, dan mendengarkan popstate untuk tombol back. Versi React menyusun hal yang sama dalam BrowserRouter, Link, dan Routes.

## Pasangan contoh

- Vanilla: tabel rute objek `rute`, dua tautan nav dengan pendengar klik yang memanggil `preventDefault`, `history.pushState`, dan `render`, plus pendengar `popstate` untuk tombol back.
- React: `BrowserRouter` membungkus aplikasi, `Link` mengganti elemen a, `Routes` dan `Route` menjadi tabel rutenya, rute `*` menampung 404.

## Perbedaan inti

Di vanilla, setiap sambungan dipasang sendiri: preventDefault, pushState, popstate, dan tabel rutenya. React Router membakukan polanya. Link mengurus dua perintah pertama, Routes membaca location, dan Route adalah tabelnya yang ditulis deklaratif. Di baliknya, mesinnya persis sama. Seperti bab-bab React sebelumnya, React tidak menghapus kerja vanilla, ia memberi nama pada polanya supaya tidak ditulis ulang di setiap proyek.

## Demo Hidup

Demo memakai router hash. Alasan praktisnya: rute hash aman disegarkan di mana saja tanpa bantuan server. Tekan Beranda dan Tentang, URL di address bar berubah tanpa halaman memuat ulang. Tekan tombol Mundur atau tombol back browser, konten mengikuti karena hashchange terdengar. Angka isi tumpukan history tumbuh satu setiap navigasi.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: History API, pushState.
- MDN: Window, popstate event.
- MDN: Window, hashchange event.
- MDN: Location.
- web.dev: Architecture (SPA dan MPA).
- React Router: reactrouter.com.
