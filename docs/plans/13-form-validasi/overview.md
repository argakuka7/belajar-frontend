# Overview Bab 13: Form & Validasi di Sisi Klien

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 13 menutup bagian JavaScript & Halaman (bab 6 sampai 13). Sepuluh bab terakhir halaman hanya menampilkan dan bereaksi. Bab ini menambahkan arah sebaliknya, pengguna memberi data ke halaman. Dua pokok bahasan. Form, sarana HTML untuk mengumpulkan input dari pengguna, dari `<form>`, `<input>`, dan `<label>` sampai momen submit. Lalu validasi, pemeriksaan isi input sebelum data dipakai atau dikirim. Rutenya: mengapa form ada, apa yang terjadi saat submit, mengapa validasi ada, validasi bawaan HTML lewat atribut, validasi dengan JavaScript lewat Constraint Validation API, pola kapan memeriksa (saat submit atau saat mengetik), analogi tunggal, pasangan contoh, dan demo. Demo bab ini formulir pendaftaran mini yang menolak isian kosong dan email tidak sah, lalu menerima isian yang benar.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/13-form-validasi/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Urutan produksi

1. Konsep dulu, karena naskah halaman mengikutinya.
2. Halaman publik lengkap dengan demo hidup.
3. Kontrak Kuka terakhir, karena penempatan ilustrasi baru pasti setelah naskah matang.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan dengan klik dan membuktikan dirinya: submit kosong memunculkan pesan error, email tidak sah memunculkan pesan lain, isian benar mengganti form dengan pesan sukses, dan halaman tidak pernah dimuat ulang. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `13-form-validasi`, sesuai TOC di `public/index.html`.
- Link bab sebelumnya menunjuk `/12-merender-data/` dengan judul "Merender Data: List, Kondisi & Template". Asumsi dicatat: slug itu mengikuti pola TOC di `public/index.html`, dan halaman bab 12 dikerjakan pekerja lain secara paralel sehingga belum ada di cabang ini saat bab 13 ditulis. Link bab berikutnya menunjuk `/14-react-mengapa-framework/`, slug TOC untuk "React: Mengapa Framework Ada".
- Analogi tunggal bab ini adalah loket pendaftaran. Formulir kertas adalah form, kotak kosong di kertas adalah input, petugas loket yang memeriksa berkas sebelum diteruskan adalah validasi, menahan berkas di loket adalah `preventDefault`, dan bagian belakang kantor yang memeriksa ulang adalah server.
- Validasi di sisi klien diposisikan jujur: ia bukan pengaman, hanya umpan balik cepat. Kalimat "server tetap harus memeriksa ulang" ditulis eksplisit supaya pembaca tidak salah paham.
- `novalidate` di ajarkan karena tanpa itu atribut HTML memblokir submit sebelum JavaScript sempat jalan, dan ini pancingan paling sering bikin pemula bingung.
- Demo Hidup hanya vanilla, tanpa memuat React lewat CDN, mengikuti keputusan bab 7 sampai 10. React tetap muncul sebagai kode teks di pasangan contoh. Ketentuan CDN ESM di perintah pengerjaan berlaku untuk bab React 14 sampai 17.
- Pasangan contoh memakai form berlangganan email sederhana. React memakai controlled input (`value` plus `onChange`), perpanjangan wajar dari `useState` yang sudah diajarkan bab 10 dan bab 12.
- `pattern`, `:invalid`, dan `setCustomValidity` disebut sekilas tanpa diajarkan penuh, cukup sebagai tanda pintu lanjutan.
- Jargon baru yang didefinisikan saat pertama muncul: form, validasi, submit, controlled input, Constraint Validation API, `checkValidity`, `validity`, `valueMissing`, `typeMismatch`. `preventDefault` dan `event` sudah didefinisikan bab 9, cukup dirujuk ulang.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 10.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
