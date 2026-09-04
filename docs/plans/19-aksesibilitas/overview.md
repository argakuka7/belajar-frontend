# Overview Bab 19: Aksesibilitas (a11y)

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 19 membuka bagian Kemahiran bersama bab 18. Delapan belas bab halaman diuji dengan satu cara saja, mata melihat dan mouse mengklik. Bab ini menjawab pertanyaan yang jarang ditanya pemula: bagaimana kalau pembaca tidak bisa melihat, tidak bisa memakai mouse, atau memakai browser dengan cara lain. Tiga pokok bahasan. Pertama mengapa aksesibilitas ada, siapa yang terbantu, dan bagaimana teknologi bantu membaca halaman lewat pohon DOM. Kedua fondasi teknisnya, HTML semantik sebagai pintu utama, keyboard dan fokus, alt text, kontras, lalu ARIA sebagai tambahan ketika elemen baku tidak cukup. Ketiga penerapannya lewat pasangan contoh dan demo hidup, tombol buka tutup daftar yang aksesibel. Rutenya: mengapa aksesibilitas ada, bagaimana halaman dibaca tanpa mata, HTML semantik sebagai fondasi, keyboard dan fokus, alt text dan kontras, ARIA, analogi tunggal, pasangan contoh, demo, ringkasan. Bab ini bukan bab React, jadi demo hidupnya vanilla JavaScript, dan React hanya muncul di kolom pasangan contoh dengan JSX dari bab 15.

Urutan produksi: konsep, kontrak Kuka, halaman publik, lalu verify.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/19-aksesibilitas/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan dengan sekali klik: tombol membuka daftar belanja, aria-expanded berpindah dari false ke true, teks tombol berganti, daftar tersembunyi lagi saat tombol ditekan kedua kalinya. Demo bisa dijalankan tanpa mouse, Tab sampai tombol memunculkan cincin fokus, Enter atau Spasi menekannya. Pasangan contoh menunjukkan perilaku sama di kedua versi, vanilla dan React, keduanya memakai elemen button dan aria-expanded. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `19-aksesibilitas`, sesuai TOC di `public/index.html`.
- Link bab sebelumnya menunjuk `/18-routing/` dengan judul Routing di Front End, link bab berikutnya menunjuk `/20-design-token/` dengan judul Styling Modern: Variabel & Design Token. Bab 18 dikerjakan paralel oleh worker lain, jadi halamannya belum ada di cabang ini. Slug dan judul diambil dari pola TOC `public/index.html`, mengikuti kebiasaan bab 14 yang menaut ke bab 15 sebelum bab 15 ada.
- Analogi tunggal bab ini adalah gedung, tangga, dan ram. Gedung hanya bertangga menolak pengguna kursi roda, gedung dengan ram menerima semua orang, termasuk orang bawa koper dan dorong bayi. Semantik HTML adalah pintu lebar yang sudah baku, keyboard dan fokus adalah ramnya, ARIA adalah papan petunjuk tambahan dipasang hanya saat pintu baku tidak menjelaskan. ARIA yang dipasang di elemen yang salah seperti papan petunjuk di tembok mati.
- Demo Hidup vanilla JavaScript, bukan React. Bab ini mengajarkan aksesibilitas, bukan React, dan ketentuan CDN ESM hanya untuk bab React 14 sampai 17. React tetap hadir di kolom pasangan contoh agar pola Vanilla+React terjaga, ditulis dengan JSX yang sudah diajarkan bab 15.
- Pasangan contoh memakai tombol buka tutup daftar belanja. Vanilanya mengubah `hidden` dan `aria-expanded` lewat `setAttribute`; React-nya menyimpan `terbuka` di state, atribut `aria-expanded` mengikuti state. Perbedaan inti: aksesibilitas tidak berpindah antara stack, elemen dan atributnya sama, yang berganti hanya cara nilainya diperbarui.
- Jargon yang didefinisikan pertama kali: aksesibilitas, a11y, teknologi bantu, pembaca layar, fokus, alt text, kontras, WCAG, ARIA, aria-expanded. DOM, semantik, state, dan render mengacu ke bab 8, 2, 10, dan 12 tanpa diajarkan ulang.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 14.
- Angka disabilitas memakai satu angka tunggal dari WHO, 1,3 miliar orang, dengan kalimat sederhana, tanpa deret statistik.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
