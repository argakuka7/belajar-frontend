# Kontrak Kuka: Bab 17 React: Custom Hooks & Pola Komposisi

Kembali ke [overview](overview.md).

Kuka adalah persona ilustrasi seri ini. Kontrak ini memesan ilustrasi untuk diproduksi pada fase ilustrasi. Path dan alt text di bawah sudah dipakai di halaman publik, jadi ilustrator harus memenuhi nama file dan deskripsi ini.

## Ilustrasi 1: Kuka menempel satu resep di dua dapur, tiap panci berisi masakan berbeda (custom hook)

- **File**: `public/17-custom-hooks/img/kuka-resep-dua-dapur.png`
- **Alt text**: Kuka menempelkan satu kartu resep yang sama di dua dapur berdampingan, panci di dapur kiri berisi sup yang baru mulai mendidih, panci di dapur kanan berisi masakan yang hampir matang.
- **Penempatan**: setelah paragraf pembuka, sebelum bagian "Kebocoran dari dua bab lalu".
- **Deskripsi**: Dua dapur kecil berdampingan, masing-masing dengan kompor dan satu panci. Satu kartu resep yang sama tertempel jelas di dinding kedua dapur, digambar cukup besar supaya terbaca sebagai resep, bukan catatan acak. Isi dua panci sengaja berbeda tahapan, sup tipis baru mendidih di kiri dan masakan kental hampir jadi di kanan, menandakan bahan dan hasil tiap dapur berbeda meski resepnya sama. Kuka berdiri di tengah memegang selotip, baru saja menempel kartu resep kedua. Ini mewakili gagasan inti bab: custom hook adalah resep yang ditulis sekali dan dipakai banyak komponen, sedangkan state adalah bahan di tiap dapur, terpisah total antar pemanggil. Gaya kartun datar, warna hangat senada aksen oranye situs.

## Ilustrasi 2: Kuka menyusun rak dari kotak kayu standar yang sama (komposisi)

- **File**: `public/17-custom-hooks/img/kuka-rak-kotak.png`
- **Alt text**: Kuka menyusun sebuah rak dari beberapa kotak kayu berukuran sama, satu kotak dibiarkan terbuka kosong dan siap diisi, sekrup dan obeng kecil tergeletak di lantai.
- **Penempatan**: di bagian "Pola komposisi".
- **Deskripsi**: Sebuah rak buku setengah jadi tersusun dari kotak kayu berukuran sama, digambar dari samping supaya susunannya terlihat. Beberapa kotak sudah terpasang rapi, satu kotak terbuka kosong di ujung, dan satu kotak masih tergeletak di lantai menunggu dipasang. Kuka berlutut sambil menyodorkan satu kotak ke posisinya, wajah fokus, tidak ada lem atau papan khusus, semua bagian memakai kotak standar yang sama. Ini mewakili komposisi: halaman besar disusun dari komponen kecil yang lubang masuknya props dan children, komponen wadah seperti kotak kosong bisa diisi apa saja tanpa diubah. Gaya sama dengan ilustrasi 1.
