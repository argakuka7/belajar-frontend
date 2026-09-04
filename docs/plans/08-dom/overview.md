# Overview Bab 8: DOM: Memilih & Mengubah Halaman

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 8 membuka penerapan JavaScript pada halaman, setelah bab 6 dan 7 melengkapi bahasanya. Empat pokok bahasan: mengapa DOM ada, bagaimana browser menyusun pohon dari HTML, cara memilih elemen dengan `querySelector` dan `querySelectorAll`, dan cara mengubahnya lewat `textContent`, `classList`, `createElement`, serta `appendChild`. Event tidak dibahas di sini, itu bab 9. Demo bab ini mengubah elemen halaman sungguhan, bukan hanya mengolah data di console.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/08-dom/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup benar-benar mengubah DOM: tombol mengganti teks paragraf, menyalakan dan mematikan class, serta menambah baris daftar tanpa memuat ulang. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `08-dom`, sesuai TOC di `public/index.html` dan link lanjutan yang sudah ditulis bab 7.
- Link bab sebelumnya menunjuk `/07-fungsi-array-objek/`, link bab berikutnya menunjuk `/09-event-delegasi/`, mengikuti slug TOC.
- Analogi tunggal bab ini adalah silsilah keluarga. document adalah leluhur, elemen adalah anggota, memilih elemen sama dengan memanggil anggota lewat namanya, mengubah halaman sama dengan mengubah keadaan anggota itu.
- Jargon yang didefinisikan pertama kali: DOM, objek, pohon, node, document, selektor, `querySelector`, `querySelectorAll`, null, `textContent`, `innerHTML`, atribut, `classList`, `createElement`, `appendChild`, `remove`, imperatif, deklaratif, state, `addEventListener` (catatan singkat, dibahas penuh bab 9).
- Demo Hidup hanya vanilla, tanpa memuat React lewat CDN, mengikuti keputusan bab 7. React tetap muncul sebagai kode teks di pasangan contoh. Ketentuan CDN ESM di perintah pengerjaan berlaku untuk bab React 14 sampai 17.
- `innerHTML` hanya disebut singkat dengan catatan keamanan, bukan diajarkan penuh, karena merender data dari string adalah pokok bab 12.
- Demo memakai `addEventListener` untuk memasang tombol, dengan satu kalimat definisi dan rujukan ke bab 9, karena bab ini belum membahas kejadian.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 7.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
