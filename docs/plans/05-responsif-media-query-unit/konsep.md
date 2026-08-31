# Konsep Bab 5: Responsif: Media Query & Unit

Kembali ke [overview](overview.md).

## Tujuan bab

Pembaca sudah tahu dari bab 3 bahwa CSS memberi tampilan, dan dari bab 4 bahwa flex dan grid menyusun kotak. Bab ini menjelaskan dua hal: bagaimana aturan CSS bisa hanya berlaku pada lebar layar tertentu melalui media query, dan bagaimana unit relatif membuat ukuran mengalir mengikuti lebar. Setelah bab ini, satu halaman nyaman dibaca di ponsel maupun di layar lebar.

Dua pertanyaan yang dijawab bab ini. Pertama, mengapa responsif ada: layar ponsel, laptop, dan TV punya lebar berbeda, dan pembaca melihat situs yang sama di semua layar itu. Kedua, bagaimana cara kerjanya di baliknya: media query memberlakukan aturan hanya pada kondisi lebar tertentu, sementara unit relatif menghitung ukuran dari acuan yang berubah, dan `clamp()` membatasi ukuran agar tidak ekstrem.

## Isi

### Mengapa responsif

Satu foto dan tiga ukuran bingkai, kecil, sedang, dan besar. Foto yang sama harus muat di ketiganya. Halaman web menghadapi masalah yang sama. Ponsel, tablet, laptop, dan TV punya lebar layar yang berbeda, dan pembaca melihat situs yang sama di semua layar itu. Kalau tampilan dibuat untuk satu ukuran saja, di layar lain ia kepanjangan, kepotongan, atau terlalu kecil dibaca.

Responsif berarti tampilan menyesuaikan diri dengan lebar layar yang sedang dipakai. Tampilan tidak dibuat dalam satu ukuran tetap. Tampilan diberi aturan tentang bagaimana ia berubah saat lebar berubah. Dua alat utama: media query memutuskan kapan sebuah aturan berlaku, dan unit relatif membuat ukuran mengalir.

### Viewport dan unit

Sebelum melangkah, definisikan satu istilah. Viewport adalah bagian halaman yang terlihat di layar, jadi lebar jendela browser pada ponsel itu sempit, pada laptop lebih lebar. Semua kerja responsif mengacu pada lebar viewport ini.

Sejak bab 3 kamu menulis angka seperti `2rem` dan `1px`. Angka itu adalah unit, ukuran untuk mengukur. `px` adalah piksel, satu titik tetap di layar. Nilai `px` tidak berubah walau layar berubah. Itu sebabnya `px` saja menyulitkan tampilan responsif. Maka ada unit relatif, unit yang menghitung ukurannya dari acuan yang ikut berubah.

### Unit relatif

Unit relatif menghitung ukuran dari acuan lain. Acuan itu bisa elemen induk, ukuran huruf dasar, atau lebar viewport. Kalau acuannya berubah, ukurannya ikut berubah.

Empat yang sering dipakai.

Persen, `%`, mengikuti induknya. Satu kolom dengan `width: 50%` selalu mengambil setengah lebar elemen penampungnya, apa pun lebarnya. Persen bagus untuk membagi ruang secara proporsi.

`rem` mengikuti ukuran huruf akar halaman, elemen `<html>`, biasanya 16 piksel di browser. Satu `rem` adalah 16 piksel itu, jadi `2rem` adalah 32 piksel. Kata `rem` singkatan dari root em. `rem` mudah ditebak karena selalu mengacu satu angka dasar.

`em` serupa, tapi mengikuti ukuran huruf elemen tempat ia dipakai, bukan akar halaman.

`vw` singkatan viewport width, dan satu `vw` adalah satu persen dari lebar viewport. `vh` mengikuti tinggi viewport. Kalau layar selebar 1000 piksel, satu `vw` adalah 10 piksel. `vw` berguna untuk elemen yang harus mengikuti lebar jendela secara langsung.

Aturan praktisnya begini. Pakai `rem` untuk ukuran huruf dan jarak, agar semua bagian berubah konsisten saat ukuran huruf dasar diubah. Pakai persen untuk proporsi di dalam satu kotak. Pakai `vw` untuk yang mengikuti lebar jendela. Ini panduan, bukan hukum.

### clamp, ukuran yang dibatasi

Saat `vw` dipakai untuk ukuran huruf, ada risiko. Teks jadi terlalu kecil di layar sempit dan terlalu besar di layar lebar, karena mengikuti lebar sepenuhnya. `clamp()` membatasi.

```css
font-size: clamp(1rem, 4vw, 2.5rem);
```

`clamp()` menerima tiga nilai: batas bawah, nilai yang diharapkan, dan batas atas. CSS memakai nilai tengah, `4vw`, selama ia tidak keluar dari batas bawah dan atas. Di layar sangat sempit, `4vw` bisa berada di bawah `1rem`, maka yang dipakai `1rem`. Di layar sangat lebar, `4vw` bisa melebihi `2.5rem`, maka yang dipakai `2.5rem`. Di antaranya teks mengalir mengikuti lebar. Hasilnya ukuran yang berubah mulus, tidak pernah terlalu kecil dan tidak pernah terlalu besar.

### Media query, aturan bersyarat

Unit relatif membuat ukuran mengalir mulus. Tapi ada saatnya kamu ingin keputusan keras: di layar lebar tampilkan tiga kolom, di layar sempit tampilkan satu kolom. Di sinilah media query masuk.

Media query adalah cara menulis aturan CSS yang hanya berlaku bila kondisi tertentu benar. Bentuk yang paling umum mengecek lebar viewport.

```css
@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

Baris `@media (min-width: 640px)` menyatakan, bila lebar viewport paling tidak 640 piksel, terapkan aturan di dalam kurung kurawal. Kalau lebih sempit, aturan diabaikan. `min-width` berarti batas bawah. Ada juga `max-width`, batas atas, yang berlaku bila lebar tidak melebihi angka itu.

Angka tempat sebuah aturan berubah, seperti 640 di atas, disebut ambang, dan di kalangan pengembang, breakpoint. Pilih ambang dengan melihat kapan tampilan mulai terasa sempit, bukan dengan menebak merk ponsel. Mulai dari lebar paling kecil, lalu tambah aturan `min-width` untuk layar yang lebih lebar.

### Analogi: meja yang bisa dipanjangkan

Bayangkan meja makan yang bisa dipanjangkan. Ruang makan yang sempit hanya menampung meja pendek untuk dua orang. Ruang yang luas menampung meja dengan daun tambahan untuk delapan orang. Kamu menambah daun hanya saat ruang cukup. Angka lebar ruang yang cukup itu adalah ambang. Media query seperti keputusan menambah daun: bila ruang paling tidak sekian, pasang daun, muat lebih banyak.

Piring di atas meja memakai logika yang sama dengan unit relatif. Separuh meja selalu separuh meja, besar atau kecil. Satu piring yang mengambil setengah meja itu tetap setengah, berapa pun panjang meja. Porsi yang mengikuti ukuran meja seperti ini adalah unit relatif. Lebar ruang makan mewakili lebar viewport, meja mewakili tampilan halaman.

### Pasangan contoh

Contohnya satu set kartu yang jumlah kolomnya berubah. Versi vanilla menulis HTML lalu aturan media query di CSS. Versi React menulis komponen yang menghasilkan elemen yang sama, dan media query di CSS bekerja sama saja. Perbedaan inti: di vanilla kamu menulis elemen dan aturan di tempat terpisah, di React elemen lahir dari komponen. Responsif adalah kerja CSS, jadi aturan yang sama berlaku di kedua versi.

### Demo Hidup

Demo menunjukkan ketiganya sekaligus. Grid tiga kartu berganti jumlah kolom pada ambang lebar, berkat media query. Lebar kartu memakai persen sehingga kartu mengisi ruang. Ukuran huruf memakai `rem` dan `clamp()`. Angka lebar layar di-render oleh React yang dimuat lewat CDN ESM. Geser jendela dan lihat kolom berubah serta angkanya mengikuti.

Ringkasan bab ini. Responsif berarti tampilan menyesuaikan lebar viewport. Unit relatif, seperti persen, `rem`, dan `vw`, membuat ukuran mengikuti acuan yang berubah. `clamp()` membatasi ukuran agar tidak ekstrem. Media query memberlakukan aturan pada ambang lebar tertentu. Dengan ini satu halaman nyaman di ponsel maupun di layar lebar.

## Pasangan contoh

- Vanilla: elemen HTML murni, aturan media query dan unit relatif di dalam `<style>`, memakai `repeat(3, 1fr)` untuk jumlah kolom.
- React: komponen JSX memakai `className`; aturan CSS yang sama tetap di file CSS. React hanya menghasilkan elemen, responsifnya tetap kerja CSS.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: media queries, CSS values and units, length units, clamp, viewport.
- web.dev: learn CSS media queries, relative length units.
