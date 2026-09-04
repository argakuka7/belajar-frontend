# Konsep Bab 19: Aksesibilitas (a11y)

Kembali ke [overview](overview.md).

## Tujuan bab

Delapan belas bab halaman selalu diuji dengan cara yang sama, mata melihat dan mouse mengklik. Tidak semua pembaca memakai dua cara itu. Bab ini mengajarkan aksesibilitas, disingkat a11y, supaya halaman yang dibangun pembaca tetap bisa dipakai semua orang.

Dua pertanyaan wajib seri ini dijawab dalam urutan itu. Pertama, mengapa aksesibilitas ada dan siapa yang terbantu. Kedua, bagaimana cara kerjanya di baliknya, dari HTML semantik, keyboard dan fokus, alt text, kontras, sampai ARIA.

## Isi

### Mengapa aksesibilitas ada

Aksesibilitas adalah sifat halaman yang bisa dipakai semua orang, termasuk orang dengan disabilitas. a11y adalah singkatan yang dipakai di dunia web: huruf a, sebelas huruf di tengah, lalu huruf y. Angkanya bukan kategori kecil, WHO memperkirakan sekitar 1,3 miliar orang, sekitar satu dari enam manusia, hidup dengan disabilitas yang berarti.

Yang terbantu bukan cuma satu kelompok. Orang buta warna sulit membedakan pesan kesalahan yang hanya ditandai warna merah. Pengguna dengan gangguan motorik mungkin tidak bisa mengklik tombol kecil, tapi lancar memakai keyboard. Pengguna tua butuh teks lebih besar dan kontras lebih jelas. Dan aksesibilitas menolong semua orang di saat tertentu, subtitle di kereta yang bising, keyboard saat mouse rusak, alt text saat gambar gagal dimuat.

Halaman yang tidak aksesibel menolak pembaca tanpa pernah mengatakannya. Bedanya dengan halaman yang aksesibel sering bukan fitur tambahan, tetapi pilihan elemen yang lebih benar sejak awal.

### Bagaimana halaman dibaca tanpa mata

Alat yang paling sering mewakili pengguna disabilitas disebut teknologi bantu, perangkat lunak atau alat yang membantu orang memakai komputer. Contohnya pembaca layar, perangkat lunak yang membacakan isi layar dengan suara, dan papan keyboard yang diperbesar.

Pembaca layar tidak melihat tampilan. Ia membaca pohon DOM, struktur objek yang dibangun browser dari HTML sebagaimana dibahas bab 8. Lewat DOM itulah ia tahu mana judul, mana tombol, mana daftar, dan urutan bacanya mengikuti urutan elemen di HTML. Karena itu halaman dengan HTML rapi sudah setengah aksesibel, dan halaman dengan tumpukan div tanpa makna terdengar seperti kalimat tanpa tanda baca.

### HTML semantik adalah fondasi

Bab 2 memperkenalkan elemen semantik, elemen yang membawa makna, bukan sekadar kotak. Ini adalah fondasi aksesibilitas yang paling murah. Elemen `button` lahir dengan tiga kemampuan sekaligus: bisa menerima fokus, bisa ditekan dengan Enter dan Spasi, dan diumumkan pembaca layar sebagai tombol. Elemen `div` dengan pendengar klik hanya bisa satu hal, diklik mouse.

Aturan pertamanya sederhana. Sebelum menambah apa pun, pilih elemen HTML yang benar. `label` untuk mengisi nama input, `nav` untuk navigasi, `button` untuk aksi, `img` dengan `alt` untuk gambar. Bagian besar pekerjaan aksesibilitas selesai sebelum JavaScript menyentuh apa pun.

### Keyboard harus selalu jalan

Uji tercepat sebuah halaman aksesibel: cabut mouse, lalu coba pakai halamannya dengan Tab. Saat berpindah dengan Tab, satu elemen ditandai dengan kotak atau cincin. Tanda itu disebut fokus, penanda letak aksi keyboard berikutnya akan mendarat. Urutan berpindahnya mengikuti urutan elemen di HTML, jadi HTML yang tertata logis menghasilkan urutan keyboard yang logis.

Kebiasaan yang merusak ini biasanya kecil. Outline fokus yang dihapus karena dianggap mengganggu, tombol tiruan dari div, atau urutan elemen yang dibalik lewat CSS. Kalau suatu elemen bukan elemen bawaan yang bisa difokus, atribut `tabindex="0"` bisa memasukkannya ke urutan Tab, tetapi kalau solusinya butuh tabindex, biasanya elemennya salah dari awal.

### Alt text dan kontras

Dua hal kecil yang sering terlewat. Pertama alt text, isi atribut `alt` yang menjelaskan gambar dalam teks untuk yang tidak bisa melihatnya. Kalimatnya pendek dan menjelaskan fungsi gambar, misalnya "grafik konsumsi kopi naik dua kali lipat". Gambar dekoratif yang tidak membawa informasi diberi `alt=""` kosong agar dilewati pembaca layar, bukan dibacakan sebagai "gambar".

Kedua kontras, ukuran perbedaan terang antara warna teks dan warna latarnya. Teks abu muda di atas putih sering tidak terbaca bagi pengguna dengan penglihatan rendah. Standar dunia untuk ini bernama WCAG, Web Content Accessibility Guidelines, kumpulan pedoman aksesibilitas web yang jadi rujukan hukum di banyak negara. WCAG menetapkan rasio kontras minimal untuk teks, dan DevTools browser punya pemeriksa kontras bawaan untuk mengujinya.

### ARIA, tambahan bukan pengganti

Ada keadaan saat HTML baku tidak cukup menjelaskan. Tombol yang membuka dan menutup bagian halaman, misalnya, sebaiknya mengumumkan keadaannya, terbuka atau tertutup. Untuk ini ada ARIA, Accessible Rich Internet Applications, kumpulan atribut yang menambahkan makna ke elemen. Atribut `aria-expanded="true"` pada tombol memberi tahu pembaca layar bahwa tombol itu membuka bagian lain yang sedang terbuka.

Aturan pakainya jelas, ARIA adalah jalan terakhir. Elemen HTML yang benar mengalahkan elemen salah yang diberi ARIA. ARIA di elemen yang salah bahkan bisa menipu, seperti papan petunjuk yang dipasang di tembok mati.

### Analogi: tangga dan ram

Satu gambar untuk semuanya. Gedung yang hanya punya tangga menolak pengguna kursi roda. Gedung dengan ram, jalan landai di sisi tangga, menerima semua orang, termasuk tamu yang bawa koper dan orang yang dorong kereta bayi. Itulah aksesibilitas web. HTML semantik adalah pintu lebar yang sudah baku di gedungnya. Keyboard dan fokus adalah ramnya, jalan masuk tanpa tangga. Alt text dan kontras adalah pencahayaan dan label ruangannya. ARIA adalah papan petunjuk tambahan, dipasang hanya kalau pintu baku tidak menjelaskan apa pun. Dan papan petunjuk di tembok mati, ARIA di elemen yang salah, hanya menambah kebingungan.

### Pasangan contoh

Contohnya tombol buka tutup daftar belanja. Tombol yang benar memakai elemen `button`, atribut `aria-expanded`, dan daftarnya disembunyikan dengan `hidden`. Vanilanya menyimpan dua elemen di variabel, pendengar klik membalik `hidden` lewat properti `hidden`, lalu menulis ulang `aria-expanded` dan teks tombol. React-nya menyimpan keadaan `terbuka` di state, atribut `aria-expanded` dan isi tombol ditulis dari state yang sama, dan daftar hanya muncul saat `terbuka` benar.

Perbedaan inti bab ini ada di sini. Aksesibilitas tidak berpindah antara stack, sebutan untuk pasangan teknologi yang dipakai, di sini vanilla atau React. Kedua versi memakai elemen dan atribut yang sama persis, `button` dan `aria-expanded`. Yang berganti hanya cara nilainya diperbarui, perintah DOM langsung di vanilla, state yang menurunkan atribut di React. Prinsip yang dipelajari sekali, dipakai di dua dunia.

### Demo Hidup

Demo memasang tombol buka tutup yang sama dengan pasangan contoh, vanilla JavaScript tanpa build tool. Tekan tombolnya dengan mouse, daftar muncul. Tekan Tab sampai tombolnya mendapat cincin fokus, lalu tekan Enter atau Spasi, perilakunya sama. Buka DevTools dan lihat atribut `aria-expanded` berpindah antara false dan true di elemen tombol setiap kali ditekan.

Ringkasan bab ini. Aksesibilitas berarti halaman bisa dipakai semua orang, dan teknologi bantu membacanya lewat pohon DOM. Fondasinya HTML semantik, diteruskan dengan keyboard dan fokus, alt text, kontras, lalu ARIA sebagai tambahan terakhir. Bab berikutnya kembali ke tampilan, styling modern dengan variabel dan design token.

## Pasangan contoh

- Vanilla: elemen `button` dengan `aria-expanded`, daftar `hidden`, satu `addEventListener` yang membalik keadaan lewat properti `hidden` dan `setAttribute`.
- React: state `terbuka` lewat `React.useState(false)`, `aria-expanded={terbuka}`, teks tombol dari state, daftar dirender bersyarat, ditulis dengan JSX.

## Perbedaan inti

Aksesibilitas tidak berpindah antara stack. Elemen dan atributnya sama di kedua kolom, `button` dan `aria-expanded`. Yang berganti hanya cara nilainya diperbarui, perintah DOM langsung di vanilla, state yang menurunkan atribut di React. Prinsip yang dipelajari sekali, dipakai di dua dunia.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: Accessibility overview.
- MDN: HTML, a good basis for accessibility.
- web.dev: Learn Accessibility.
- MDN: ARIA.
- MDN: Images in HTML (alt attribute).
