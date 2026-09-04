# Overview Bab 9: Event & Delegasi

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 9 melanjutkan penerapan JavaScript pada halaman. Bab 8 mengajarkan memilih dan mengubah elemen, bab ini menambahkan pemicunya. Empat pokok bahasan: mengapa event ada, cara memasang pendengar dengan `addEventListener`, isi objek event dan `preventDefault`, lalu bubbling dan delegasi untuk satu pendengar yang mengurus kejadian banyak anak. Demo bab ini menambah tugas ke daftar, menghapus tugas mana pun lewat delegasi, dan memperlihatkan bubbling lewat baris catatan kejadian.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/09-event-delegasi/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan dengan klik: menambah item baru, menghapus item mana pun lewat satu pendengar delegasi yang terpasang sebelum item itu ada, dan baris catatan yang berubah pada tiap klik di dalam wadah demo. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `09-event-delegasi`, sesuai TOC di `public/index.html` dan link lanjutan yang sudah ditulis bab 8.
- Link bab sebelumnya menunjuk `/08-dom/`, link bab berikutnya menunjuk `/10-state-localstorage/`, mengikuti slug TOC.
- Analogi tunggal bab ini adalah resepsionis gedung. Tamu adalah event, petugas di pintu adalah pendengar, kartu tamu adalah objek event, perjalanan tamu melewati tiap meja adalah bubbling, dan satu resepsionis di lobi adalah delegasi.
- Jargon yang didefinisikan pertama kali: event, event-driven, `addEventListener`, callback, objek event, `type`, `target`, `preventDefault`, bubbling, delegasi, `closest`. Bab 8 sudah menyinggung `addEventListener` satu kalimat; bab ini membahasnya penuh.
- `removeEventListener` hanya disebut sekali dan tidak diajarkan, karena halaman pemula jarang melepas pendengar.
- Fase capturing dari aliran kejadian tidak dibahas, cukup bubbling. Keputusan paling sederhana untuk audiens nol.
- Demo Hidup hanya vanilla, tanpa memuat React lewat CDN, mengikuti keputusan bab 7 dan bab 8. React tetap muncul sebagai kode teks di pasangan contoh. Ketentuan CDN ESM di perintah pengerjaan berlaku untuk bab React 14 sampai 17.
- Demo memakai `button.hapus` di dalam tiap `li` dan `closest` dua tingkat, supaya delegasi terasa di masalah nyata: item baru terlayani tanpa pendaftaran tambahan.
- Kalimat penutup bab 8 menjanjikan bab ini membahas event, dan naskah bab ini menepatinya dengan struktur yang sama.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 8.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
