# Konsep Bab 22: Testing Front End

Kembali ke [overview](overview.md).

## Tujuan bab

Semua bab sebelumnya membangun halaman yang bisa dipercaya saat selesai. Bab ini menjawab pertanyaan yang muncul tepat setelah itu: bagaimana menjaga kepercayaan itu saat halaman terus berubah. Satu perbaikan kecil bisa merusak bagian lain tanpa terlihat, dan memeriksa semuanya dengan tangan tidak mungkin.

Dua pertanyaan wajib seri ini dijawab dalam urutan itu. Pertama, mengapa pemeriksaan manual berhenti cukup saat halaman tumbuh. Kedua, bagaimana test bekerja di baliknya, dari perbandingan harapan dan hasil sampai test runner dan Testing Library.

## Isi

### Mengapa halaman perlu diuji

Kamu sebenarnya sudah menguji sejak bab 0. Halaman dibuka, tombol ditekan, form diisi, hasilnya dilihat. Itu testing manual, menguji dengan tangan dan mata. Cara ini jalan, dan bab-bab sebelumnya memakainya.

Masalahnya muncul saat halaman tumbuh. Halaman dengan dua puluh fitur tidak bisa diperiksa semuanya setiap kali ada perubahan, waktunya tidak cukup. Pemeriksaan akhirnya dipangkas, dan bagian yang terlewat rusak diam-diam. Rusaknya baru terasa saat pembaca menemukannya, bukan saat kamu.

Testing front end adalah jawabannya. Pemeriksaan yang tadinya dijalankan dengan tangan ditulis jadi kode, disebut test. Komputer yang menjalankannya, berulang-ulang, dengan urutan dan hasil yang sama setiap kali. Test adalah kode yang memeriksa kode.

### Test paling sederhana: membandingkan harapan dan hasil

Bentuk dasar semua test satu kalimat, kalau inputnya ini, hasilnya harus itu. Fungsi normalkanEmail menerima "  A@B.COM ", harapannya "a@b.com". Kalau hasil fungsi sama dengan harapan, test lolos (pass). Kalau beda, test gagal (fail).

Pernyataan hasilnya harus sama dengan ini disebut assertion. Test yang menguji satu bagian kecil secara terpisah, satu fungsi misalnya, disebut unit test. Fungsi yang paling mudah diuji adalah fungsi murni, yang hasilnya hanya bergantung pada input dan tidak menyentuh halaman. Validasi form di bab 13 punya bentuk seperti itu, jadi dia titik mulai yang baik.

### Regresi, bug lama yang kambuh

Ada pola rusak yang paling sering di halaman. Satu bug diperbaiki, lama-lama hilang, lalu beberapa perubahan kemudian muncul lagi. Perbaikan di form memecah daftar, pembenahan tombol merusak total keranjang. Pola ini disebut regresi, bug yang sudah pernah diperbaiki tapi kembali karena perubahan lain.

Test adalah jaring pengamannya. Kebiasaannya sederhana, setiap bug yang ditemukan ditulis jadi satu test yang menegaskan perbaikannya. Test lama tidak pernah dibuang, semuanya dijalankan setiap ada perubahan. Kalau perubahan baru membangunkan bug lama, test berubah merah beberapa detik setelah disimpan, bukan pembaca yang menemukannya dua minggu kemudian.

### Tiga lapis pengujian

Halaman bisa diuji dari tiga ketinggian. Unit test menguji satu bagian kecil secara terpisah, satu fungsi normalisasi email, satu penghitung. Cepat, murah, jumlahnya bisa banyak. Integration test menguji beberapa bagian yang bekerja sama, misalnya form, validasi, dan pesan errornya. End-to-end test, sering disingkat e2e, menguji halaman dari luar seperti pengguna, browser sungguhan membuka halaman, mengisi form, menekan tombol, lalu hasil akhirnya dicek.

Semakin ke atas, test makin mirip pengguna, tapi makin lambat dan makin mahal dirawat. Porsi yang lazim menyerupai piramida, unit banyak di dasar, e2e sedikit di puncak. Karena itu bab ini fokus ke lapisan bawah, yang bisa dijalankan tanpa alat tambahan.

### Di balik test runner

Test yang dijalankan komputer butuh pemandunya. Test runner adalah program yang mencari semua berkas test, menjalankan tiap test satu per satu, menghitung yang lolos dan gagal, lalu meringkasnya dalam satu baris. Vitest dan Jest adalah test runner yang umum di proyek front end, dan keduanya jalan di Node, JavaScript di luar browser.

Mesinnya sebenarnya sederhana, daftar test, satu loop yang menjalankan, penghitung hasil. Demo di bawah membangun versi mini dari mesin itu langsung di halaman, puluhan baris, supaya mesinnya terlihat, bukan tersembunyi di alat pemasangan.

### Menguji komponen React

Komponen React adalah fungsi, sudah ditemu di bab 14, jadi dia bisa diuji juga. Pertanyaannya, apa yang ditegaskan. Yang paling tahan lama bukan isi state atau nama variabel, tapi apa yang pengguna lihat dan bisa lakukan, teks yang muncul, tombol yang jalan, pesan yang tampil.

Testing Library, pasangan umum React untuk pengujian, dibangun di prinsip itu. Dia merender komponen lalu mencari elemen cara pengguna mencarinya, lewat teks dan peran elemen, bukan lewat detail internal komponen. render memasang komponen di halaman, getByRole dan getByText mencari elemen, fireEvent meniru ketikan dan klik, expect menyatakan harapan. Peran elemen, role, sudah lewat di bab aksesibilitas. Kode ini jalan di test runner dengan lingkungan DOM tiruan, bukan di halaman publik, jadi di pasangan contoh ia ditampilkan, bukan dijalankan.

### Analogi: bengkel mobil

Halamanmu adalah mobil. Unit test adalah mekanik yang mengecek satu komponen di bangku kerja, aki dicek satu, lampu dicek satu, cepat dan pasti. Integration test adalah merakit beberapa komponen jadi satu set lalu menyalanya, mesin dan transmisi harus cocok. End-to-end adalah uji jalan di jalan raya, mobil utuh dikendarai seperti pembeli. Regresi adalah kerusakan lama yang kambuh. Bengkel menjaganya dengan buku riwayat, setiap servis semua pemeriksaan lama diulang dari daftar, supaya yang pernah rusak tidak lolos lagi. Test suite, kumpulan semua testmu, adalah buku riwayat itu.

### Pasangan contoh

- Vanilla: fungsi murni `normalkanEmail` sama dengan di demo, plus fungsi `asersi` yang membandingkan hasil dengan harapan, dan tiga pemanggilan langsung yang mencatat PASS atau FAIL ke console.
- React: komponen `FormEmail` kecil diuji dengan Testing Library, render, cari kotak input lewat peran, fireEvent.change untuk mengetik email berantakan, expect teks hasil bersihnya muncul di layar. Test tidak membuka state React sama sekali, ia melihat halaman seperti pengguna.

### Demo Hidup

Demo adalah test runner mini yang jalan tanpa alat apa pun. Tombol Jalankan tes menjalankan tiga test untuk normalkanEmail, semuanya hijau. Tombol Rusak fungsi, tes ulang sengaja merusak fungsi (pemangkasan spasi dibuang), dua test berubah merah dan ringkasan turun jadi 1 dari 3. Tombol yang sama memperbaiki kembali. Itu regresi tertangkap oleh test, bukan oleh pembaca.

Ringkasan bab ini. Testing front end memindahkan pemeriksaan manual jadi test, kode yang membandingkan harapan dengan hasil. Unit test menguji fungsi kecil, integration test menguji bagian yang bekerja sama, end-to-end menguji halaman utuh seperti pengguna, dan semuanya dijalankan oleh test runner. Regresi ditahan dengan kebiasaan sederhana, bug yang ditemukan jadi test yang tetap dijalankan. Bab berikutnya menjaga halaman tetap hidup tanpa jaringan: caching, PWA, dan offline.

## Perbedaan inti

Di vanilla, pemeriksaan ditulis dari bahan paling dasar, nilai yang diharapkan dan satu fungsi pembanding. Testing Library mengangkat levelnya, yang ditegaskan bukan nilai balik fungsi tapi apa yang terlihat di halaman. Keduanya berbagi satu bentuk yang sama, susun harapan, jalankan kode, bandingkan. Bentuk itulah testing, sisanya perkakas.

## Panjang

Target 900 sampai 1.400 kata, sesuai STYLE_GUIDE aturan 11. Naskah penuh di halaman publik memakai kerangka ini.

## Rujukan

- MDN: Introduction to cross browser testing.
- MDN: Strategies for carrying out testing.
- MDN: Introduction to automated testing.
- Testing Library: React Testing Library introduction.
- Vitest: Getting started.
