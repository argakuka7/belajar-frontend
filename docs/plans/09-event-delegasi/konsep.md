# Konsep Bab 9: Event & Delegasi

Kembali ke [overview](overview.md).

## Tujuan bab

Bab 8 mengajarkan mengubah halaman: pilih elemen, ganti teksnya, tambah anaknya. Tetapi kode bab 8 jalan satu kali saat halaman dibuka, lalu berhenti. Belum ada pemicu yang menjalankannya lagi. Bab ini menambahkan pemicu itu: event, kejadian yang dilaporkan browser, sampai delegasi, cara satu pendengar mengurus kejadian banyak elemen sekaligus. Setelah bab ini, halaman tidak lagi diam. Ia bereaksi pada klik, ketikan, dan pengiriman formulir.

Dua pertanyaan yang dijawab bab ini. Pertama, mengapa event ada: program tidak tahu kapan pengguna akan berbuat sesuatu, jadi ia butuh cara mendaftarkan reaksi lebih dulu lalu menunggu. Kedua, bagaimana cara kerjanya di baliknya: browser mengemas detail kejadian dalam satu objek, mengangkatnya melewati leluhur elemen, lalu memanggil setiap pendengar yang terpasang di jalur itu.

## Isi

### Mengapa event ada

Semua program di bab 6 sampai 8 berjalan lurus. Browser membaca kode dari atas ke bawah, menjalankan tiap baris, lalu selesai. Klik yang terjadi setelahnya tidak ada yang menangkap. Padahal program halaman tidak bisa memprediksi kapan pengguna berbuat sesuatu. Bisa dua detik lagi, bisa dua menit. Model jalan sekali dari atas ke bawah tidak muat untuk itu.

Yang dibutuhkan adalah model baru. Program mendaftarkan reaksinya lebih dulu, lalu menunggu. Saat sesuatu terjadi, browser memanggil reaksi yang cocok. Model ini disebut event-driven, program yang hidup dari kejadian dan menunggu di sela dua kejadian.

### Apa itu event

Event adalah kejadian yang dilaporkan browser. Klik pada tombol, ketikan di kotak teks, tombol keyboard yang diturunkan, formulir yang dikirim. Semuanya kejadian, dan masing-masing punya nama: `click`, `input`, `keydown`, `submit`. Kode bisa mendaftarkan reaksi untuk nama itu, dan reaksinya boleh berbeda untuk tiap elemen.

### Memasang pendengar

`addEventListener` memasang reaksi pada elemen. Ia menerima dua argumen, nama kejadian dan fungsi yang dipanggil saat kejadian datang. Fungsi yang dikirim untuk dipanggil nanti disebut callback.

```js
const tombol = document.querySelector("#tombol");
tombol.addEventListener("click", function () {
  console.log("ditekan");
});
```

Baris kedua tidak menjalankan isi fungsi seketika. Ia hanya mendaftar. Isinya jalan belakangan, setiap kali klik datang, dan boleh berkali-kali. Satu elemen boleh memakai banyak pendengar, dan ada `removeEventListener` untuk melepasnya, tapi halaman kecil biasanya memasang sekali di awal dan tidak melepas lagi.

### Objek event

Browser tidak memanggil callback kosong. Ia mengirim satu objek berisi detail kejadian: jenisnya, elemen tempat kejadian bermula, posisi kursor untuk kejadian mouse. Objek itu diterima sebagai parameter pertama callback. Dua properti yang paling sering dipakai adalah `type`, nama kejadiannya, dan `target`, elemen tempat kejadian bermula.

```js
tombol.addEventListener("click", function (event) {
  console.log(event.type);   // "click"
  console.log(event.target); // tombolnya sendiri
});
```

### Menghentikan perilaku bawaan

Sebagian kejadian membawa perilaku bawaan browser. Klik tautan membuka halaman lain. Mengirim formulir memuat ulang halaman. Kadang kita ingin mencegahnya dan menggantinya dengan reaksi sendiri. `event.preventDefault()` menghentikan perilaku bawaan itu. Pemakaian paling umum ada di formulir: halaman tidak dimuat ulang, dan JavaScript yang mengurusi datanya.

```js
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("formulir terkirim tanpa memuat ulang");
});
```

### Bubbling: kejadian merambat naik

Satu klik tidak berhenti di elemen yang diklik. Klik tombol di dalam `li` di dalam `ul` berarti kejadian `click` terjadi di tombol, lalu di `li`, lalu di `ul`, lalu naik terus sampai `document`. Perambatan ini disebut bubbling, kejadian naik dari elemen terdalam ke leluhurnya, seperti gelembung air naik ke permukaan. Konsekuensinya penting: pendengar di induk ikut terpanggil oleh kejadian anaknya.

### Delegasi: satu pendengar untuk banyak anak

Bubbling terdengar seperti detail teknis, padahal ini alat. Masalahnya begini. Daftar seratus tugas, tiap tugas punya tombol hapus. Memasang satu pendengar per tombol berarti seratus pendaftaran, dan tiap tugas baru butuh pendaftaran lagi. Delegasi membalik arahnya: satu pendengar dipasang di induk, lalu pendengar itu membaca `event.target` untuk tahu siapa yang diklik.

```js
daftar.addEventListener("click", function (event) {
  const tombol = event.target.closest("button.hapus");
  if (tombol) { tombol.closest("li").remove(); }
});
```

`closest` mencari leluhur terdekat yang cocok selektor. Ia diperlukan karena yang diklik bisa bagian dalam tombol, bukan tombolnya. Dengan delegasi, item baru lahir dengan reaksi yang sudah lengkap, tanpa satu baris pendaftaran tambahan.

### Analogi: resepsionis gedung

Satu gambar untuk semuanya. Bayangkan gedung kantor. Tamu yang datang adalah event, waktunya tidak bisa dijadwalkan. Petugas yang menunggu di pintu ruangan adalah pendengar yang dipasang `addEventListener`. Kartu tamu yang diterima petugas adalah objek event, berisi siapa tamunya dan ke mana ia menuju. Tamu berjalan dari pintu depan melewati setiap meja sampai ruangan tujuan, itulah bubbling. Delegasi adalah keputusan menaruh satu resepsionis di lobi daripada satu petugas di tiap pintu. Resepsionis membaca kartu tamu lalu mengarahkan. Ruangan baru dibuka pun tetap terlayani, karena resepsionisnya satu dan sudah berdiri di lobi.

### Pasangan contoh

Contohnya daftar tugas: klik satu item menandai selesai atau belum. Versi vanilla memasang satu pendengar di `ul` dan membaca `event.target` lewat delegasi. Versi React memberi tiap `li` reaksi `onClick` sendiri dan menyimpan data tugas di state. Versi vanilla satu pendengar untuk semua item. Versi React satu `onClick` per item, tapi tanpa satu baris pendaftaran manual.

### Demo Hidup

Demo di bawah memakai kejadian pada halaman sungguhan. Satu tombol menambah tugas lewat kejadian `click`. Tombol hapus di tiap item dilayani satu pendengar delegasi di daftar. Satu baris catatan diisi satu pendengar di wadah demo, dan ia ikut menerima kejadian tombol-tombol di dalamnya karena bubbling. Semuanya jalan tanpa build tool.

Ringkasan bab ini. Event adalah kejadian yang dilaporkan browser, `addEventListener` mendaftarkan reaksinya, callback dijalankan saat kejadian datang. Objek event membawa `type` dan `target`, `preventDefault` menghentikan perilaku bawaan, bubbling mengangkat kejadian ke leluhur, delegasi memakai itu untuk satu pendengar yang mengurus banyak anak. Bab berikutnya membahas state di sisi klien dan localStorage, tempat data halaman bertahan antar muat ulang.

## Pasangan contoh

- Vanilla: satu `addEventListener("click")` di `ul`, `event.target.closest("li")`, lalu `classList.toggle("selesai")` pada item yang diklik.
- React: state array tugas, tiap `li` membawa `onClick` yang mengubah state, React yang mengurus pendengarnya di akar aplikasi.

## Perbedaan inti

Delegasi vanilla meletakkan pembacaan `event.target` di tanganmu. React menyembunyikannya: tiap elemen cukup membawa `onClick`, dan React memasang pendengarnya sendiri di akar aplikasi, lalu mendistribusikan kejadian ke elemen yang tepat. Dua cara ini bertemu di titik yang sama, satu pintu kejadian untuk banyak elemen. Bedanya hanya siapa yang menulis pintunya. Untuk daftar panjang yang isinya sering bertambah, pendengar per item melelahkan dan rawan lupa. Delegasi dan React menyelesaikan lelah itu dengan cara yang sama, memusatkan.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: Introduction to events.
- MDN: EventTarget.addEventListener.
- MDN: Event.target.
- MDN: Event.preventDefault.
- MDN: Element.closest.
- web.dev: learn JavaScript.
