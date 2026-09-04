# Overview Bab 15: React: JSX, Props & State

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 15 adalah bab React kedua. Bab 14 menjelaskan mengapa framework ada, bab ini membuka tiga peralatan dasarnya yang dipakai semua bab React sesudahnya. JSX, cara menulis bentuk tampilan yang mirip HTML di dalam JavaScript, yang dikompilasi menjadi panggilan `createElement` sebelum browser melihatnya. Props, data yang dikirim komponen induk ke anakannya lewat atribut, dibaca saja, mengalir satu arah. State, ingatan milik satu komponen yang dipegang React dan diganti lewat `useState`, tiap pergantian menjadwalkan render ulang. Rutenya: mengapa JSX ada, bagaimana JSX bekerja dan aturan pokoknya, props, state dengan `useState`, analogi tunggal, pasangan contoh, dan demo. Contoh pengikat ketiganya adalah kedai sederhana, tombol menu menambah pesanan, daftar jumlah per menu berganti mengikuti state. Demo menyalin kedai yang sama dengan React sungguhan dari CDN.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/15-jsx-props-state/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Urutan produksi

1. konsep.md, kerangka isi.
2. kontrak-kuka.md, daftar ilustrasi.
3. index.html, halaman Versi Sederhana.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan dengan sekali klik: tiga tombol menu menambah pesanan, daftar dan total berganti tiap klik tanpa panggilan `render()` manual, dan render ulang dipicu `setHitung`. Demo memuat React dari CDN sehingga butuh koneksi internet, kegagalan muat menampilkan pesan di kotak demo. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `15-jsx-props-state`, sesuai TOC di `public/index.html`.
- Link bab sebelumnya menunjuk `/14-react-mengapa/`, judul "Bab 14 - React: Mengapa Framework Ada", mengikuti slug TOC. Bab 14 dikerjakan paralel di cabang lain, jadi link ini berdasar TOC, bukan berdasar berkas yang sudah ada. Link bab berikutnya menunjuk `/16-efek-fetch/`, juga dari TOC.
- Analogi tunggal bab ini adalah dapur restoran. Kartu resep penyajian dengan lubang isian adalah JSX, cetakan bentuk yang ditulis sekali. Kartu pesanan pelanggan di rel dapur adalah props, data dari luar yang hanya dibaca. Papan catatan koki di dinding adalah state, ingatan internal yang tiap kali diganti memicu penyajian ulang.
- Demo Hidup memuat React lewat import map dari CDN ESM, mengikuti fase 5 (react@18.3.1, react-dom/client, htm, semua dari esm.sh, versi dikunci). JSX mentah tidak bisa dieksekusi browser dan halaman ini tanpa build tool sesuai ADR-0003, jadi demo memakai `htm`, jembatan berbentuk template literal bab 12 yang hasil akhirnya panggilan `createElement` yang sama. Naskah menjelaskan jembatan ini, supaya pembaca tidak menyangka `htm` adalah JSX. Konsekuensinya demo butuh jaringan, beda dengan demo bab 7 sampai 12 yang offline, dan pesan gagal muat disiapkan di kotak demo.
- React 18 dengan `createRoot` dipilih sebagai versi stabil yang tersedia di esm.sh; `ReactDOM.render` lama tidak dipakai.
- Jargon baru yang didefinisikan saat pertama muncul: JSX, compiler, props, satu arah, hook, `useState`, render ulang, import map, `htm`. Kata komponen diperkenalkan bab 14 dan di sini hanya diingatkan lewat keterangan singkat, fungsi yang mengembalikan bentuk tampilan. Istilah `forEach`, `map`, `filter`, `createElement`, `textContent`, `addEventListener`, `replaceChildren`, `key`, template literal, dan state sebagai konsep umum sudah diajarkan bab 7 sampai 12 dan hanya dipakai.
- `setHitung` dipakai sebagai nama pengganti generik `setSomething` di penjelasan, mengikuti kebiasaan konvensi React `set` plus nama state; contoh kode memakai nama yang sama agar konsisten.
- Vanilla pane memanggil `render()` dengan tangan dan React pane memanggil lewat `setHitung`, perbedaan inti bab ini ditulis eksplisit setelah pasangan contoh, menyambung kalimat bab 12 tentang React yang menyentuh DOM hanya di bagian berubah.
- Dua ilustrasi saja, mengikuti pola bab 1 sampai 12.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
