# Konsep Bab 20: Styling Modern: Variabel & Design Token

Kembali ke [overview](overview.md).

## Tujuan bab

Bab 3 mengajarkan menulis CSS dengan nilai langsung: warna ditulis penuh, ukuran ditulis angka. Semua bab sejak itu memakai cara yang sama. Cara ini benar, dan halaman kecil tidak keberatan. Bab ini menjawab pertanyaan yang pasti muncul saat halaman tumbuh: bagaimana cara modern mengelola nilai tampilan agar tidak ditulis berkali-kali, dan apa itu design token.

Dua pertanyaan wajib seri ini dijawab dalam urutan itu. Pertama, mengapa nilai yang sama yang ditulis di banyak tempat jadi masalah. Kedua, bagaimana cara kerjanya di baliknya: variabel CSS sebagai wadah bernama, warisan nilai dari elemen induk ke anak, penulisan ulang nilai per cabang, dan design token sebagai keputusan tampilan yang diberi nama.

## Isi

### Mengapa styling modern dibutuhkan

Styling modern bukan gaya baru yang wajib ikut. Ia jawaban untuk satu masalah tua: nilai tampilan yang sama hidup di banyak tempat. Warna aksen situs ini, oranye, dipakai di link, di tepi kotak demo, di tombol. Di bab 3 semuanya ditulis langsung, misalnya `#e68a3c`, berulang di setiap aturan yang membutuhkannya.

Bebannya baru terasa saat nilai diganti. Satu warna di sepuluh tempat berarti sepuluh tempat pencarian dan penggantian. Satu terlewat, halaman tampil dua warna. Ukuran dan jarak mengalami nasib yang sama. Yang hilang bukan cuma tenaga, tetapi kepastian: tidak ada satu tempat yang bisa ditanya, ini warna resmi situs ini.

### Variabel CSS: nilai yang diberi nama

CSS punya jawaban bawaan untuk itu: variabel. Variabel adalah wadah bernama untuk satu nilai. Di CSS ia disebut custom property atau properti kustom, karena penulisannya meniru properti biasa, hanya diawali dua tanda minus.

Nilainya biasanya ditaruh di selektor `:root`, selektor yang menunjuk elemen paling atas halaman, yaitu `html`. Cara membacanya lewat fungsi `var()`, yang mengambil isi variabel dan menaruhnya di tempat fungsi itu ditulis.

```css
:root {
  --aksen: #e68a3c;
}
.tombol {
  background: var(--aksen);
}
```

Ganti isi `--aksen` satu baris, semua aturan yang membacanya ikut berubah. Warna resmi situs kini punya satu tempat yang bisa ditanya.

### Cara kerjanya di balik var

Tiga hal bekerja di baliknya.

Pertama, warisan. Nilai yang ditaruh di `:root` diturunkan ke semua elemen di bawahnya, sama seperti properti `color` dan `font-family`. Elemen membaca variabel dari induknya kalau ia tidak mendefinisikan sendiri. Itu sebabnya nilai di `:root` terasa global.

Kedua, penulisan ulang per cabang. Nilai boleh ditimpa di elemen mana pun, dan semua keturunan elemen itu membaca nilai barunya, sisanya tidak tersentuh. Satu kartu boleh punya aksen biru di halaman beraksen oranye. Kemampuan inilah yang nanti dipakai untuk tema.

Ketiga, variabel bisa diisi dari JavaScript lewat `element.style.setProperty("--aksen", "#2563eb")`, dan bisa diberi nilai cadangan lewat `var(--aksen, orange)` yang dipakai kalau variabelnya tidak terdaftar.

Bukti bahwa cara ini dipakai sungguhan ada di halaman yang sedang dibaca. Berkas `enhancements.css` situs ini membuka dirinya dengan `:root` yang berisi `--fg`, `--bg`, `--accent`, dan `--muted`, lalu seluruh halaman membaca nilai itu.

### Design token: keputusan yang diberi nama

Nama besar di industri untuk kebiasaan ini adalah design token. Token adalah pasangan nama dan nilai yang mewakili satu keputusan tampilan: warna aksen, jarak antar bagian, sudut melengkung kartu. Variabel CSS adalah salah satu tempat token hidup; di proyek besar, token dikelola di satu sumber lalu diterbitkan menjadi CSS untuk web dan berkas lain untuk platform berbeda. Kumpulan keputusan tampilan yang dibakukan seperti ini disebut design system, dan tokennya kosakatanya.

Untuk level buku ini, token adalah variabel dengan disiplin. Disiplinnya satu aturan: nama menyebut peran, bukan nilai. `--aksen` baik, `--oranye` buruk, karena begitu warna diganti jadi biru, nama `--oranye` berbohong ke semua yang membacanya.

### Tema gelap tanpa menulis ulang aturan

Gabungan warisan dan penulisan ulang menghasilkan trik yang dipakai hampir semua situs modern: tema. Cukup satu penanda di elemen `html`, lalu satu blok CSS yang menulis ulang variabelnya. Tidak ada satu aturan kartu atau tombol pun yang disentuh.

```css
:root { --bg: #fafafb; --fg: #1a1a2e; }
[data-tema="gelap"] { --bg: #16213e; --fg: #e8e8f0; }
body { background: var(--bg); color: var(--fg); }
```

Pemicu penanda itu bisa tombol, bisa juga sistem pembaca. Media query `prefers-color-scheme`, yang sudah dikenal di bab 5 sebagai media query yang membaca pilihan tema perangkat, bisa memasang tema gelap otomatis. Dan seperti dibahas bab 19, mode gelap bukan cuma selera: kontras teks terhadap latarnya adalah urusan aksesibilitas, jadi tema gelap yang benar tetap diukur, bukan ditebak.

### Batas variabel CSS

Jujur soal batasnya. `var()` tidak bisa mengisi kondisi media query, angka di dalam `@media (min-width: ...)` harus ditulis langsung. Token juga hanya berguna kalau penamaannya dijaga; proyek besar menuliskan aturan namanya, misalnya awalan `--warna-` dan `--jarak-`, karena token yang berantakan sama ribetnya dengan nilai yang tersebar. Halaman satu berkas mungkin memang belum butuh semua ini.

### Analogi: toples berlabel

Satu gambar untuk semuanya. Dapur dengan toples berlabel. Resep di dapur itu tidak pernah menulis "pasir putih dari rak ketiga", resep menulis "ambil dua sdm dari toples gula". Ganti isi toples sekali, semua resep yang menyebutnya ikut rasa barunya. Variabel adalah toplesnya. Token adalah kebiasaan memberi label sesuai isinya, bukan sesuai mereknya. Mode gelap adalah mengganti isi semua toples saat makan malam, tanpa menulis ulang satu resep pun.

### Pasangan contoh

Contohnya kartu promo dengan warna aksen yang bisa diganti satu tombol. Vanilanya memilih elemen kartu, lalu tombol memanggil `setProperty` untuk menulis `--aksen` baru di elemen itu. React-nya menyimpan pilihan tema di state, dan atribut `style` berisi variabel itu ditulis ulang setiap render. Ujungnya sama: satu variabel di elemen, aturan CSS yang membacanya, tampilan yang mengikuti.

### Demo Hidup

Demo memakai kode halaman ini sendiri. Kotak demo punya lima variabel miliknya, dari latar sampai warna kartu. Dua tombol mengganti atribut `data-tema` di kotak itu, satu blok CSS menulis ulang variabelnya, dan seluruh isi kotak ikut berubah. Baris status menunjukkan atribut yang sedang terpasang di DOM, supaya pembaca melihat bahwa yang berubah hanya penanda, bukan aturan.

Ringkasan bab ini. Nilai yang sama di banyak tempat adalah utang yang ditagih saat penggantian. Variabel CSS memberi nama pada nilai, warisan menyebarkannya, dan penulisan ulang per cabang membuka jalan tema. Design token adalah disiplin penamaannya. Bab berikutnya memakai halaman yang sudah rapi ini untuk mengukur yang lain: performa.

## Pasangan contoh

- Vanilla: elemen `.kartu` dengan `--aksen` bawaan, satu tombol memanggil `kartu.style.setProperty("--aksen", nilaiBaru)` untuk menukar warna.
- React: state `tema`, nilai variabel dihitung dari state, diturunkan lewat atribut `style={{ "--aksen": warna }}` pada elemen kartu.

## Perbedaan inti

Vanilla menulis nilai variabel ke elemen dengan tangan, satu panggilan `setProperty` per perubahan. React menyimpan nilai di state dan menulis ulang atribut `style` saat render, penulisnya tidak pernah menyentuh `setProperty`. Ujung keduanya identik, satu custom property di elemen dan aturan CSS yang membacanya. Bedanya ada di siapa yang mengurus penulisan ulang, tangan sendiri atau mesin render, pola yang sama dengan bab 14.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: Using CSS custom properties.
- MDN: var().
- MDN: :root.
- web.dev: Learn Design, design tokens.
- MDN: prefers-color-scheme.
