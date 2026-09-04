# Kontrak Kuka: Bab 8 DOM: Memilih & Mengubah Halaman

Kembali ke [overview](overview.md).

Kuka adalah persona ilustrasi seri ini. Kontrak ini memesan ilustrasi untuk diproduksi pada fase ilustrasi. Path dan alt text di bawah sudah dipakai di halaman publik, jadi ilustrator harus memenuhi nama file dan deskripsi ini.

## Ilustrasi 1: Kuka membaca peta silsilah keluarga (pohon DOM)

- **File**: `public/08-dom/img/kuka-peta.png`
- **Alt text**: Kuka berdiri di depan peta besar bergambar silsilah keluarga, dengan garis penghubung dari satu kotak berlabel dokumen di puncak sampai anggota-anggota di ranting.
- **Penempatan**: setelah paragraf pembuka, sebelum bagian "Mengapa DOM ada".
- **Deskripsi**: Kuka berdiri di depan sebuah peta silsilah keluarga besar yang terpampang di dinding. Di puncak peta ada satu kotak berlabel "dokumen". Dari kotak itu garis bercabang ke kotak-kotak di bawahnya, lalu bercabang lagi sampai ranting. Tiap kotak adalah satu anggota keluarga, dan garisnya menunjukkan siapa membungkus siapa. Ini mewakili pohon DOM: browser menyusun halaman sebagai struktur bertingkat dari satu dokumen, dan JavaScript menemukan elemen dengan menelusuri silsilah itu. Gaya kartun datar, warna hangat senada aksen oranye situs.

## Ilustrasi 2: Kuka menyorot satu anggota terpilih (mengubah elemen)

- **File**: `public/08-dom/img/kuka-ubah.png`
- **Alt text**: Kuka menunjuk satu kotak anggota pada peta silsilah sambil memberinya sorot warna oranye, anggota lain tetap pucat.
- **Penempatan**: di bagian "Mengubah isi dan atribut".
- **Deskripsi**: Peta silsilah yang sama, tetapi kali ini Kuka memegang pena sorot dan mewarnai satu kotak anggota dengan oranye menyala. Anggota lain tetap pucat. Di tangan satunya ada kartu kecil bertuliskan satu nama, sesuai label kotak yang disorot. Ini mewakili memilih lalu mengubah: JavaScript memanggil satu elemen lewat selektornya, lalu mengganti teks atau class elemen itu tanpa menyentuh anggota lain. Gaya sama dengan ilustrasi 1.
