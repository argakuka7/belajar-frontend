# Konsep Bab 8: DOM: Memilih & Mengubah Halaman

Kembali ke [overview](overview.md).

## Tujuan bab

Bab 7 melengkapi alat bahasa JavaScript: fungsi, array, dan objek. Bab ini memakai alat itu pada target sungguhan, halaman. Pembaca belajar DOM, peta objek yang dibuat browser dari HTML, lalu memilih elemen tertentu dan mengubahnya dengan kode. Setelah bab ini, program tidak lagi berhenti di console, tetapi benar-benar mengubah halaman yang dilihat pembaca.

Dua pertanyaan yang dijawab bab ini. Pertama, mengapa DOM ada: file HTML hanyalah teks statis, dan JavaScript butuh representasi halaman yang bisa dibaca dan ditulis program. Kedua, bagaimana cara kerjanya di baliknya: browser menyusun pohon dari HTML, JavaScript memilih cabang lewat selektor, lalu mengubah isi, atribut, atau struktur cabang itu.

## Isi

### Mengapa DOM ada

Bab 2 sampai 5 membuat halaman yang diam. Browser membaca HTML dan CSS, menampilkannya, lalu berhenti. Tidak ada yang berubah setelah halaman terbuka. Padahal halaman yang kamu pakai setiap hari hidup. Daftar tugas bertambah saat tombol ditekan, keranjang belanja menghitung ulang, tombol suka berubah warna. Perubahan itu dikerjakan JavaScript. Untuk itu JavaScript butuh sesuatu yang bisa digenggam, yaitu representasi halaman yang bisa dibaca dan ditulis program. Tanpa representasi itu, kode hanya bisa mencetak teks ke console. Representasi itu bernama DOM.

### Apa itu DOM

DOM adalah Document Object Model, peta objek halaman yang disusun browser saat membaca HTML. Objek artinya bagian halaman yang bisa diprogram. Browser membaca file HTML dan membentuk pohon. Pohon adalah struktur bertingkat di mana satu elemen berada di dalam elemen lain. Setiap objek di pohon disebut node. Pintu masuknya bernama `document`, objek bawaan browser yang mewakili seluruh halaman. Lewat `document`, JavaScript bisa bertanya tentang halaman dan mengubahnya.

```html
<h2 id="judul">Daftar belanja</h2>
<ul id="daftar">
  <li>kopi</li>
</ul>
```

Browser menyusunnya berlapis. `document` di puncak, lalu `html`, lalu `body`. Di dalam `body` ada `h2` dan `ul`. Di dalam `ul` ada `li`. Susunan ini tetap, dan JavaScript memakainya untuk menemukan elemen.

### Memilih elemen

Sebelum mengubah sesuatu, kamu harus menunjuknya. `document.querySelector` adalah perintah untuk memilih satu elemen. Ia menerima satu selektor. Selektor adalah pola pencarian yang menyalin cara CSS memilih elemen, materi bab 3. Tanda pagar `#` memilih elemen dengan id tertentu, titik `.` memilih elemen dengan class tertentu, dan menulis nama tag seperti `li` memilih tag itu.

```js
const judul = document.querySelector("#judul");
const daftar = document.querySelector("#daftar");
```

`querySelector` mengembalikan elemen pertama yang cocok. Kalau tidak ada yang cocok, ia mengembalikan `null`, nilai khusus yang berarti tidak ada. Untuk memilih semua elemen yang cocok sekaligus, pakai `document.querySelectorAll`. Hasilnya mirip array dan bisa diputar dengan `forEach`.

### Mengubah isi dan atribut

Setelah terpilih, elemen bisa diubah. Properti `textContent` adalah isi teks elemen. Memberi nilai padanya langsung mengganti teks di halaman.

```js
judul.textContent = "Daftar belanja minggu ini";
```

Elemen juga membawa atribut, informasi tambahan seperti `id`, `class`, dan `href`. Yang paling sering diubah adalah `class`, dan cara resminya lewat `classList`, daftar class milik elemen.

```js
judul.classList.add("sorot");    // menambah class
judul.classList.remove("sorot"); // melepas class
judul.classList.toggle("sorot"); // menambah bila belum ada, melepas bila sudah
```

Ada juga `innerHTML`, pengganti `textContent` yang membaca teks sebagai HTML lengkap dengan tag. Berguna untuk menyisipkan markup, tapi berbahaya bila isinya berasal dari pengguna, karena orang lain bisa menyelundupkan kode lewat situ. Untuk teks biasa, selalu pakai `textContent`.

### Membuat elemen baru

Memilih dan mengubah belum lengkap tanpa menambah. `document.createElement` membuat elemen baru yang belum menempel di halaman. `appendChild` menempelkannya sebagai anak terakhir dari elemen lain.

```js
const item = document.createElement("li");
item.textContent = "teh";
daftar.appendChild(item);
```

Elemen juga bisa dilepas dengan `remove()`. Semua perubahan ini terjadi langsung pada halaman, dan pembaca melihat hasilnya seketika tanpa memuat ulang.

### Analogi: silsilah keluarga

Satu gambar untuk semuanya. Bayangkan peta silsilah keluarga. `document` adalah leluhur paling tua yang menyimpan semua nama. Setiap elemen adalah anggota keluarga. Elemen yang membungkus elemen lain adalah orang tua, elemen di dalamnya adalah anak, dan `h2` serta `ul` pada contoh tadi adalah saudara di bawah `body`. Memilih elemen sama dengan memanggil anggota lewat namanya, lewat id atau ciri lain pada selektor. Mengubah halaman sama dengan mengubah keadaan anggota itu. Ganti ucapannya dengan `textContent`. Ganti pakaiannya dengan `classList`. Hadirkan anggota baru dengan `createElement` dan `appendChild`.

### Pasangan contoh

Contohnya menambah satu barang ke daftar belanja dan menyorot judulnya. Versi vanilla memerintah halaman langkah demi langkah. Versi React tidak menyentuh DOM sama sekali, ia mengubah data dan membiarkan React mengubah halaman.

### Demo Hidup

Demo di bawah memakai semua perintah bab ini pada halaman sungguhan. Satu tombol mengganti teks paragraf lewat `textContent`. Satu tombol menyalakan dan mematikan class lewat `classList.toggle`. Satu tombol membuat `li` baru dengan `createElement` lalu menempelkannya dengan `appendChild`. Semuanya jalan tanpa build tool.

Ringkasan bab ini. DOM adalah peta objek halaman yang disusun browser dari HTML, dan `document` adalah pintu masuknya. `querySelector` memilih satu elemen dengan selektor bergaya CSS, `querySelectorAll` memilih semuanya. `textContent` mengganti isi teks, `classList` mengatur class, `createElement` dan `appendChild` menambah elemen baru. Bab berikutnya membahas event, cara halaman bereaksi pada klik dan ketikan.

## Pasangan contoh

- Vanilla: `querySelector` untuk judul dan daftar, `textContent`, `classList.add`, lalu `createElement` dan `appendChild` untuk barang baru.
- React: komponen dengan state array `items`, render daftar dengan `map`, tombol yang mengubah state dan membiarkan React mengurus DOM.

## Perbedaan inti

Cara vanilla disebut imperatif, kamu menyuruh halaman langkah demi langkah. Cara React disebut deklaratif, kamu mendeskripsikan tampilan dari data yang ada. `items` adalah state, data milik komponen yang bila berubah membuat komponen dirender ulang. Untuk halaman kecil, memerintah DOM manual terasa ringan. Untuk halaman besar yang datanya terus berubah, cara manual melelahkan dan rawan lupa, dan di situ React mengambil alih. Bab 14 membahas itu lebih jauh.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: Introduction to the DOM.
- MDN: Document.querySelector, Document.querySelectorAll.
- MDN: Node.textContent, Element.classList.
- MDN: Document.createElement.
- web.dev: learn JavaScript.
