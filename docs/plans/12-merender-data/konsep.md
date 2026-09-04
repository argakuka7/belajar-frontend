# Konsep Bab 12: Merender Data: List, Kondisi & Template

Kembali ke [overview](overview.md).

## Tujuan bab

Bab 11 membahas fetch, cara halaman mengambil data dari server. Data yang datang berupa array dan objek yang hidup di variabel. Padahal variabel tidak terlihat di layar. Pembuka halaman tetap kosong walaupun datanya sudah utuh di ingatan. Bab ini mengisi jurang itu dengan satu keterampilan yang namanya merender, mengubah data menjadi elemen yang terlihat di halaman. Peralatannya tiga. List, satu array menjadi banyak elemen sekaligus. Kondisi, tampilan yang berganti mengikuti keadaan data, sedang memuat, kosong, atau terisi. Template, cetakan bentuk tetap yang isinya diganti data, dipakai ulang untuk tiap item.

Dua pertanyaan yang dijawab bab ini, sesuai urutan wajib seri ini. Pertama, mengapa halaman butuh proses render yang disengaja, bukan sekadar menempel data. Kedua, bagaimana ketiganya bekerja di baliknya, dari loop sampai cetakan HTML yang diam sampai dikloning.

## Isi

### Mengapa merender data ada

Data dari server datang sebagai teks JSON yang sudah diubah menjadi array dan objek oleh kode bab 11. Angka, string, nilai `true` dan `false`, semuanya rapi di variabel. Tetapi browser tidak pernah menebak bahwa objek bernama `judul` harus tampil sebagai `li`, atau bahwa array berisi tiga objek berarti tiga baris di halaman. Ada satu pekerjaan yang tidak dilakukan siapa pun kecuali penulis kode, menyusun elemen dari data. Pekerjaan itu disebut render.

Merender bukan sekali jadi. Data berubah, tampilan harus mengikuti. Server lama menjawab, daftar harus berganti. Pengguna menyalakan saringan, daftar menyusut. Karena itu merender diatur sebagai fungsi, satu fungsi yang tugasnya membaca data dan menuliskannya ke halaman. Data berubah, fungsi dipanggil lagi. Pola ini yang membuat bab-bab sebelumnya menekan satu hal penting, pisahkan data dari tampilan.

### List: satu array, banyak elemen

Array berisi banyak nilai, dan halaman butuh banyak elemen untuk menampilkannya. Jalurnya loop. Untuk tiap item di array, buat elemen dengan `createElement`, isi teksnya dengan `textContent`, tempel ke induknya dengan `appendChild`. Semua alat ini sudah dipakai bab 8, kini diputar berulang oleh `forEach` dari bab 7.

```js
const ul = document.querySelector("#daftar");
data.forEach(function (tugas) {
  const li = document.createElement("li");
  li.textContent = tugas.judul;
  ul.appendChild(li);
});
```

Ada satu jebakan yang baru terasa saat daftar dirender lebih dari sekali. Panggil fungsi merender dua kali, isi halaman jadi dua kali lipat, karena `appendChild` selalu menambah, tidak pernah mengganti. Kebiasaannya satu baris, kosongkan induk sebelum mengisi. `ul.replaceChildren()` menghapus semua anak `ul`, lalu loop mengisinya dari nol. Kosongkan, lalu isi, itu pola tetap fungsi merender list.

### Kondisi: tampilan yang berganti

Data yang diambil dari server tidak selalu siap. Ada jeda, ada jawaban kosong, ada data yang terisi. Halaman yang baik menunjukkan keadaannya, bukan diam tanpa kabar. Inilah kondisi, keputusan apa yang dirender tergantung data saat itu. Alatnya if dan else dari bab 6, dan pilihannya biasanya tiga.

Sedang memuat, data belum tiba, tampilkan tulisan "Memuat...". Kosong, data tiba tapi arraynya kosong array, tampilkan tulisan seperti "Belum ada tugas". Terisi, barulah loop list jalan. Ketiganya masuk satu fungsi render yang sama.

```js
function render() {
  ul.replaceChildren();
  if (sedangMemuat) {
    status.textContent = "Memuat...";
    return;
  }
  if (data.length === 0) {
    status.textContent = "Belum ada tugas.";
    return;
  }
  status.textContent = "";
  data.forEach(tulisItem);
}
```

Satu peringatan yang disambung dari bab 8. `innerHTML` berbahaya bila isinya berasal dari luar, dan data server adalah data dari luar, sama asingnya dengan ketikan pengguna. Orang jahat bisa menyelundupkan kode lewat situ. Untuk data dari fetch, `textContent` tetap pilihan amannya.

### Template: cetakan yang dipakai ulang

Item yang dirender jarang sebatas teks polos. Kartu tugas punya judul, tanggal, dan tombol. Menulis `createElement` untuk tiap potongannya melelahkan. JavaScript punya jalan pendek, template literal, string yang memakai tanda kutip balik dan menyisipkan nilai dengan `${}`.

```js
const kartu = `
  <div class="kartu">
    <h3>${tugas.judul}</h3>
    <p>${tugas.tanggal}</p>
  </div>`;
```

Cara ini enak dibaca, tapi isinya berakhir di `innerHTML` jika dimasukkan ke halaman, dan bab tadi baru saja melarang itu untuk data dari luar. HTML menyediakan jalan lain, elemen `<template>`. Isinya tidak dirender browser, tidak terlihat dan tidak dihitung, sampai kode mengambilnya. `template.content` adalah wadah berisi bentuk jadi, dan `cloneNode(true)` membuat salinan utuh dari potongan dokumen itu, yang disebut fragment. Salin, isi bagian yang berubah, tempel. Bentuk tetap tinggal di HTML, data tinggal di JavaScript.

```html
<template id="item-tugas"><li></li></template>
```

```js
const cetakan = document.querySelector("#item-tugas");
data.forEach(function (tugas) {
  const salinan = cetakan.content.cloneNode(true);
  salinan.querySelector("li").textContent = tugas.judul;
  ul.appendChild(salinan);
});
```

### Analogi: percetakan

Satu gambar untuk semuanya. Sebuah percetakan menerima berkas dari klien, dan berkas itu adalah data dari server, isinya bukan buatan percetakan. Di dalam toko ada satu desain cetak yang disiapkan sekali, bentuknya tetap tiap hari, dan itulah template. Mesin mengulang desain itu untuk tiap baris berkas, satu kartu per baris, dan itulah list. Di jendela toko ada papan status. "Menunggu berkas" saat berkas belum tiba. "Berkas kosong" saat klien membalas tanpa pesanan. "Sedang mencetak" saat mesin berjalan. Papan itu kondisi, satu tulisan yang berganti mengikuti keadaan. Karyawan tidak menulis kartu dengan tangan, ia merawat desain dan mesin yang mengulang, lalu membiarkan papan status bicara selama pekerjaan belum selesai.

### Pasangan contoh

Contohnya daftar tugas yang dirender dari array, data yang sama bentuknya dengan jawaban fetch. Versi vanilla memakai pola lengkap bab ini, `replaceChildren`, kondisi memuat dan kosong, lalu `forEach` dengan `createElement` dan `textContent`. Versi React memutar `map` di dalam JSX, dan tiap item membawa `key`, penanda yang memberi tahu React item mana tetap item itu saat daftar berganti.

### Demo Hidup

Demo di bawah memakai server tiruan, array konstan yang dijawab lewat `setTimeout`, supaya jalan tanpa jaringan. Satu tombol mengambil data, status "Memuat..." muncul dulu, lalu list terisi lewat `<template>`. Tombol kedua membuat server membalas array kosong dan halaman menunjukkan kondisi kosong. Satu kotak centang menyaring tugas selesai, dan tiap perubahan merender ulang dari nol.

Ringkasan bab ini. Merender adalah mengubah data menjadi elemen yang terlihat, dan ia fungsi yang dipanggil ulang setiap data berubah. List dirender dengan loop, kosongkan induk dulu dengan `replaceChildren`, lalu isi ulang. Kondisi dipilih if dan else, sedang memuat, kosong, atau terisi. Template literal menulis bentuk di string, `<template>` menyimpan bentuk di HTML dan `cloneNode` menyalinnya. Bab berikutnya menerima masukan dari pengguna lewat form dan validasinya di sisi klien.

## Pasangan contoh

- Vanilla: fungsi `render` membaca state `sedangMemuat` dan array `data`, mengosongkan `ul` dengan `replaceChildren`, memilih tulisan status lewat if dan else, lalu `forEach` menyalin `<template>` dengan `cloneNode(true)` dan mengisi `li` lewat `textContent`.
- React: state array `tugas`, `{tugas.length === 0 && <p>...</p>}` untuk kondisi kosong, `tugas.map` di dalam `<ul>` dengan `key={t.id}` pada tiap `li`, React yang mengurus pengosongan dan penempelan DOM.

## Perbedaan inti

Versi vanilla merender dengan tangan di tempat yang ditentukan sendiri, ia mengosongkan induk, memilih kondisi, lalu menempel elemen satu per satu. Versi React mendeklarasikan hasilnya saja. Yang ditulis hanya satu rumus, bentuk halaman dari data sekarang, berupa list `map` dengan `key` dan kondisi kosong dengan `&&`. Setiap data berubah, React menjalankan rumus itu lagi, membandingkan hasilnya dengan halaman lama, lalu menyentuh DOM hanya di bagian yang benar-benar berubah. `key` ikut kerja di sini, ia identitas tiap item, dan dengan identitas itu React tahu item mana yang tinggal digeser dan mana yang benar-benar baru. Pekerjaan kosongkan lalu isi ulang tidak hilang di React, hanya pindah ke tangan framework. Bab 14 membongkarnya lebih jauh.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: HTMLTemplateElement.
- MDN: Node.cloneNode.
- MDN: Element.replaceChildren.
- MDN: Array.prototype.forEach.
- MDN: Array.prototype.filter.
- web.dev: Learn JavaScript.
