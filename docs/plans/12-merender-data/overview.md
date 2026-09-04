# Overview Bab 12: Merender Data: List, Kondisi & Template

Kembali ke [overview program](../000-launch/overview.md).

## Ringkasan

Bab 12 menjembatani bab 11 dan bab 13. Bab 11 mengambil data dari server, tetapi data yang masih berupa array dan objek di variabel tidak terlihat di layar. Bab ini membahas merender, mengubah data menjadi elemen yang terlihat, dengan tiga peralatan. List, satu array menjadi banyak elemen sekaligus. Kondisi, tampilan yang berganti mengikuti keadaan data, sedang memuat, kosong, atau terisi. Template, cetakan bentuk tetap yang isinya diganti data tiap item. Rutenya: mengapa merender ada, merender list dengan loop dan pembuat elemen, kosongkan lalu isi ulang, kondisi dengan if dan else, template literal, elemen `<template>` dengan `cloneNode`, lalu analogi tunggal, pasangan contoh, dan demo. Demo bab ini mengambil tugas dari server tiruan, menampilkan status memuat, menerima data kosong, dan menyaring tugas selesai.

## Produk

- Naskah sumber di folder ini: konsep, kontrak Kuka, overview.
- Halaman publik: `public/12-merender-data/index.html`.
- Ilustrasi Kuka dipesan lewat `kontrak-kuka.md`, diproduksi di fase ilustrasi.

## Verifikasi

Halaman terbuka tanpa error console. Demo Hidup jalan dengan sekali klik dan memperlihatkan ketiga konsep bab ini sekaligus: status "Memuat data dari server..." saat tombol ditekan, daftar yang terisi setelah server tiruan menjawab, pesan kosong saat server membalas array kosong, dan saringan "Hanya yang selesai" yang merender ulang daftar. Prosa lolos STYLE_GUIDE.

## Keputusan sederhana

- Slug bab memakai `12-merender-data`, sesuai TOC di `public/index.html` yang sudah menuliskan link `/12-merender-data/`.
- Link bab sebelumnya menunjuk `/11-fetch-async/`, mengikuti slug TOC di `public/index.html` dan pola link lanjutan bab 10. Halaman bab 11 dikerjakan paralel di cabang lain, jadi link ini berdasar TOC, bukan berdasar berkas yang sudah ada.
- Link bab berikutnya menunjuk `/13-form-validasi/`, juga mengikuti slug TOC.
- Analogi tunggal bab ini adalah percetakan. Naskah dari klien adalah data dari server, desain cetak yang disiapkan sekali adalah template, mesin yang mengulang cetakan untuk tiap baris adalah list, dan papan status di jendela toko adalah kondisi, menunggu berkas, sedang mencetak, berkas kosong, atau mesin bermasalah.
- Jargon baru yang didefinisikan saat pertama muncul: merender, list, kondisi, template, template literal, `<template>`, `content`, cloneNode, fragment, `replaceChildren`, key. Istilah `forEach`, `filter`, `createElement`, `appendChild`, `textContent`, dan state sudah diajarkan bab 7 sampai 10 dan hanya dipakai, tidak diajarkan ulang.
- Demo Hidup hanya vanilla, tanpa memuat React lewat CDN, mengikuti keputusan bab 7 sampai 10. Ketentuan CDN ESM berlaku untuk bab React 14 sampai 17. React tetap muncul sebagai kode teks di pasangan contoh.
- Server tiruan di demo memakai array konstan dan `setTimeout` 800 milidetik, bukan fetch sungguhan, supaya demo jalan tanpa jaringan dan tanpa server. Prosa menyebutnya server tiruan dan menghubungkannya ke fetch bab 11.
- Peringatan innerHTML bab 8 disambung di sini: data dari server sama asingnya dengan data dari pengguna, jadi contoh selalu memakai `textContent`.
- `replaceChildren()` dipilih untuk mengosongkan daftar, bukan `innerHTML = ""`, karena cara ini tidak menyentuh HTML mentah sama sekali dan satu panggilan saja.
- `map` dipakai di pane React untuk merender list karena itulah pola aslinya; versi vanilla memakai `forEach` karena hasilnya ditempel langsung ke DOM, tidak dikumpulkan jadi array baru.
- Kondisi error dari fetch tidak diajarkan di bab ini, cukup kondisi memuat dan kosong. Kesalahan jaringan milik bab 11.
- Jumlah ilustrasi dua buah, mengikuti pola bab 1 sampai 10.
- `konsep.md` adalah kerangka isi. Naskah penuh sesuai kerangka itu ada di halaman publik.
