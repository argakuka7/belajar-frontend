# Kontrak Kuka: Bab 14 React: Mengapa Framework Ada

Kembali ke [overview](overview.md).

Kuka adalah persona ilustrasi seri ini. Kontrak ini memesan ilustrasi untuk diproduksi pada fase ilustrasi. Gambar belum dibuat di fase ini. Path dan alt text di bawah sudah dipakai di halaman publik, jadi ilustrator harus memenuhi nama file dan deskripsi ini.

## Ilustrasi 1: Kuka arsitek menggambar denah, tim tukang menunggu di belakang (deklaratif dan imperatif)

- **File**: `public/14-react-mengapa/img/kuka-arsitek-denah.png`
- **Alt text**: Kuka duduk di meja gambar menggambar satu denah rumah dengan penggaris, di belakangnya sebuah tim tukang kecil berdiri siaga membawa perkakas, menunggu denah selesai.
- **Penempatan**: setelah paragraf pembuka, sebelum bagian "Mengapa framework ada".
- **Deskripsi**: Meja gambar arsitek yang rapi. Kuka duduk sambil menggambar satu denah rumah di atas kertas besar, penggaris dan pensil terlihat jelas, ekspresinya tenang dan fokus pada denah, bukan pada bata. Di belakangnya tim tukang kecil berdiri siaga dengan helm dan perkakas, tidak ada yang memegang bata sebelum denah jadi. Ini mewakili gagasan inti bab: gaya deklaratif adalah menggambar denah (menyatakan tampilan dari state) dan membiarkan tim tukang (React) mengerjakan langkah-langkahnya ke bangunan (DOM). Gaya kartun datar, warna hangat senada aksen oranye situs.

## Ilustrasi 2: Kuka memeriksa tukang yang merombak satu ruangan, ruangan lain tak tersentuh (re-render)

- **File**: `public/14-react-mengapa/img/kuka-tukang-ruangan.png`
- **Alt text**: Kuka berdiri di rumah dua ruangan sambil memegang denah, satu tukang hanya merombak ruangan kanan yang denahnya berubah, ruangan kiri utuh dan tidak ada yang menyentuhnya.
- **Penempatan**: di bagian "Di balik re-render".
- **Deskripsi**: Potongan rumah sederhana berisi dua ruangan berdampingan. Ruangan kanan sedang dirombak oleh satu tukang, ditandai denah baru yang digulung di tangannya dan puing kecil di lantai. Ruangan kiri sama sekali utuh, dengan perabot tertata rapi dan garis batas jelas menandakan tidak ada yang menyentuhnya. Kuka berdiri di tengah membandingkan denah di tangannya dengan kedua ruangan. Ini mewakili re-render: React menjalankan ulang fungsi komponen lalu hanya menyentuh bagian DOM yang hasilnya berubah, bagian lain dibiarkan utuh. Gaya sama dengan ilustrasi 1.
