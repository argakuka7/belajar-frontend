# Overview Bab 10: State di Sisi Klien & localStorage

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 10 menutup lubang yang ditinggalkan bab 6 sampai 9: setiap muat ulang menghapus semua yang pengguna buat. Dua pokok bahasan. State, data milik halaman yang berubah seiring waktu dan tampilan mengikutinya. Lalu localStorage, penyimpanan browser yang bertahan melewati muat ulang. Rutenya: mengapa state ada, muat ulang sebagai penghapus ingatan, empat metode localStorage, JSON untuk objek dan array, pola dua momen (baca saat halaman dibuka, tulis saat nilai berubah), batas localStorage, lalu analogi tunggal, pasangan contoh, dan demo. Demo bab ini penghitung tersimpan: tambah angka, muat ulang halaman, angka tetap ada.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/10-state-localstorage/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan dengan klik dan membuktikan dirinya: angka bertahan setelah muat ulang, isi mentah localStorage terlihat di halaman beserta `null` saat kosong, dan tombol reset menghapusnya lewat `removeItem`. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `10-state-localstorage`, sesuai TOC di `public/index.html` dan link lanjutan yang sudah ditulis bab 9.
- Link bab sebelumnya menunjuk `/09-event-delegasi/`, link bab berikutnya menunjuk `/11-fetch-async/`, mengikuti slug TOC.
- Analogi tunggal bab ini adalah meja kerja dan lemari arsip. Kertas di meja adalah variabel dan state selama kantor buka, kantor tutup adalah muat ulang, lemari adalah localStorage, kantor tempat lemari berdiri adalah origin, map berlabel adalah key, lembar datar adalah string, dan melipat dokumen berlapis adalah `JSON.stringify`.
- State sudah disebut namanya di bab 6 dan bab 9, bab ini pertama kali mendefinisikannya penuh. Jargon baru lain yang didefinisikan saat pertama muncul: origin, key-value, localStorage, sessionStorage, `setItem`, `getItem`, `removeItem`, `clear`, JSON, `stringify`, `parse`. Istilah persistensi dihindari, cukup kata "bertahan".
- Demo Hidup hanya vanilla, tanpa memuat React lewat CDN, mengikuti keputusan bab 7 sampai 9. React tetap muncul sebagai kode teks di pasangan contoh. Ketentuan CDN ESM di perintah pengerjaan berlaku untuk bab React 14 sampai 17.
- Demo memilih penghitung, bukan daftar tugas lagi, supaya tidak menyerupai demo bab 9. Nilai mentah `getItem` ditampilkan di halaman supaya pembaca melihat string dan `null` dengan matanya.
- Tombol reset demo memakai `removeItem`, sekaligus mengajarkan `getItem` yang mengembalikan `null` saat label kosong.
- `localStorage.clear()` disebut di daftar metode dan tidak dipakai di demo, menghapus semua terlalu berbahaya untuk contoh pemula.
- sessionStorage disebut satu kalimat dan tidak diajarkan. Cookies tidak disinggung sama sekali, bukan materi bab ini.
- Kelemahan `JSON.parse` pada isi rusak disebut satu kalimat tanpa `try/catch`, cukup sebagai catatan batas.
- Ukuran lima MB ditulis sebagai "kira-kira", angka pastinya berbeda antar browser.
- Pasangan contoh memilih pengganti tema, bukan daftar lagi, supaya React memperlihatkan initializer dan `useEffect` dengan satu state sederhana. Kode React hanya memakai sintaks yang sudah muncul di halaman bab 9, tanpa spread dan concat yang belum diajarkan bab 7.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 9.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
