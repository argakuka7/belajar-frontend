# Kontrak Kuka: Bab 15 React: JSX, Props & State

Kembali ke [overview](overview.md).

Kuka adalah persona ilustrasi seri ini. Kontrak ini memesan ilustrasi untuk diproduksi pada fase ilustrasi. Gambar belum dibuat di fase ini. Path dan alt text di bawah sudah dipakai di halaman publik, jadi ilustrator harus memenuhi nama file dan deskripsi ini.

## Ilustrasi 1: Kuka koki menempelkan kartu pesanan ke rel di samping kartu resep (JSX dan props)

- **File**: `public/15-jsx-props-state/img/kuka-koki-resep.png`
- **Alt text**: Kuka berjuluk koki berdiri di dapur restoran, menempelkan kartu pesanan pelanggan ke rel dapur, di samping kartu resep penyajian yang bergambar bentuk piring dengan beberapa kolom isian kosong.
- **Penempatan**: setelah paragraf pembuka, sebelum bagian "Mengapa JSX ada".
- **Deskripsi**: Dapur restoran yang rapi. Kuka berpakaian koki berdiri di depan rel dapur, sedang menempelkan satu kartu pesanan yang bertuliskan menu dan jumlah pesanan. Di dinding sebelah rel tergantung satu kartu resep penyajian bergambar bentuk piring tetap dengan lubang isian kosong untuk nama menu dan catatan. Kartu resep hanya satu, kartu pesanan bisa bertumpuk bentuknya sama. Ini mewakili JSX dan props: resep adalah cetakan bentuk tampilan yang ditulis sekali dengan lubang isian, kartu pesanan adalah data dari luar yang mengalir masuk dan hanya dibaca, tidak boleh dicoret oleh dapur. Gaya kartun datar, warna hangat senada aksen oranye situs.

## Ilustrasi 2: Kuka mengganti tulisan di papan catatan dapur (state)

- **File**: `public/15-jsx-props-state/img/kuka-papan-catatan.png`
- **Alt text**: Kuka berdiri di depan papan catatan di dinding dapur, sedang menghapus tulisan es teh tinggal 2 dengan kain, sementara tulisan baru es teh tinggal 1 sudah tersedia di tangan lainnya, dan piring di meja dapur terlihat di latar belakang.
- **Penempatan**: di bagian "State: ingatan yang memicu render ulang".
- **Deskripsi**: Dapur restoran yang sama dengan ilustrasi 1. Kuka berdiri di depan papan catatan miliknya, satu tangan menghapus tulisan lama "es teh tinggal 2", tangan lain memegang kapur menulis tulisan baru "es teh tinggal 1". Papan hanya menampilkan satu isi pada satu waktu, dan di latar belakang meja penyajian menunggu. Ini mewakili state: ingatan internal dapur yang setiap kali diganti memicu penyajian ulang mengikuti catatan terbaru. Gaya sama dengan ilustrasi 1.
