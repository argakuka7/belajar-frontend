# Konsep Bab 13: Form & Validasi di Sisi Klien

Kembali ke [overview](overview.md).

## Tujuan bab

Sepuluh bab terakhir halaman hanya bekerja satu arah. Halaman menampilkan data, bereaksi pada klik dan ketikan, menyimpan state, bahkan mengambil data dari server. Pengguna hanya menonton dan menekan tombol. Belum ada satu pun jalur bagi pengguna untuk memberi data ke halaman. Bab ini membuka jalur itu dengan dua konsep. Pertama form, sarana HTML untuk mengumpulkan input dari pengguna. Kedua validasi, pemeriksaan isi input sebelum data dipakai atau dikirim, dan pemeriksaan yang jalan di browser ini namanya validasi di sisi klien. Bab ini sekaligus menutup bagian JavaScript & Halaman. Setelah ini seri pindah ke React, dan React akan membungkus kembali semua yang sudah dipelajari di sini.

Dua pertanyaan yang dijawab bab ini, sesuai urutan wajib seri ini. Pertama, mengapa form dan validasi ada. Kedua, bagaimana keduanya bekerja di baliknya, dari atribut HTML yang memeriksa sendiri sampai API JavaScript yang memberi kendali penuh.

## Isi

### Mengapa form ada

Setiap interaksi selama ini menghasilkan satu perubahan di dalam halaman. Klik tombol menambah item, ketikan menyaring daftar. Tetapi tidak ada satu pun yang mengirim data keluar dari halaman untuk diproses lebih lanjut, misalnya mendaftar akun atau mengisi komentar. Untuk itu HTML menyediakan form. Form adalah sarana untuk mengumpulkan input dari pengguna menjadi satu kesatuan yang bisa dikirim. Isinya kotak-kotak isian, masing-masing satu `<input>`, dan setiap input diberi `<label>` agar jelas isinya untuk apa. Semua kotak itu dibungkus satu elemen `<form>`.

```html
<form>
  <label for="email">Email</label>
  <input type="email" id="email">
  <button>Kirim</button>
</form>
```

### Apa yang terjadi saat submit

Momen pengguna menekan tombol kirim disebut submit. Perilaku bawaan browser saat submit sederhana dan sudah tua: kumpulkan isi semua input, bawa keluar dari halaman, dan muat ulang halaman. Sepuluh bab lalu ini tidak pernah kita urus karena tidak ada form. Bab 9 sempat menunjuk masalah ini lewat `event.preventDefault()`, yang menghentikan perilaku bawaan sebuah kejadian. Saat itu contohnya menggantung, sekarang ia dipakai sungguhan. Dengan satu baris itu, submit tidak lagi memuat ulang halaman, dan JavaScript yang memegang datanya.

```js
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
```

### Mengapa validasi ada

Form mengumpulkan apa pun yang pengguna ketik, termasuk yang salah. Email tanpa tanda @, kolom nama yang kosong, umur berupa teks. Data salah yang lolos akan meracuni semua yang memakainya, dari tampilan sampai basis data. Validasi adalah pemeriksaan bahwa isi input sesuai bentuk yang diharapkan, dan penolakan sebelum data dipakai. Validasi di sisi klien berarti pemeriksaan itu jalan di browser, sebelum data berangkat ke mana pun. Keuntungannya kecepatan, pengguna tahu salahnya dalam sekejap tanpa menunggu perjalanan ke server. Satu batas yang harus jujur diakui sejak awal. Validasi sisi klien bukan pengaman, kode di browser bisa ditembus atau dimatikan siapa pun yang tahu caranya. Server tetap wajib memeriksa ulang semua yang datang. Pemeriksaan klien itu layanan untuk pengguna yang baik hati, bukan tembok untuk yang jahat.

### Validasi bawaan HTML

Cara termurah memvalidasi adalah meminta browser yang memeriksa. HTML menyediakan atribut untuk itu. Atribut `required` menandai kolom wajib isi, `type="email"` menuntut bentuk email, `minlength` dan `maxlength` membatasi panjang teks, `min` dan `max` membatasi angka. Browser memeriksa semuanya otomatis saat submit, memblokir pengiriman, dan menampilkan pesan kesalahan bahasa pengguna tanpa satu baris JavaScript.

```html
<input type="email" id="email" required minlength="5">
```

Cara ini jalan dan layak dipakai, tetapi kendalinya terbatas. Pesannya gaya browser, bukan gaya halaman. Pemeriksaannya baru jalan saat submit, tidak bisa dipanggil kapan saja dari kode. Untuk itu HTML juga membuka pintu ke JavaScript.

### Validasi dengan JavaScript, Constraint Validation API

Di balik atribut-atribut tadi ada mesin yang bernama Constraint Validation API, kumpulan properti dan metode untuk memeriksa input dari kode. Setiap input punya metode `checkValidity()`, yang mengembalikan `true` bila isinya sah dan `false` bila tidak. Setiap input juga punya objek `validity`, yang menjelaskan sebab kegagalan lewat tanda boolean. `validity.valueMissing` berarti kolom wajib kosong. `validity.typeMismatch` berarti bentuk isinya tidak cocok dengan `type`, misalnya email tanpa @. Dengan dua itu halaman bisa menulis pesan kesalahannya sendiri, sespesifik apa pun sebabnya.

```js
if (!email.checkValidity()) {
  if (email.validity.valueMissing) {
    pesan.textContent = "Email wajib diisi.";
  } else if (email.validity.typeMismatch) {
    pesan.textContent = "Bentuk email belum benar, harus ada tanda @.";
  }
}
```

Satu penghalang kecil yang wajib diketahui. Kalau form punya atribut seperti `required`, browser memeriksa sendiri dan memblokir submit sebelum kejadian `submit` sempat sampai ke JavaScript. Solusinya atribut `novalidate` pada form, yang mematikan pemeriksaan otomatis browser. Pemeriksaannya pindah tangan, atribut dan `checkValidity()` tetap bisa dipakai, tetapi kini JavaScript yang memutuskan kapan dan bagaimana pesan muncul.

### Kapan memeriksa, saat submit atau saat mengetik

Waktu pemeriksaan adalah keputusan rasa, dan dua ujungnya punya harga. Memeriksa saat submit paling aman, pengguna mengisi tenang dulu, kesalahan dilaporkan sekali di satu tempat. Memeriksa saat mengetik terasa cepat, tetapi menyergap pengguna yang belum selesai, pesan "email tidak sah" muncul padahal ia sedang mengetik setengahnya. Kompromi yang umum dipakai halaman nyata: periksa pertama kali saat submit, dan setelah itu periksa langsung setiap ketikan, karena pengguna sudah tahu aturannya. Untuk bab ini pola saat submit saja sudah cukup.

### Analogi, loket pendaftaran

Satu gambar untuk semuanya. Form adalah formulir kertas di loket pendaftaran, kotaknya sudah dicetak, ada yang bertanda wajib. Submit adalah menyerahkan formulir ke petugas loket. Validasi adalah petugas yang memeriksa berkas sebelum menerimanya, kotak wajib kosong ditunjuk, bentuk email yang salah ditandai, berkas dikembalikan seketika tanpa masuk ke dalam. `preventDefault` adalah petugas yang menahan berkas di loket alih-alih membiarkannya tersedot ke bagian belakang. Dan bagian belakang kantor yang memeriksa ulang semua berkas yang lolos loket, itulah server. Loket membuat pengunjung cepat tahu salahnya, bagian belakang yang menjaga kebenaran arsip.

### Pasangan contoh

Contohnya form berlangganan email, satu input dan satu tombol. Versi vanilla menuliskan semuanya dengan tangan, pendengar submit, `preventDefault`, `checkValidity()`, pembacaan `validity` untuk memilih pesan, dan pengosongan input saat sah. Versi React menyimpan isi input di state lewat controlled input, yaitu input yang nilainya diatur `value` dari state dan setiap ketikan melapor lewat `onChange`, lalu `onSubmit` yang memeriksa dan menyimpan pesan error di state sendiri.

### Demo Hidup

Demo di bawah adalah formulir pendaftaran mini, satu input email wajib diisi. Submit kosong memunculkan pesan kolom wajib. Email tanpa @ memunculkan pesan bentuk tidak cocok. Isian sah mengganti form dengan pesan sukses. Halaman tidak pernah dimuat ulang di semua jalur itu.

Ringkasan bab ini. Form adalah sarana HTML mengumpulkan input, submit momen pengiriman dengan perilaku bawaan muat ulang halaman, dan `preventDefault` mengambil alihnya. Validasi memastikan isi input benar bentuknya sebelum dipakai, sisi klien memberi umpan balik cepat dan server tetap memeriksa ulang. Atribut `required` dan `type` memberi pemeriksaan gratis, Constraint Validation API dengan `checkValidity()` dan `validity` memberi kendali penuh, `novalidate` memindahkan tuasnya ke JavaScript. Bab berikutnya membuka bagian React, mengapa framework ada dan apa yang dibungkusnya dari semua yang sudah dipelajari sejauh ini.

## Pasangan contoh

- Vanilla: form dengan input email `required`, pendengar `submit` memanggil `event.preventDefault()`, `email.checkValidity()` menentukan jalur, `email.validity.valueMissing` dan `email.validity.typeMismatch` memilih pesan error, isian sah menampilkan sukses dan mengosongkan input.
- React: `useState` untuk `email`, `error`, dan `sah`; input dengan `value={email}` dan `onChange` yang memperbarui state; `onSubmit` dengan `e.preventDefault()` lalu pemeriksaan yang sama; pesan error dan sukses dirender kondisional dari state.

## Perbedaan inti

Di vanilla, nilai input dibaca dari DOM saat dibutuhkan, HTML adalah pemilik nilai dan JavaScript cuma penumpang yang menengok. Di React, keadaan terbalik, state adalah pemilik nilai, dan input hanya cermin yang mengikuti state lewat `value`. Itulah controlled input. Konsekuensinya pemeriksaan di React jalan atas state, bukan atas elemen DOM, jadi Constraint Validation API kalah praktis dibanding pemeriksaan sendiri pada string state. React tidak menghapus pekerjaan vanilla, ia memindahkan sumber kebenarannya ke tempat yang bisa di-render ulang secara konsisten.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: Web forms, working with user data.
- MDN: Client-side form validation.
- MDN: Constraint validation API.
- MDN: HTMLFormElement: submit event.
- MDN: Event.preventDefault.
- web.dev: Learn Forms.
