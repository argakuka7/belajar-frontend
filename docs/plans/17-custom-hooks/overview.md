# Overview Bab 17: React: Custom Hooks & Pola Komposisi

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 17 menutup seri empat bab React. Bab 15 memberi komponen, JSX, props, dan state. Bab 16 menambah efek dan pengambilan data. Gabungan keduanya melahirkan masalah baru yang jujur: komponen yang berbeda sering menulis logika yang sama persis, state plus efek untuk localStorage, state plus efek untuk mengikuti lebar jendela, state plus efek untuk fetch. Bab ini menjawabnya dengan dua gagasan. Pertama custom hook, fungsi yang diawali use dan membungkus logika berstate agar bisa dipakai ulang, sementara tiap komponen tetap punya state sendiri. Kedua pola komposisi, menyusun halaman besar dari komponen kecil yang lubang masuknya props dan children. Rutenya: recap dan kebocoran logika, aturan main hook, custom hook, di balik nama use, pola komposisi, batas, analogi tunggal, pasangan contoh, dan demo. Demo hidup tetap memuat React lewat CDN ESM tanpa build tool dan memakai React.createElement karena halaman ini jalan tanpa proses build, mengikuti ketentuan perintah pengerjaan bab 14 sampai 17.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/17-custom-hooks/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan tanpa klik tambahan: dua kotak catatan React tampil, mengetik di salah satunya menyimpan ke localStorage lewat satu custom hook yang sama, dan memuat ulang halaman mengembalikan tulisan. Demo butuh jaringan untuk memuat React dari CDN, dan localStorage butuh konteks halaman, keduanya tersedia saat halaman dibuka langsung. Pasangan contoh menunjukkan logika yang sama di kedua versi, fungsi pabrik vanilla dan custom hook React, sehingga pembaca bisa membandingkan langsung. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `17-custom-hooks`, sesuai TOC di `public/index.html`.
- Link bab sebelumnya menunjuk `/16-efek-fetch/` dengan judul React: Efek & Pengambilan Data, link bab berikutnya menunjuk `/18-routing/` dengan judul Routing di Front End. Bab 16 dikerjakan paralel oleh worker lain, jadi halamannya belum ada di cabang ini. Slug dan judul diambil dari pola TOC `public/index.html` dan README, mengikuti kebiasaan bab 14 yang menaut ke bab 15 sebelum bab 15 ada.
- Analogi tunggal bab ini adalah resep dapur. Custom hook adalah resep yang ditulis sekali dan ditempel di banyak dapur, komponen adalah dapurnya, dan state adalah bahan di tiap dapur. Resep yang sama menghasilkan masakan berbeda karena bahannya berbeda, hook yang sama menghasilkan state berbeda karena tiap pemanggil punya panggilan useState sendiri.
- Demo Hidup memuat React lewat CDN ESM dari esm.sh, versi dipatok `react@18.3.1` dan `react-dom@18.3.1`, tanpa import map, tanpa build tool, mengikuti pola bab 14. Demo memakai `React.createElement` karena JSX butuh proses build; sejak bab 15 pembaca sudah kenal JSX, jadi cukup satu kalimat pengantar.
- Pasangan contoh memakai kasus yang sama di kedua kolom, menyimpan teks ke localStorage. Vanilanya fungsi pabrik `buatSimpanLokal` yang mengembalikan pasangan baca dan simpan. React-nya custom hook `useSimpanLokal` yang mengembalikan pasangan state dan pengubah. Kolom React ditulis dengan JSX, dan satu komponen `KotakCatatan` memakai hook itu.
- useEffect dan daftar ketergantungan diajarkan di bab 16, jadi tidak diajarkan ulang, hanya direcap satu kalimat. localStorage, state, props, dan komponen mengacu ke bab 10, 15, dan 15.
- Jargon yang didefinisikan pertama kali: custom hook atau hook kustom, aturan hook, fungsi pabrik, komposisi, children. Istilah hook dan efek direcap dari bab 15 dan 16 dengan definisi satu kalimat.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 14.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
