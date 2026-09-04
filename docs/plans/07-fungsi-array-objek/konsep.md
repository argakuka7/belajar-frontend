# Konsep Bab 7: Fungsi, Array & Objek

Kembali ke [overview](overview.md).

## Tujuan bab

Bab 6 memperkenalkan variabel, tipe data, dan kontrol aliran. Bab ini menambah tiga alat yang membuat program lebih kuat: fungsi untuk memakai ulang perintah, array untuk menyimpan banyak nilai berurutan, dan objek untuk menyimpan nilai dengan label. Setelah bab ini, pembaca bisa menulis program yang mengolah kumpulan data, bukan hanya satu nilai.

Dua pertanyaan yang dijawab bab ini. Pertama, mengapa ketiganya ada: program yang hanya memakai variabel tunggal cepat jadi berulang dan kaku. Fungsi, array, dan objek membuat kode bisa dipakai ulang dan data bisa disusun. Kedua, bagaimana cara kerjanya di baliknya: fungsi membungkus perintah dan dipanggil lewat nama, array menyimpan nilai di posisi bernomor, objek menyimpan nilai di balik label.

## Isi

### Mengapa fungsi, array, dan objek

Bab 6 menulis program yang menangani satu nilai. Program sungguhan menangani banyak nilai, dan perintah yang sama sering dipakai berulang. Tanpa alat bantu, kode jadi panjang, berulang, dan sulit diubah. Fungsi, array, dan objek adalah tiga alat dasar untuk menyusun kode dan data. Fungsi memakai ulang perintah. Array menyimpan banyak nilai berurutan. Objek menyimpan nilai dengan label.

### Fungsi

Fungsi adalah perintah yang diberi nama dan bisa dipanggil kapan saja. Bayangkan kamu menulis langkah "hitung total harga" sekali, lalu memanggilnya setiap kali butuh. Fungsi membuat kode tidak perlu ditulis ulang.

Cara membuat fungsi ada dua: deklarasi dan arrow.

```js
function sapa(nama) {
  return "Halo, " + nama;
}

const sapaArrow = (nama) => "Halo, " + nama;
```

Deklarasi fungsi memakai kata `function` diikuti nama. Arrow memakai tanda `=>` dan disimpan dalam variabel. Keduanya menghasilkan fungsi yang sama. Arrow lebih ringkas dan dipakai luas di kode modern.

Fungsi menerima masukan lewat parameter. Parameter adalah nilai yang dimasukkan ke dalam kurung saat fungsi dipanggil. Fungsi mengembalikan hasil lewat `return`. `return` adalah perintah untuk menyerahkan nilai hasil ke pemanggil. Tanpa `return`, fungsi mengembalikan `undefined`.

```js
function tambah(a, b) {
  return a + b;
}
let hasil = tambah(2, 3); // hasil = 5
```

`tambah(2, 3)` memanggil fungsi dengan dua parameter, `a` dan `b`. Fungsi menjumlahkan dan mengembalikan 5. Nilai itu disimpan di variabel `hasil`.

### Array

Array adalah tempat menyimpan banyak nilai dalam satu variabel, berurutan. Tiap nilai menempati posisi yang disebut indeks. Indeks dimulai dari nol.

```js
let buah = ["apel", "mangga", "pisang"];
console.log(buah[0]); // apel
console.log(buah[2]); // pisang
```

`buah[0]` mengambil nilai di posisi pertama. Tanda kurung siku dengan angka memilih posisi. Ini disebut akses indeks.

Array bisa diubah. `push` menambah nilai di akhir, `pop` menghapus nilai di akhir.

```js
buah.push("durian");
console.log(buah); // ["apel", "mangga", "pisang", "durian"]
buah.pop();
console.log(buah); // ["apel", "mangga", "pisang"]
```

Dua metode yang paling berguna untuk mengolah array adalah `map` dan `filter`. Metode adalah fungsi yang menempel pada nilai. `map` membuat array baru dengan mengubah tiap nilai. `filter` membuat array baru yang hanya berisi nilai yang lolos syarat.

```js
let angka = [1, 2, 3, 4];
let duaKali = angka.map((n) => n * 2);
console.log(duaKali); // [2, 4, 6, 8]

let genap = angka.filter((n) => n % 2 === 0);
console.log(genap); // [2, 4]
```

`map` memanggil fungsi untuk tiap nilai dan mengumpulkan hasilnya. `filter` memanggil fungsi untuk tiap nilai dan hanya menyimpan yang mengembalikan `true`. Keduanya tidak mengubah array asli, melainkan membuat array baru.

### Objek

Objek menyimpan nilai di balik label. Label disebut kunci, nilai di baliknya disebut nilai. Objek cocok untuk data yang punya banyak bagian, seperti satu barang dengan nama, harga, dan stok.

```js
let barang = {
  nama: "kopi",
  harga: 25000,
  stok: 10
};
console.log(barang.nama); // kopi
console.log(barang["harga"]); // 25000
```

Dua cara mengambil nilai dari objek. Titik, `barang.nama`, memakai nama kunci langsung. Kurung siku, `barang["harga"]`, memakai string nama kunci. Titik lebih ringkas dan paling sering dipakai. Kurung siku berguna saat nama kunci disimpan dalam variabel.

```js
let kunci = "harga";
console.log(barang[kunci]); // 25000
```

### Analogi: toko kecil

Satu gambar merangkum ketiganya. Bayangkan kamu mengelola toko kecil. Fungsi adalah resep standar yang bisa dipanggil kapan saja, seperti cara menghitung total belanja. Kamu menulis resepnya sekali, lalu memanggilnya untuk tiap pelanggan. Array adalah rak berisi banyak barang berurutan. Tiap posisi rak bernomor, mulai dari nol, dan kamu mengambil barang dengan menyebut nomornya. Objek adalah kartu stok, satu kartu per barang, dengan label nama, harga, dan stok. Kamu membaca harga dengan mencari label "harga" di kartu.

### Pasangan contoh

Contohnya program yang mengolah daftar barang. Versi vanilla menulis fungsi, array, dan objek langsung di file JavaScript. Versi React membungkus logika yang sama dalam komponen, dan daftar barang menjadi state yang bisa berubah saat halaman berinteraksi.

### Demo Hidup

Demo di bawah mengolah array. Kamu mengetik angka, menekan tombol Tambah, dan melihat tiga hasil langsung: array asli, hasil `map` yang mengalikan tiap angka dengan dua, dan hasil `filter` yang hanya menyimpan bilangan genap. Ini memakai fungsi, array, dan objek sekaligus tanpa build tool.

Ringkasan bab ini. Fungsi membungkus perintah agar bisa dipakai ulang, dengan parameter untuk masukan dan `return` untuk hasil. Array menyimpan banyak nilai berurutan, diakses lewat indeks, diubah dengan `push` dan `pop`, diolah dengan `map` dan `filter`. Objek menyimpan nilai di balik label, diakses dengan titik atau kurung siku. Bab berikutnya membahas DOM, cara memilih dan mengubah halaman.

## Pasangan contoh

- Vanilla: fungsi deklarasi dan arrow, array dengan `push`, `map`, `filter`, objek dengan akses titik.
- React: komponen dengan state array, `map` untuk merender daftar, objek sebagai bentuk data.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: JavaScript functions, arrays, objects.
- web.dev: learn JavaScript.
