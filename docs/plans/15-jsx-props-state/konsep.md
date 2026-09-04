# Konsep Bab 15: React: JSX, Props & State

Kembali ke [overview](overview.md).

## Tujuan bab

Bab 14 menjelaskan mengapa framework ada. Ringkasnya, React mengizinkan penulis kode mendeklarasikan bentuk halaman dari data, dan React yang mengurus DOM. Bab ini membuka tiga peralatan yang dipakai semua bab React sesudahnya. JSX, cara menulis bentuk tampilan yang mirip HTML di dalam JavaScript. Props, data yang dikirim komponen induk ke anakannya dan hanya dibaca. State, ingatan milik satu komponen yang diganti lewat `useState`, dan pergantian itulah yang memicu render ulang.

Dua pertanyaan yang dijawab bab ini, sesuai urutan wajib seri ini. Pertama, mengapa JSX ada dan mengapa props dan state dipisah jadi dua hal. Kedua, bagaimana ketiganya bekerja di baliknya, dari kompilasi JSX sampai render ulang yang dijadwalkan oleh `setState`.

## Isi

### Mengapa JSX ada

Bab 12 memperlihatkan merender dengan tangan itu panjang. Satu baris data butuh `createElement`, `textContent`, `appendChild`. Tiga panggilan untuk satu elemen, dan pembacanya harus membaca urutan perintah dulu sebelum paham bentuk akhirnya. React menawarkan jalan lain. Di dalam komponen, fungsi yang mengembalikan bentuk tampilan, kita menulis bentuk halaman itu seperti HTML. Cara menulis ini disebut JSX, JavaScript XML, sintaksis yang mirip HTML tapi hidup di dalam kode JavaScript. JSX bukan HTML sungguhan. Ia gula mata: bentuknya familiar, isinya JavaScript.

### Bagaimana JSX bekerja

Browser tidak pernah mengerti JSX. JSX bukan JavaScript yang sah. Sebelum sampai ke browser, JSX dikompilasi, diubah oleh program lain menjadi panggilan fungsi biasa. Compiler seperti Babel, esbuild, atau SWC mengerjakan ini di proyek sungguhan. Padanannya sederhana:

```jsx
<li>{tugas.judul}</li>
```

```js
React.createElement("li", null, tugas.judul);
```

Jadi setiap kali menulis JSX, yang sebenarnya dieksekusi adalah fungsi `createElement`. Melihat padanan ini membuat aturan JSX masuk akal, bukan hafalan. Satu `return` wajib membungkus satu induk, karena `createElement` mengembalikan satu nilai. `class` menjadi `className`, karena `class` adalah kata tercadang JavaScript. Nilai JavaScript masuk lewat kurung kurawal `{}`, sehingga kondisi bab 12 ikut muat, `{tugas.length === 0 && <p>Belum ada tugas.</p>}`. Tag tunggal ditutup sendiri, `<img />` dan `<input />`, seperti XML.

### Props: data yang mengalir turun

Komponen adalah fungsi biasa, dan fungsi menerima argumen. Argumen komponen bernama props, properti yang dikirim induknya lewat atribut pada tag komponen. `<Baris nama="es teh" jumlah={2} />` sama artinya dengan memanggil fungsi `Baris` dengan objek `{ nama: "es teh", jumlah: 2 }`. Anak memakai props untuk menampilkan sesuatu. Aturannya satu, dibaca saja. Anak tidak mengubah props miliknya, karena data itu milik induk. Semuanya mengalir satu arah, dari atas ke bawah. Kalau anak ingin data berubah, ia tidak mencoret kartunya sendiri, ia minta induk lewat fungsi yang induk kirim sebagai props.

### State: ingatan yang memicu render ulang

Di sinilah masalah muncul. Komponen React adalah fungsi yang dijalankan berulang-ulang, dan variabel lokal fungsi mati setiap fungsi selesai, seperti diajarkan bab 7. Padahal tampilan butuh ingatan, isi keranjang, jumlah pesanan, teks kotak pencarian. React menyimpan ingatan itu sendiri, di luar fungsi komponen, lalu menyambungkannya lewat hook bernama `useState`. Hook, fungsi khusus React yang hanya boleh dipanggil di dalam komponen.

```jsx
const [hitung, setHitung] = React.useState(0);
```

`useState(0)` memberi dua barang sekaligus. `hitung`, isi ingatan sekarang. `setHitung`, satu-satunya pintu untuk menggantinya. Memanggil `setHitung(1)` melakukan dua hal. Mengganti isi ingatan, lalu menjadwalkan render ulang, React menjalankan fungsi komponen lagi dari atas, dan kali ini fungsi membaca nilai baru. Di sinilah perbedaan inti dengan vanilla. Di vanilla, mengganti variabel tidak mengubah apa pun di layar sampai kita memanggil `render()` dengan tangan. Di React, panggilan itu otomatis, dipicu oleh `setHitung`. Bab 12 sudah menyebut React membandingkan hasil render baru dengan halaman lama dan menyentuh DOM hanya di bagian yang berubah. Bab ini menunjukkan pemicunya, panggilan `setState`.

### Analogi: dapur restoran

Satu gambar untuk semuanya. Di dapur restoran ada kartu resep penyajian, ditulis sekali, bentuknya tetap, dengan lubang isian untuk nama menu dan catatan. Itu JSX, cetakan bentuk tampilan. Di rel dapur terselip kartu pesanan dari pelanggan, isinya dari luar dapur, koki hanya membaca dan tidak boleh mencoretnya. Itu props, data yang mengalir turun dan dibaca saja. Di dinding dapur ada papan catatan milik koki, "es teh tinggal 2 porsi". Saat koki mengganti catatan itu menjadi tinggal 1, ia menyajikan ulang meja sesuai catatan terbaru. Itu state, ingatan internal yang setiap kali diganti memicu pekerjaan ulang. Koki tidak menghafal tiga istilah ini, ia memakai tiga benda yang masing-masing punya aturan main.

### Pasangan contoh

Contohnya kedai sederhana. Tiga tombol menu, nasi goreng, es teh, bakso. Tiap klik menambah satu pesanan, daftar di bawah menunjukkan jumlah per menu. Versi vanilla menyimpan hitungan di objek, memasang `addEventListener` bab 9, lalu memanggil `render()` dengan tangan setiap klik. Versi React menyimpan hitungan di `useState`, dan induk `Kedai` mengirim `nama` dan `jumlah` sebagai props ke komponen anak `Baris` lewat `map` dengan `key` bab 12.

### Demo Hidup

Demo halaman ini menyalin kedai yang sama dan benar-benar jalan. Satu rintangan teknis, browser tidak bisa mengeksekusi JSX mentah, dan halaman ini tanpa build tool sesuai ADR-0003. Jadi demo memuat React lewat import map dari CDN ESM, lalu memakai jembatan bernama `htm`, yang bentuknya mirip JSX tapi ditulis di dalam template literal bab 12. Naskah menjelaskan bahwa yang dibaca `htm` dan yang dibaca compiler JSX berakhir di panggilan `createElement` yang sama. Kegagalan memuat CDN menampilkan pesan di kotak demo, karena demo React butuh koneksi internet, beda dengan demo bab sebelumnya yang offline.

Ringkasan bab ini. JSX adalah cara menulis bentuk tampilan yang mirip HTML di dalam JavaScript, dan ia dikompilasi menjadi panggilan `createElement` sebelum browser melihatnya. Props adalah data yang dikirim induk ke anak lewat atribut, dibaca saja, mengalir satu arah. State adalah ingatan milik komponen yang dipegang React, diganti lewat fungsi `setState` dari `useState`, dan tiap pergantian menjadwalkan render ulang. Bab berikutnya memakai ketiganya untuk menjalankan efek dan mengambil data dari server.

## Pasangan contoh

- Vanilla: objek `hitung`, `addEventListener` pada tiap tombol menambah hitungan lalu memanggil `render()` dengan tangan, `render` mengosongkan `ul` dengan `replaceChildren` dan mengisi `li` lewat `createElement` dan `textContent`.
- React: komponen `Kedai` memegang `useState({})`, fungsi `tambah` memanggil `setHitung` dengan objek baru, `map` merender tombol dan memanggil komponen `Baris` dengan props `nama` dan `jumlah`, tiap `Baris` membaca `props.nama` dan `props.jumlah`.

## Perbedaan inti

Kedua versi menghasilkan halaman yang sama, dan perbedaannya ada di satu pertanyaan, siapa yang memanggil render ulang. Versi vanilla mengganti objek `hitung` lalu harus ingat memanggil `render()` sendiri, lupa panggilan itu, layar tertinggal. Versi React mengganti hitungan lewat `setHitung`, dan render ulang dijadwalkan otomatis, fungsi `Kedai` dijalankan lagi dari atas dengan nilai baru. Props ikut kerja di sini, data tidak tersebar di variabel lepas, tetapi mengalir turun dari induk ke tiap `Baris`, sehingga sumber kebenaran cuma satu, state milik `Kedai`. Di vanilla, pembagian tugas itu dibuat sendiri dengan disiplin. Di React, kerangka yang memaksa.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- react.dev: Describing the UI (JSX).
- react.dev: Passing Props to a Component.
- react.dev: State as a Snapshot.
- MDN: Template literals.
- web.dev: Learn JavaScript.
