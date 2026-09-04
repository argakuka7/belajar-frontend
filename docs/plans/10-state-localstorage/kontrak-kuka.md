# Kontrak Kuka: Bab 10 State di Sisi Klien & localStorage

Kembali ke [overview](overview.md).

Kuka adalah persona ilustrasi seri ini. Kontrak ini memesan ilustrasi untuk diproduksi pada fase ilustrasi. Path dan alt text di bawah sudah dipakai di halaman publik, jadi ilustrator harus memenuhi nama file dan deskripsi ini.

## Ilustrasi 1: Kuka di meja kerja penuh kertas (state)

- **File**: `public/10-state-localstorage/img/kuka-meja-kerja.png`
- **Alt text**: Kuka duduk di meja kerja kantor yang penuh kertas catatan tersebar, sedang menukar satu kertas di tangannya, dengan lampu meja menyala.
- **Penempatan**: setelah paragraf pembuka, sebelum bagian "Mengapa state ada".
- **Deskripsi**: Meja kerja di kantor yang sedang dipakai. Kuka duduk di kursinya, kertas catatan tersebar di atas meja, satu kertas di tangan sedang ditukar isinya. Lampu meja menyala menandakan kantor masih buka. Ini mewakili state: data yang cepat dibaca dan cepat diubah selama halaman terbuka, seperti kertas di meja selama kantor buka, dan hilang saat kantor tutup atau halaman dimuat ulang. Gaya kartun datar, warna hangat senada aksen oranye situs.

## Ilustrasi 2: Kuka menyimpan map ke lemari arsip (localStorage)

- **File**: `public/10-state-localstorage/img/kuka-lemari.png`
- **Alt text**: Kuka berdiri di depan lemari arsip, memasukkan satu map berlabel ke salah satu laci, dengan meja kerja kosong terlihat di kejauhan.
- **Penempatan**: di bagian "localStorage: lemari arsip browser".
- **Deskripsi**: Lemari arsip milik kantor yang sama dengan ilustrasi 1. Kuka berstandar di depannya, memasukkan satu map berlabel ke laci. Isi map tampak sebagai lembar-lembar datar, dan meja kerja dari ilustrasi 1 terlihat kosong di kejauhan. Ini mewakili localStorage: penyimpanan yang bertahan saat kantor tutup dan halaman dimuat ulang, map berlabel adalah key, lembar datar adalah string, dan melipat dokumen berlapis adalah JSON. Gaya sama dengan ilustrasi 1.
