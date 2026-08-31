# Konsep Bab 3: CSS: Selektor & Box Model

Kembali ke [overview](overview.md).

## Tujuan bab

Pembaca sudah tahu dari bab 2 bahwa HTML menyusun isi halaman. Bab ini menjelaskan bagaimana CSS mengatur tampilan isi itu, dan kenapa setiap elemen diperlakukan sebagai kotak. Ini fondasi untuk bab 4, layout flex dan grid.

Dua pertanyaan yang dijawab bab ini. Pertama, mengapa CSS ada: HTML hanya menyusun isi tanpa tampilan, dan CSS memberi aturan tampilan secara terpisah sehingga struktur dan gaya tidak bercampur. Kedua, bagaimana cara kerjanya di baliknya: setiap aturan CSS memilih elemen dengan selektor lalu menerapkan deklarasi, dan setiap elemen lalu dihitung sebagai kotak empat lapis, the box model.

## Isi

### CSS menghias struktur

Di bab 2 kamu membuat kerangka halaman dengan HTML. Kerangka menentukan di mana judul, navigasi, dan isi utama berada. Tapi kerangka saja belum menarik. Browser memberi elemen tampilan bawaan yang sederhana, teks gelap dengan latar terang. Untuk mengubah tampilan itu, kamu butuh CSS.

CSS adalah bahasa yang mengatur tampilan. Kepanjangannya, Cascading Style Sheets, jarang dipakai; yang penting adalah cara kerjanya. CSS terpisah dari HTML. Struktur halaman tinggal di HTML, aturan tampilan tinggal di CSS. Pemisahan ini membuat dua hal mudah dirawat. Kamu bisa mengubah warna seluruh situs lewat satu tempat, tanpa menyentuh isi.

### Aturan CSS dan selektor sebagai alamat

Sebuah aturan CSS terdiri dari dua bagian. Selektor memilih elemen mana yang dihias. Deklarasi menetapkan tampilannya. Deklarasi berisi pasangan properti dan nilai, ditulis di dalam kurung kurawal.

```css
.judul {
  color: red;
  font-size: 2rem;
}
```

Baris pertama, `.judul`, adalah selektor. `color` dan `font-size` adalah properti. `red` dan `2rem` adalah nilai. Struktur ini selalu sama, satu aturan memilih elemen, lalu menetapkan tampilan.

Bayangkan selektor sebagai alamat. Halaman adalah sebuah desa, dan setiap elemen adalah satu rumah. Selektor memberi tahu postman rumah mana yang dituju. Alamat yang lebih umum menjangkau banyak rumah. Alamat yang lebih khusus menjangkau satu rumah. Ini analogi selektor, alamat untuk elemen.

### Selektor dasar

Ada tiga selektor yang sering dipakai. Selektor tipe menargetkan elemen berdasarkan nama elemennya. `h1` memilih semua judul level satu, `p` memilih semua paragraf. Selektor tipe menjangkau semua elemen dengan nama itu.

Selektor class memakai tanda titik. `.judul` memilih elemen yang memiliki `class="judul"`. Satu class bisa dipakai banyak elemen. Ini selektor yang paling sering dipakai, karena kamu bisa mengelompokkan elemen yang tampilannya sama tanpa menyebut satu per satu.

Selektor id memakai tanda pagar. `#banner` memilih elemen dengan `id="banner"`. Id harus unik, hanya satu elemen per halaman. Selektornya paling khusus di antara ketiganya. Gunakan id saat ingin menarget satu elemen saja.

Mengapa tiga macam? Karena kebutuhan berbeda. Kadang kamu ingin menghias semua paragraf, kadang satu kelompok kartu, kadang satu blok spesifik. Selektor memberi tingkat alamat yang tepat untuk tiap kebutuhan. Memilih selektor yang pas membuat CSS lebih mudah dibaca dan dirawat.

### Mengapa kotak

Browser memperlakukan setiap elemen sebagai kotak persegi panjang, bahkan huruf yang satu. Sebuah paragraf adalah kotak selebar halaman. Sebuah `div` adalah kotak. Gambar adalah kotak. Tidak ada lingkaran sejati di dalam aliran halaman, semuanya kotak yang tersusun. Ini dasar cara browser menata elemen.

Kesadaran bahwa semuanya kotak itu penting. Layout di bab 4 membahas cara menyusun kotak-kotak ini. Responsif di bab 5 membahas cara mengubah ukuran kotak mengikuti layar. Semua kerja itu berdiri di atas pemahaman bahwa setiap elemen adalah kotak.

### Box model, kotak empat lapis

Setiap kotak elemen tersusun dari empat lapis, dari dalam ke luar. Lapis paling dalam adalah konten, isi sebenarnya, teks atau gambar. Di sekelilingnya ada padding, ruang antara isi dan tepi. Lalu border, garis tepi kotak. Paling luar adalah margin, jarak antara kotak ini dan kotak lain.

Bayangkan bingkai foto. Foto adalah konten. Bantalan dalam bingkai yang menahan foto adalah padding. Kayu bingkai adalah border. Jarak antara bingkai dan dinding atau foto di sebelahnya adalah margin. Keempat lapis ini ada di setiap elemen, meskipun padding, border, dan margin kadang berukuran nol.

Padding memberi napas pada isi, agar teks tidak menempel di tepi. Border menandai batas kotak. Margin memberi jarak antartetangga. Ukuran padding, border, dan margin bisa diatur terpisah untuk empat sisi, atas, kanan, bawah, kiri. Aturan satu nilai menetapkan keempat sisi sekaligus.

Total ruang sebuah kotak adalah jumlah keempat lapisnya. Konten punya lebar sendiri. Tambahkan padding kiri dan kanan, lalu border kiri dan kanan, lalu margin kiri dan kanan. Hasilnya ruang total yang diduduki kotak. Browser menghitung jumlah ini untuk menata posisi tiap elemen di halaman.

### Perangkap box-sizing

Ada satu hal yang mengecoh pemula. Saat kamu menetapkan lebar elemen, lebar itu biasanya mengacu hanya pada konten. Padding dan border dihitung di luar lebar itu. Sebuah `div` selebar 200 piksel dengan padding 20 piksel akan memakan 240 piksel di halaman, 200 untuk konten, ditambah 40 untuk padding.

Ini sering membuat kotak lebih besar dari yang kamu bayangkan. Perbaikannya memakai `box-sizing: border-box`. Dengan nilai ini, lebar yang kamu tetapkan sudah mencakup padding dan border. Kotak selebar 200 piksel memakan 200 piksel, berapa pun paddingnya. Banyak situs memakai aturan ini pada semua elemen.

```css
* {
  box-sizing: border-box;
}
```

Tanda bintang, `*`, adalah selektor universal. Ia memilih semua elemen. Satu baris ini membuat semua elemen memakai `border-box`. Setelah aturan ini, mengatur lebar terasa lebih masuk akal, karena angka yang kamu tulis sesuai ruang nyata di layar.

### Pasangan contoh

Kode menghias satu kartu. Versi vanilla menulis elemen HTML dengan class, lalu aturan CSS di dalam `<style>`. Versi React menulis elemen yang sama di dalam komponen JSX.

```html
<!-- Vanilla -->
<div class="kartu">
  <h2>Resep Nasi Goreng</h2>
  <p>Beras, telur, kecap.</p>
</div>
```

```html
<!-- React -->
function Kartu() {
  return (
    <div className="kartu">
      <h2>Resep Nasi Goreng</h2>
      <p>Beras, telur, kecap.</p>
    </div>
  );
}
```

Satu perbedaan penting. HTML memakai `class` untuk menempelkan selektor class. React memakai `className`. Alasannya teknis, di JavaScript kata `class` sudah dipakai untuk arti lain, jadi JSX memakai `className`. Hasilnya sama, elemen ikut selektor .kartu. Aturan CSS sendiri tidak berubah di React. Selektor `.kartu` tetap bekerja. React pada akhirnya menghasilkan HTML yang sama, jadi CSS yang kamu pelajari tetap berlaku. React menyembunyikan cara mengelola halaman, tapi tidak mengubah aturan tampilan.

### Demo Hidup

Demo bab ini menampilkan satu kartu yang padding, border, dan marginnya bisa diubah langsung dengan tombol. Pengunjung melihat bagaimana ruang kotak bertambah setiap lapis bertambah, dan bagaimana kartu bergeser. Ini cara nyata box model menentukan tempat elemen di halaman.

Ringkasan bab: CSS memberi tampilan pada struktur HTML. Selektor memilih elemen yang dihias, dan deklarasi menetapkan tampilannya. Setiap elemen adalah kotak empat lapis, konten, padding, border, margin. Memahami kotak ini membantu kamu mengatur ruang halaman dengan tepat.

## Pasangan contoh

- Vanilla: elemen HTML dengan `class` dan aturan CSS di dalam `<style>`.
- React: komponen JSX memakai `className` sebagai pengganti `class`, dengan CSS yang sama.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: CSS first steps, CSS selectors, box model, box-sizing.
- web.dev: learn CSS selectors, box model.
