# Konsep Bab 4: CSS Layout: Flex & Grid

Kembali ke [overview](overview.md).

## Tujuan bab

Pembaca sudah tahu dari bab 3 bahwa setiap elemen adalah kotak. Bab ini menjelaskan cara menyusun kotak-kotak itu menjadi sebuah layout, susunan ruang halaman. Dua alat yang dipelajari: Flexbox untuk menyusun item dalam satu arah, dan Grid untuk menyusun item dalam baris dan kolom sekaligus. Ini jembatan ke bab 5, responsif, yang membuat layout menyesuaikan lebar layar.

Dua pertanyaan yang dijawab bab ini. Pertama, mengapa layout perlu diatur: aliran bawaan browser hanya menumpuk kotak dari atas ke bawah, dan itu tidak cukup untuk halaman yang punya navigasi dan kolom samping. Kedua, bagaimana cara kerjanya di baliknya: Flexbox menata item pada satu sumbu, Grid menata item pada dua sumbu, baris dan kolom.

## Isi

### Aliran bawaan browser

Browser punya cara bawaan untuk menempatkan elemen: aliran normal. Ini istilah untuk urutan tempat elemen jatuh tanpa aturan tambahan. Setiap elemen blok, seperti `div`, `h2`, atau `p`, memakan satu baris penuh dan menumpuk dari atas ke bawah. Sebuah `h2` lalu sebuah `p` akan terbaca dua baris, judul di atas dan paragraf di bawah, masing-masing selebar halaman.

Aliran ini masuk akal untuk dokumen seperti surat atau artikel. Halaman dibaca dari atas ke bawah, jadi menumpuk adalah pilihan yang wajar. Tapi saat satu baris sudah penuh, elemen berikutnya turun ke baris baru. Ini berarti kamu tidak bisa meletakkan dua kotak berdampingan secara mudah hanya dengan struktur biasa. Untuk menyusun halaman dengan navigasi di samping dan isi lain di tengah, aliran normal saja tidak cukup.

### Mengapa flex dan grid

Sebuah halaman web jarang berbentuk satu kolom saja. Ada bilah navigasi menyamping, sisi kiri untuk menu, sisi utama di tengah, kartu-kartu yang sejajar. Semua itu butuh kotak-kotak yang disusun bukan menumpuk. Flexbox dan Grid adalah dua alat CSS yang menjawab kebutuhan ini.

Keduanya bekerja dengan mematikan aliran normal untuk satu bagian halaman. Kamu menetapkan sebuah container, bungkus elemen-elemen yang ingin disusun, lalu elemen di dalamnya diatur oleh aturan layout. Container adalah istilah untuk elemen induk yang memuat dan menata elemen lain. Elemen di dalamnya disebut item.

Kenapa ada dua alat, bukan satu? Karena dua kebutuhan berbeda. Ada bagian halaman yang hanya perlu satu arah, seperti deretan tombol atau tautan navigasi yang horizontal. Ada bagian yang perlu dua arah sekaligus, seperti dinding kartu dengan baris dan kolom. Flexbox menangani yang pertama, Grid menangani yang kedua.

### Flexbox, satu arah

Flexbox menyusun item dalam satu arah, horizontal atau vertikal. Kamu mengubah sebuah container menjadi flex container dengan `display: flex`. Item di dalamnya langsung sejajar dalam satu garis, dari kiri ke kanan secara bawaan. Ini jalan tercepat untuk membuat deretan elemen berdampingan.

```css
.nav {
  display: flex;
  gap: 1rem;
}
```

`display: flex` mengaktifkan flex. `gap` mengatur jarak antaritern, tanpa tambahan margin. Semua item di dalam `.nav` sejajar dalam satu garis. Container flex mengendalikan posisi item di sepanjang sumbu utama, arah utama penataan, yang secara bawaan adalah kiri ke kanan.

Properti yang sering dipakai: `flex-direction` untuk mengubah arah, `justify-content` untuk mengatur posisi item di sepanjang sumbu utama, dan `align-items` untuk posisi di sumbu silang, arah yang tegak lurus sumbu utama. Contoh, `justify-content: space-between` menyebar item hingga menempel di dua ujung dengan ruang sama rata di tengah.

Bayangkan antrian di sebuah loket tiket. Orang-orang berbaris dalam satu garis menuju loket. Jarak antarmereka bisa diatur, rapat atau berjarak. Arahnya bisa diubah, dari kiri ke kanan atau terbalik. Ini analogi Flexbox, antrian satu baris.

### Grid, dua arah

Grid menyusun item dalam dua arah sekaligus, baris dan kolom yang bersilangan. Kamu mengubah container dengan `display: grid`, lalu menetapkan kolomnya dengan `grid-template-columns`. Item lalu memenuhi sel-sel yang terbentuk dari perpotongan baris dan kolom.

```css
.dinding {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
```

Baris ini membuat tiga kolom yang sama lebar. `1fr` adalah satuan khusus grid yang berarti satu bagian dari ruang yang tersisa. Tiga kolom `1fr` berarti tiga kolom sama lebar, dan mereka membagi lebar container secara merata. Item mengisi sel dari kiri atas, lalu mengalir ke kanan, dan turun ke baris berikutnya ketika satu baris penuh.

Properti penting lain: `grid-template-rows` untuk tinggi baris, dan `grid-template-columns` untuk lebar kolom. Kamu bisa mencampur ukuran tetap dengan `fr`, atau memakai nilai tertentu. `gap` bekerja di grid juga, mengatur jarak antarbaris dan antarkolom sekaligus.

Bayangkan lantai ubin. Ubin-ubin tersusun dalam baris dan kolom yang saling menyilang, membentuk pola persegi. Setiap ubin menempati satu sel hasil perpotongan satu baris dan satu kolom. Ini analogi Grid, pola dua arah.

### Kapan memakai yang mana

Aturan praktisnya pendek. Pakai Flexbox saat kamu menyusun item dalam satu arah, satu baris atau satu kolom. Deretan tautan navigasi, deretan tombol, sebaris kartu tanpa penjualan dua dimensi. Pakai Grid saat kamu membutuhkan baris dan kolom sekaligus, seperti kerangka seluruh halaman atau dinding kartu yang rapi. Grid lebih kuat untuk susunan dua dimensi, Flexbox lebih ringan untuk satu arah.

Keduanya sering dipakai bersamaan dalam satu halaman. Sebuah halaman memakai Grid untuk kerangka utamanya, dan Flexbox untuk baris kecil di dalam tiap sel, seperti deretan tombol dalam sebuah kartu. Tidak ada persaingan; keduanya alat yang saling melengkapi.

### Pasangan contoh

Kode di bawah membuat bilah navigasi, sebuah baris tautan yang sejajar. Versi vanilla menulis HTML dengan `display: flex` di CSS. Versi React menulis elemen yang sama di dalam komponen JSX.

```html
<!-- Vanilla -->
<nav class="nav">
  <a href="#">Beranda</a>
  <a href="#">Tentang</a>
  <a href="#">Kontak</a>
</nav>
```

```jsx
<!-- React -->
function Navbar() {
  return (
    <nav className="nav">
      <a href="#">Beranda</a>
      <a href="#">Tentang</a>
      <a href="#">Kontak</a>
    </nav>
  );
}
```

Satu perbedaan yang sama seperti bab 3. HTML memakai `class`, React memakai `className`. Aturan CSS `.nav` dengan `display: flex` tetap sama di keduanya. React pada akhirnya menghasilkan HTML yang sama, jadi flex dan grid yang kamu pelajari tetap berlaku. React mengelola halaman, tapi tidak mengubah cara CSS menyusun kotak.

### Demo Hidup

Demo bab ini menampilkan dua panel. Panel pertama adalah sebuah container flex dengan kotak-kotak berwarna, dan tombol mengubah arah serta `justify-content`. Panel kedua adalah container grid dengan tombol mengubah jumlah kolom. Persempit jendela dan perhatikan item flex membungkus ke baris berikutnya. Ini cara nyata flex dan grid menentukan posisi kotak di halaman.

Ringkasan bab: browser menumpuk elemen dari atas ke bawah secara bawaan. Flexbox menyusun item dalam satu arah. Grid menyusun item dalam baris dan kolom sekaligus. Pilih flex untuk satu arah, grid untuk dua arah. Memahami dua alat ini adalah kunci menyusun halaman yang teratur.

## Pasangan contoh

- Vanilla: elemen HTML dengan `class` dan aturan CSS `display: flex` di dalam `<style>`.
- React: komponen JSX memakai `className`, dengan aturan CSS yang sama.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: CSS layout, flexbox, grid.
- web.dev: learn CSS layout, flexbox, grid.
