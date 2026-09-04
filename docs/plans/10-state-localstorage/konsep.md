# Konsep Bab 10: State di Sisi Klien & localStorage

Kembali ke [overview](overview.md).

## Tujuan bab

Bab 9 membuat halaman bereaksi pada klik dan ketikan. Tetapi coba muat ulang halaman demo bab 9. Daftar tugas yang pengguna tambahkan lenyap, kembali ke dua item awal. Penyebabnya satu kalimat. Variabel hidup di ingatan halaman, dan ingatan itu dikosongkan setiap kali halaman dimuat ulang. Bab ini menutup lubang itu dengan dua konsep. Pertama state, istilah untuk data milik halaman yang berubah seiring waktu dan tampilan mengikutinya. Kedua localStorage, penyimpanan milik browser yang isinya bertahan melewati muat ulang, bahkan melewati browser yang dimatikan.

Dua pertanyaan yang dijawab bab ini, sesuai urutan wajib seri ini. Pertama, mengapa halaman butuh state dan tempat penyimpanan sendiri. Kedua, bagaimana keduanya bekerja di baliknya, dari bentuk key-value sampai cara mengubah objek menjadi string agar bisa disimpan.

## Isi

### Mengapa state ada

Setiap bab sejak bab 6 memakai variabel untuk menyimpan nilai, dan nilai itu biasanya diam. Padahal nilai yang penting pada halaman nyata justru yang berubah. Jumlah barang di keranjang naik dan turun. Tab yang terbuka pindah. Centang tugas berpindah dari belum ke selesai. Data yang berubah sepanjang halaman dipakai punya nama sendiri, state. State adalah data milik halaman yang nilainya boleh berubah, dan tampilan halaman menggambarkan state itu. Urutan kerjanya konsisten, ubah state dulu, lalu tampilan disesuaikan dengan state terbaru. Memisahkan data dari tampilan membuat perubahan jadi satu pekerjaan, karena ada satu sumber kebenaran yang diikuti seluruh halaman.

### Masalahnya, muat ulang menghapus ingatan

Variabel disimpan di ingatan halaman yang hidup selama halaman terbuka. Bayangkan meja kerja di kantor. Kertas di atas meja cepat dibaca dan cepat diubah, dan itu pas untuk pekerjaan hari itu. Muat ulang halaman berarti kantor tutup dan meja dibersihkan. Buka lagi, meja kosong, kertas hari itu tidak ada yang tersisa. Untuk hitungan sementara ini tidak masalah. Untuk daftar tugas, draf komentar, atau pilihan tema gelap, ini mematahkan harapan pengguna. Yang dibutuhkan adalah tempat penyimpanan di luar meja, yang tidak ikut dibersihkan.

### localStorage, lemari arsip browser

localStorage adalah penyimpanan yang disediakan browser untuk satu asal halaman. Asal halaman disebut origin, yaitu kombinasi skema, domain, dan port, contohnya `https://www.argakuka.com`. localStorage milik satu origin, halaman origin lain tidak bisa membacanya. Isinya bertahan melewati muat ulang dan melewati browser yang ditutup. Bentuk datanya key-value, satu label menunjuk satu nilai, seperti map arsip dengan labelnya. Nilainya selalu string, alias teks.

Empat metode yang dipakai:

```js
localStorage.setItem("kuka-tema", "gelap"); // simpan
localStorage.getItem("kuka-tema");          // "gelap"
localStorage.removeItem("kuka-tema");       // hapus satu label
localStorage.clear();                       // hapus semua milik origin ini
```

`getItem` mengembalikan `null` saat labelnya belum ada. `null` tadi jadi petunjuk untuk memakai nilai default.

### Menyimpan objek dengan JSON

Karena nilai hanya boleh string, array dan objek tidak bisa disimpan begitu saja. Jalan keluarnya JSON, JavaScript Object Notation, format teks yang meniru bentuk data JavaScript. `JSON.stringify` mengubah objek menjadi string, `JSON.parse` mengembalikannya menjadi objek.

```js
const tugas = [{ nama: "kopi", selesai: false }];
localStorage.setItem("kuka-tugas", JSON.stringify(tugas));
const kembali = JSON.parse(localStorage.getItem("kuka-tugas"));
kembali[0].selesai; // false
```

Lipatannya di lemari arsip. Map hanya menerima lembar datar, jadi dokumen berlapis dilipat dulu, itulah `stringify`, lalu dibuka lagi saat dikeluarkan, itulah `parse`. Satu catatan batas. Kalau isinya rusak dan bukan JSON yang sah, `JSON.parse` melempar error. Halaman pemula jarang mengurusi kasus itu, cukup tahu batasnya ada.

### Pola dua momen, baca saat buka dan tulis saat berubah

localStorage tidak mengurus tampilan, ia hanya menyimpan. Yang menyambungkan keduanya adalah pola dua momen. Saat halaman dibuka, baca localStorage untuk mengisi nilai awal. Saat nilainya berubah, tulis kembali. Contohnya draf komentar yang tersimpan otomatis saat diketik.

```js
input.value = localStorage.getItem("kuka-draf") || "";

input.addEventListener("input", function () {
  localStorage.setItem("kuka-draf", input.value);
});
```

Baris pertama adalah momen baca, halaman mulai dengan draf terakhir. Pendengar `input` adalah momen tulis, setiap ketikan ikut disalin ke lemari. Lupa momen baca, halaman selalu mulai dari kosong. Lupa momen tulis, perubahan tidak pernah sampai lemari.

### Batas localStorage

Batasnya perlu dikenali sejak awal. Isinya hanya string. Ukurannya terbatas, kira-kira lima MB per origin, cukup untuk teks, tidak untuk berkas besar. Membaca dan menulisnya sinkron, kode menunggu sampai selesai, dan untuk halaman kecil ini tidak terasa. Ia tidak punya tanggal kedaluwarsa, data bertahan sampai kode atau pengguna menghapusnya lewat pengaturan browser. Ada satu varian yang sering disebut bareng, sessionStorage. Cara pakainya sama, bedanya isinya hilang saat tab ditutup. Untuk bab ini, satu localStorage sudah cukup.

### Analogi, meja kerja dan lemari arsip

Satu gambar untuk semuanya. Sebuah kantor punya satu meja kerja dan satu lemari arsip. Kertas di meja adalah variabel dan state, cepat dibaca dan diubah selama kantor buka, dan hilang saat kantor tutup. Kantor tutup itulah muat ulang. Lemari arsip adalah localStorage. Ia milik kantor itu, sama seperti localStorage milik satu origin. Map berlabelnya adalah key, dan isinya lembar datar, sama seperti nilai yang harus string. Dokumen berlapis dilipat dulu sebelum masuk map, dan itulah JSON. Besok pagi kantor buka lagi, kertas di meja mulai dari kosong, tetapi lemari tetap berisi arsip kemarin. Karena itu keputusannya sederhana, yang penting disalin ke lemari, yang sementara dibiarkan di meja.

### Pasangan contoh

Contohnya tombol ganti tema terang dan gelap, pilihan yang wajar untuk disimpan. Versi vanilla menuliskan pola dua momen dengan tangan, baca sekali di awal, tulis di dalam pendengar klik. Versi React menyimpan tema di state dengan `useState`, membaca localStorage sebagai nilai awal lewat fungsi initializer, dan menulis kembali lewat `useEffect` setiap kali tema berubah.

### Demo Hidup

Demo di bawah adalah penghitung yang tersimpan. Satu tombol menambah angka, satu tombol mengembalikan ke nol, dan setiap perubahan ditulis ke localStorage. Satu baris menampilkan isi mentah yang tersimpan, supaya sifatnya terlihat dengan mata, termasuk `null` sebelum ada yang disimpan. Muat ulang halaman setelah menambah, angkanya tidak kembali ke nol.

Ringkasan bab ini. State adalah data yang berubah dan tampilan mengikutinya. Variabel hanya hidup selama halaman terbuka. localStorage menyimpan key-value per origin dan bertahan melewati muat ulang. Nilainya string saja, `JSON.stringify` dan `JSON.parse` mengurus objek dan array. Polanya dua momen, baca saat halaman dibuka, tulis saat nilai berubah. Bab berikutnya keluar dari data milik halaman sendiri, ke fetch dan async, cara halaman mengambil data dari server lain.

## Pasangan contoh

- Vanilla: `let tema` dibaca dari `localStorage.getItem` sekali di awal dengan default `"terang"`, klik tombol membalik nilainya, `document.body.className` mengikuti, lalu `setItem` menulisnya kembali.
- React: `useState` dengan fungsi initializer yang membaca localStorage satu kali, `useEffect` dengan daftar dependensi `[tema]` yang menulis ke localStorage setiap kali tema berubah, tombol dengan `onClick` yang membalik state.

## Perbedaan inti

Pola dua momen di vanilla dititipkan ke kedisiplinan penulis kode, ia menaruh sendiri baris bacanya dan baris tulisnya. React membakukan tempatnya. Momen baca masuk ke fungsi initializer `useState`, yang jalan satu kali saat komponen lahir. Momen tulis masuk ke `useEffect`, yang jalan setelah render ketika tema berubah. Menulis ke localStorage memang bukan mengubah tampilan, melainkan efek samping, dan wilayah efek samping di React memang `useEffect`. Seperti bab-bab sebelumnya, React tidak menghapus pekerjaan vanilla, hanya menaruhnya di slot yang sudah disediakan.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: Client-side storage.
- MDN: Window.localStorage.
- MDN: Window.sessionStorage.
- MDN: JSON.stringify.
- MDN: JSON.parse.
- web.dev: Learn JavaScript.
