# Kontrak Kuka: Bab 23 Caching, PWA & Offline

Kembali ke [overview](overview.md).

Kuka adalah persona ilustrasi seri ini. Kontrak ini memesan ilustrasi untuk diproduksi pada fase ilustrasi. Path dan alt text di bawah sudah dipakai di halaman publik, jadi ilustrator harus memenuhi nama file dan deskripsi ini.

## Ilustrasi 1: Kuka di dapur mengambil bahan dari lemari persediaan, pasar terlihat di jendela (cache)

- **File**: `public/23-caching-pwa/img/kuka-dapur-lemari.png`
- **Alt text**: Kuka berdiri di dapur mengambil kaleng dari lemari persediaan yang pintunya terbuka berisi bahan bertatakan tanggal, sementara lewat jendela dapur terlihat sebuah pasar dengan atap terasah.
- **Penempatan**: setelah paragraf pembuka, sebelum bagian "Mengapa caching, PWA, dan offline ada".
- **Deskripsi**: Dapur rumah yang rapi. Kuka berdiri di depan lemari persediaan tinggi dengan pintu terbuka, tangan sedang mengambil satu kaleng, rak-raknya berisi bahan yang tertata dan sebagian punya label tanggal. Lemari itu jelas lebih dekat daripada pintu keluar. Lewat jendela dapur tampak bangunan pasar dengan atap terasah dan beberapa lapak, jaraknya terasa jauh. Ini mewakili gagasan inti bab: cache adalah lemari persediaan di rumah, bahan yang sudah ada tidak perlu dibeli lagi, dan pasar (jaringan) adalah tempat termahal untuk pergi. Label tanggal mengisyaratkan max-age pada HTTP cache. Gaya kartun datar, warna hangat senada aksen oranye situs.

## Ilustrasi 2: Kuka dan asisten dapur di pintu belakang menuju pasar (service worker)

- **File**: `public/23-caching-pwa/img/kuka-asisten-pintu.png`
- **Alt text**: Kuka membaca selembar daftar aturan stok sambil berdiri di dapur, di depannya seorang asisten berapron berdiri di pintu belakang yang pintunya terbuka menuju pasar, satu tangan memegang kertas aturan, tangan lain menghalau membawa tas belanja.
- **Penempatan**: di bagian "Service worker: penjaga di pintu".
- **Deskripsi**: Dapur yang sama dengan ilustrasi 1, kini dengan satu tokoh baru. Seorang asisten berapron berdiri tepat di pintu belakang yang terbuka ke arah pasar, posisinya menghalangi jalan, tidak ada bahan yang bisa lewat tanpa menemuinya. Di tangannya selembar kertas berisi daftar bergaris, aturan stok yang ditulis Kuka. Kuka berdiri sedikit di belakang, memegang lembar yang sama, seolah baru saja memberikannya. Lemari persediaan dari ilustrasi 1 terlihat di tepi gambar, mengingatkan bahwa asisten bisa menyajikan dari lemari atau belanja ke pasar sesuai aturan itu. Ini mewakili service worker sebagai penjaga di pintu jaringan yang menjalankan strategi cache-first atau network-first, dan tetap bisa menyajikan dari lemari saat pasar tutup. Gaya sama dengan ilustrasi 1.
