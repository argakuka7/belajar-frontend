# Konsep Bab 11: Fetch & Async: Konsumsi API

Kembali ke [overview](overview.md).

## Tujuan bab

Sampai bab 10, semua data yang dipakai halaman lahir dari halaman itu juga. Halaman nyata tidak hidup seperti itu. Harga di toko online, pos di media sosial, dan suhu di aplikasi cuaca tinggal di server. Bab ini mengajarkan cara meminta data itu dengan fetch dan cara mengurus waktu tunggunya dengan async dan await. Judulnya konsumsi API. Konsumsi berarti memakai, dan API adalah pintu resmi untuk meminta data dari program lain.

Dua pertanyaan yang dijawab bab ini, sesuai urutan wajib seri ini. Pertama, mengapa halaman butuh fetch dan cara menunggu yang tidak membekukan halaman. Kedua, bagaimana keduanya bekerja di baliknya, dari Promise sampai isi jawaban yang diubah menjadi objek.

## Isi

### Mengapa fetch ada

Setiap halaman sebenarnya sudah pernah mengambil data. Saat kamu membuka sebuah alamat, browser meminta berkas HTML ke server, dan halaman tersusun dari jawaban itu. Aturan tanya jawab antara browser dan server disebut HTTP. Bedanya, permintaan itu terjadi sekali di awal, sebelum halaman tampil. Setelah halaman jadi, datanya beku. Untuk harga terbaru atau pos baru, halaman lama harus dimuat ulang seluruhnya.

fetch mengubah urutan itu. fetch adalah perintah browser untuk meminta data ke server saat halaman sudah jalan, tanpa memuat ulang apa pun. Tempat data disajikan disebut API, singkatan dari Application Programming Interface. API adalah cara satu program meminta sesuatu dari program lain dengan aturan yang jelas, tanpa perlu tahu isi di baliknya. Banyak perusahaan menyediakan API publik untuk cuaca, peta, dan berita, dan halaman mana pun boleh memintanya.

### Jaringan lambat, JavaScript satu jalur

Permintaan ke server butuh waktu. Data menempuh jarak nyata lewat kabel dan tower, dan server butuh waktu menyusun jawaban. Kadang sesaat, kadang sampai hitungan detik. Selama menunggu, halaman sedang apa?

JavaScript menjalankan kode satu baris pada satu waktu, seperti kasir yang melayani satu antrean saja. Kalau kode memaksa menunggu jaringan selesai, seluruh halaman ikut membeku. Tombol tidak merespons, dan semua antre di belakang permintaan yang lambat.

Karena itu ada istilah async, singkatan dari asynchronous. Kerja async diletakkan di belakang, kode lain jalan dulu, dan hasilnya diantar begitu siap. Halaman tetap hidup selama data masih di jalan.

### Promise: janji nilai akan datang

Cara JavaScript menjanjikan hasil yang belum ada adalah objek bernama Promise. Promise adalah janji bahwa sebuah nilai akan ada nanti. Baru lahir, janjinya masih menunggu. Begitu data datang, janjinya terpenuhi dan berisi nilai. Kalau permintaan gagal, janjinya gagal dan berisi penyebabnya.

Analogi tunggal bab ini mulai di sini, kantin. Kamu memesan makan di konter, petugas memberi bon berisi nomor pesanan. Bon itu bukan makanan, tetapi janji bahwa makanan akan datang. Sambil menunggu kamu tidak berdiri kaku memandangi konter, kamu duduk dan mengobrol. Kantin tetap bergerak, dan nomormu dipanggil begitu pesanan siap.

### async dan await

Menunggu janji punya beberapa gaya penulisan, dan seri ini memakai async serta await karena tulisannya paling mirip urutan kejadian nyata. Fungsi yang diberi kata async disebut async function, dan hanya di dalamnya await boleh dipakai. await berarti tunggu di baris ini sampai janjinya selesai, lalu lanjutkan.

```js
async function ambilCuaca() {
  const jawaban = await fetch(urlCuaca);
  const data = await jawaban.json();
  return data;
}
```

Yang dijeda hanya fungsi itu, bukan seluruh halaman. Orang lain di kantin tetap dilayani, dan tombol di halaman tetap bisa ditekan.

### fetch dan Response

fetch menerima satu alamat URL dan mengembalikan Promise berisi Response, bungkus jawaban dari server. Isinya tiga hal yang paling sering dipakai. Status, kode angka hasil permintaan, contohnya 200 berarti oke, 404 berarti data tidak ditemukan, 500 berarti server bermasalah. Ok, versi mudahnya, bernilai true untuk status 200 sampai 299 dan false selain itu. Terakhir isi pesannya sendiri.

Isi pesan tidak langsung berupa data. Isinya tiba bertahap, seperti nampan yang diantar piring demi piring. Metode json() mengumpulkan semuanya menjadi satu objek JavaScript, dan metode ini juga mengembalikan Promise karena pengumpulannya butuh waktu. JSON sudah ditemu di bab 10, format teks yang meniru bentuk data JavaScript.

```js
const jawaban = await fetch(urlCuaca); // Promise berisi Response
const data = await jawaban.json();     // Promise berisi objek
```

### Dua jenis gagal

Gagalnya ada dua jenis, dan perlakuannya berbeda. Jenis pertama gagal jaringan. Sinyal hilang, kabel lepas, server mati, permintaan tidak pernah selesai. Janjinya gagal, await melempar error, dan tempat menangkapnya adalah try/catch, blok coba yang kalau terjadi error lompat ke blok tangkap.

```js
try {
  const jawaban = await fetch(urlCuaca);
  const data = await jawaban.json();
} catch (galat) {
  elemen.textContent = "Gagal menghubungi server";
}
```

Jenis kedua sering mengejutkan pemula. Server menjawab, tetapi jawabannya buruk, misalnya 404 karena alamat data salah. fetch tetap terpenuhi, karena dari sudut pandang jaringan permintaan berhasil. Isi jawabannyalah yang bermasalah, jadi setelah fetch perlu satu pemeriksaan kecil, `if (!jawaban.ok)`.

Ada satu batas lagi milik browser. Halaman hanya boleh membaca isi jawaban dari origin lain kalau servernya mengizinkan, aturannya bernama CORS. Origin sudah ditemu di bab 10. API publik seperti yang dipakai bab ini memang mengizinkan, jadi cukup tahu batasnya ada.

### Batas fetch

Batasnya perlu dikenali sejak awal. fetch butuh jaringan, halaman tanpa internet hanya bisa menampilkan pesan gagal. Hasilnya tidak bisa diambil sekarang juga, `const x = fetch(url)` berisi Promise, bukan data, dan ini jebakan pemula yang paling sering.

### Analogi: kantin

Satu gambar untuk semuanya. Konter adalah API, tempat permintaan diterima dengan aturan yang jelas. Memesan adalah fetch, bon berisi nomor pesanan adalah Promise. Sambil menunggu kamu tidak membekukan kantin, itulah async dan await, jeda hanya pada pesananmu sendiri. Petugas datang membawa nampan, itulah Response dengan keterangan status di bonnya. Isi nampan dikemas dalam kotak standar yang bisa dibuka tangan kosong, itulah JSON dan metode json(). Pesanan habis adalah 404, dapur bermasalah adalah 500, listrik padam adalah gagal jaringan yang ditangkap catch.

### Pasangan contoh

Contohnya mengambil suhu Jakarta saat halaman dibuka dari API cuaca publik Open-Meteo, satu nilai sederhana tanpa daftar. Versi vanilla menulis satu async function, memeriksa ok, lalu menaruh hasilnya dengan textContent. Versi React menyimpan suhu di state dengan useState, memanggil fetch di dalam useEffect dengan daftar dependensi kosong supaya jalan sekali saat komponen lahir, dan tampilan mengikuti state.

### Demo Hidup

Demo di bawah mengambil suhu Jakarta dari server sungguhan. Tulisan Mengambil muncul sesaat selama data di jalan, lalu diganti angka suhu. Tekan lagi untuk data segar, angkanya bisa berubah karena server mengukur ulang. Kalau jaringan diputus, pesan gagal dari catch yang muncul.

Ringkasan bab ini. fetch meminta data ke server saat halaman sudah jalan, tanpa memuat ulang. Jaringan lambat dan JavaScript satu jalur, karena itu hasilnya dijanjikan lewat Promise dan ditunggu dengan await di dalam async function. Response membawa status, ok, dan isi yang dikumpulkan json() menjadi objek. Gagal jaringan ditangkap try/catch, jawaban buruk diperiksa lewat ok. Bab berikutnya merender data sebagai daftar, dengan kondisi dan template.

## Pasangan contoh

- Vanilla: `async function tampilkanCuaca` dijalankan sekali saat halaman dibuka, `await fetch`, cek `jawaban.ok`, `await jawaban.json()`, `textContent` menampilkan suhu, `catch` menampilkan pesan gagal.
- React: `useState(null)` untuk suhu, `useEffect` dengan `[]` memanggil fungsi async `ambil`, `setSuhu` mengisi state, ternary menampilkan tulisan Mengambil atau suhu.

## Perbedaan inti

Di vanilla, urutan ambil data lalu pasang ke halaman dititipkan ke kedisiplinan penulis kode, ia memanggil sendiri fungsinya di tempat yang tepat. React membakukan tempatnya. Pemanggilan fetch adalah efek samping, dan wilayah efek samping di React adalah useEffect. Hasilnya masuk state, dan tampilan mengikuti state, pola yang sudah dibakukan bab 10. Kode fetch-nya sama persis di kedua versi, yang berubah hanya tempat hasilnya dititipkan. Seperti bab-bab sebelumnya, React tidak menghapus pekerjaan vanilla, hanya menaruhnya di slot yang sudah disediakan.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: Fetch API.
- MDN: Using the Fetch API.
- MDN: Promise.
- MDN: async function.
- MDN: await.
- MDN: Response.
- MDN: CORS.
- web.dev: Learn JavaScript.
