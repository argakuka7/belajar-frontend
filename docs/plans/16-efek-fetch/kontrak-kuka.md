# Kontrak Kuka: Bab 16 React: Efek & Pengambilan Data

Kembali ke [overview](overview.md).

Kuka adalah persona ilustrasi seri ini. Kontrak ini memesan ilustrasi untuk diproduksi pada fase ilustrasi. Gambar belum dibuat di fase ini. Path dan alt text di bawah sudah dipakai di halaman publik, jadi ilustrator harus memenuhi nama file dan deskripsi ini.

## Ilustrasi 1: Kuka menyerahkan catatan belanja ke kurir di depan kamar yang baru tertata (efek jalan setelah render)

- **File**: `public/16-efek-fetch/img/kuka-kurir-catatan.png`
- **Alt text**: Kuka berdiri di pintu kamar yang barusan ditata sambil menyerahkan secarik catatan belanja ke kurir yang membawa tas besar, rak di dalam kamar masih ada yang kosong menunggu barang datang.
- **Penempatan**: setelah paragraf pembuka, sebelum bagian "Mengapa efek ada".
- **Deskripsi**: Kamar yang baru selesai ditata, ada rak dan lemari yang sudah terisi, tetapi satu rak masih kosong dan ditandai garis putus-putus. Kuka berdiri di ambang pintu, badannya menghadap keluar, menyerahkan satu catatan lipat ke kurir yang datang membawa tas besar dan siap berangkat. Posisi kaki Kuka masih di dalam kamar, kurir di luar, jelas bahwa kurir baru boleh berangkat setelah kamar beres. Ini mewakili gagasan inti bab: efek adalah pesanan ke dunia luar yang dikirim setelah render selesai, catatan belanjanya adalah array dependensi, dan rak yang kosong adalah layar memuat selama barang di jalan. Gaya kartun datar, warna hangat senada aksen oranye situs.

## Ilustrasi 2: Kuka membandingkan dua bon dari dua kurir, hanya bon terbaru yang diterima (balapan dua jawaban)

- **File**: `public/16-efek-fetch/img/kuka-dua-bon.png`
- **Alt text**: Dua kurir pulang bersamaan membawa bon berbeda, Kuka berdiri di pintu hanya menerima bon dengan angka dua sambil menolak halus bon dengan angka satu yang sudah tertunda di tangannya.
- **Penempatan**: di bagian "Balapan dua jawaban".
- **Deskripsi**: Dua kurir berdiri berdampingan di depan pintu, keduanya menyodorkan bon kertas dengan angka besar di atasnya, satu dan dua. Kuka berdiri di pintu memegang bon bernomor dua dengan satu tangan, tangan satunya mengangkat bon bernomor satu tapi terlihat jelas menolaknya, badan sedikit berbalik. Urutan kedatangan tidak rapi, kurir bernomor satu datang duluan padahal pesanannya lebih tua. Ini mewakili balapan dua jawaban: dua permintaan fetch berada di jalan, yang dikirim belakangan bisa pulang duluan, dan hanya jawaban permintaan terbaru yang diterima, sisanya dibuang oleh bendera di cleanup. Gaya sama dengan ilustrasi 1.
