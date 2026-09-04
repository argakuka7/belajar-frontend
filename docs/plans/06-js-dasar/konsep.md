# Konsep Bab 6: JavaScript: Variabel, Tipe & Kontrol Aliran

Kembali ke [overview](overview.md).

## Tujuan bab

Pembaca sudah tahu dari bab 2 bahwa HTML memberi struktur, dan dari bab 3 sampai 5 bahwa CSS memberi tampilan. Bab ini menambah lapisan ketiga: JavaScript, bahasa yang membuat halaman bisa bertindak. Bab ini menjelaskan tiga fondasi JavaScript: variabel untuk menyimpan nilai, tipe data untuk mengenal macam nilai, dan kontrol aliran untuk membuat keputusan serta pengulangan. Setelah bab ini, pembaca bisa menulis program kecil yang membaca nilai dan memberi jawaban.

Dua pertanyaan yang dijawab bab ini. Pertama, mengapa JavaScript ada: halaman yang hanya berisi HTML dan CSS diam saja, dan JavaScript membuatnya merespons pembaca. Kedua, bagaimana cara kerjanya di baliknya: variabel menyimpan nilai di memori, tipe data menentukan macam nilai itu, dan kontrol aliran mengubah urutan perintah yang dijalankan.

## Isi

### Mengapa JavaScript

Halaman web punya tiga lapisan. HTML menyusun struktur, CSS memberi tampilan, JavaScript memberi perilaku. Tanpa JavaScript, halaman hanya menampilkan teks dan gambar yang tetap. Dengan JavaScript, halaman bisa menghitung, memutuskan, dan mengubah isinya saat pembaca berinteraksi.

JavaScript adalah bahasa pemrograman yang berjalan di browser. Bahasa pemrograman adalah cara memberi perintah ke komputer dengan aturan yang jelas. Browser membaca perintah itu dan menjalankannya baris demi baris. Setiap baris perintah disebut pernyataan.

### Variabel

Program menyimpan nilai agar bisa dipakai lagi. Tempat menyimpan nilai itu disebut variabel. Variabel seperti kotak berlabel: kamu menulis nama di luar kotak, lalu meletakkan isi di dalamnya. Nama itu yang kamu pakai untuk mengambil isinya nanti.

Dua cara membuat variabel di JavaScript: `let` dan `const`.

```js
let umur = 25;
const nama = "Kuka";
```

`let` membuat variabel yang isinya bisa diganti. `const` membuat variabel yang isinya tetap, tidak bisa diganti setelah diisi. Kata const singkatan dari constant, tetap. Aturan praktisnya: pakai `const` sebagai bawaan, dan `let` hanya saat kamu tahu isinya akan berubah. Ada juga `var`, cara lama yang sebaiknya dihindari.

### Tipe data

Setiap nilai di JavaScript punya macam, yang disebut tipe data. Tipe data menentukan apa yang bisa dilakukan dengan nilai itu. Lima tipe dasar yang sering dipakai.

String adalah teks, ditulis di antara tanda kutip. `"halo"` dan `'Kuka'` adalah string. Number adalah angka, ditulis tanpa kutip, seperti `25` dan `3.14`. Boolean adalah nilai benar atau salah, ditulis `true` atau `false`. Boolean dipakai untuk keputusan.

Dua tipe untuk keadaan kosong. `null` berarti sengaja kosong, kamu yang mengosongkannya. `undefined` berarti belum diisi sama sekali. Bedanya halus tapi penting: `null` adalah pilihan sadar, `undefined` adalah belum sempat.

```js
let teks = "halo";      // string
let angka = 25;         // number
let aktif = true;       // boolean
let kosong = null;      // null
let belum;              // undefined
```

### Kontrol aliran: if dan else

Program berjalan baris demi baris dari atas ke bawah. Kontrol aliran mengubah urutan itu. Kontrol aliran adalah cara memberi tahu program kapan menjalankan perintah tertentu. Yang paling dasar adalah `if` dan `else`.

`if` menjalankan perintah hanya bila sebuah kondisi benar. Kondisi adalah pertanyaan yang jawabannya `true` atau `false`. `else` menjalankan perintah lain bila kondisi itu salah.

```js
let umur = 25;
if (umur >= 18) {
  console.log("Sudah dewasa");
} else {
  console.log("Masih muda");
}
```

`console.log` adalah perintah untuk menulis pesan ke panel konsol browser, tempat pengembang melihat hasil. `>=` adalah operator, simbol untuk membandingkan, di sini berarti lebih besar atau sama dengan.

### Kontrol aliran: loop

Ada kalanya kamu ingin mengulang perintah. Loop adalah cara mengulang perintah beberapa kali. Yang paling sering dipakai adalah `for`.

```js
for (let i = 1; i <= 3; i++) {
  console.log("Hitung: " + i);
}
```

`for` menerima tiga bagian dalam kurung: nilai awal `i = 1`, kondisi lanjut `i <= 3`, dan langkah `i++` yang menambah `i` satu setiap putaran. Selama kondisi benar, perintah di dalam kurung kurawal dijalankan. Hasilnya tiga baris: Hitung: 1, Hitung: 2, Hitung: 3.

### Kontrol aliran: switch

Saat kamu membandingkan satu nilai dengan banyak kemungkinan, `if` berantai jadi panjang. `switch` memilih satu dari banyak cabang berdasarkan nilai.

```js
let hari = "senin";
switch (hari) {
  case "senin":
    console.log("Mulai minggu");
    break;
  case "jumat":
    console.log("Akhir minggu");
    break;
  default:
    console.log("Hari biasa");
}
```

`switch` membandingkan nilai `hari` dengan tiap `case`. Yang cocok dijalankan, lalu `break` menghentikan. `default` menangkap nilai yang tidak cocok dengan cabang mana pun. `switch` tidak wajib, tapi membuat kode lebih rapi saat cabangnya banyak.

### Analogi: dapur dan resep

Satu gambar merangkum ketiganya. Bayangkan dapur dan resep. Variabel adalah stoples berlabel di rak: satu berlabel "gula", satu "telur", satu "jumlah tamu". Kamu menaruh isi di stoples dan memanggilnya lewat label. Tipe data adalah macam isi stoples: gula adalah bubuk, telur adalah butir, jumlah tamu adalah angka. Kamu memperlakukan bubuk dan angka secara berbeda, sama seperti program memperlakukan string dan number secara berbeda.

Kontrol aliran adalah resepnya. "Kalau oven sudah panas, masukkan adonan" adalah `if`. "Ulangi untuk tiap telur" adalah loop. "Kalau hari jumat, buat kue spesial" adalah `switch`. Resep menentukan urutan dan keputusan, sama seperti kontrol aliran menentukan urutan perintah program.

### Pasangan contoh

Contohnya program kecil yang menilai umur dan menghitung. Versi vanilla menulis variabel, `if`, dan loop langsung di file JavaScript. Versi React membungkus logika yang sama dalam komponen, dan variabelnya menjadi state yang bisa berubah saat halaman berinteraksi.

### Demo Hidup

Demo di bawah adalah taman bermain kecil. Kamu mengetik ekspresi JavaScript di kotak, menekan tombol, dan melihat hasil serta tipe datanya. Coba `let umur = 25; umur + 5`, lalu coba `if (10 > 5) { "ya" } else { "tidak" }`. Ekspresi adalah potongan kode yang menghasilkan nilai.

Ringkasan bab ini. JavaScript membuat halaman bertindak. Variabel menyimpan nilai, `let` untuk yang berubah dan `const` untuk yang tetap. Tipe data mengenal macam nilai: string, number, boolean, null, dan undefined. Kontrol aliran mengubah urutan perintah: `if` dan `else` untuk keputusan, `for` untuk pengulangan, `switch` untuk banyak cabang. Bab berikutnya membahas fungsi, array, dan objek.

## Pasangan contoh

- Vanilla: variabel `let` dan `const`, `if`/`else`, loop `for`, `console.log`.
- React: komponen dengan state `const`, `if`/`else` untuk render bersyarat.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: JavaScript first steps, variables, data types, if/else, for, switch.
- web.dev: learn JavaScript.
