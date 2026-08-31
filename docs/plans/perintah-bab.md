# Perintah Pengerjaan Satu Bab (template worker Tulis di repo ini, jangan commit - reviewan mengejar.

## Input yang wajib dibaca dulu
README.md (TOC + konvensi) - tools/STYLE_GUIDE.md - docs/adr/0001-0004 - docs/plans/000-launch/overview.md - public/enhancements.css (class yang tersedia: .demo, .pair, .bab-header .badge, footer.site).

## Deliverable bab <N> (judul: <JUDUL>)
1. docs/plans/<NN-slug>/overview.md - lingkup bab, urutan produksi.
2. docs/plans/<NN-slug>/konsep.md - kerangka isi 900-1400 kata: mengapa konsep itu ada, cara kerja di baliknya, analogi tunggal, contoh.
3. docs/plans/<NN-slug>/kontrak-kuka.md - daftar ilustrasi: deskripsi satu paragraf, alt text, penempatan di halaman.
4. public/<NN-slug>/index.html - halaman Versi Sederhana lengkap:
   - badge bab di header (class .bab-header .badge)
   - naskah penuh sesuai konsep.md
   - pasangan contoh: pane kiri vanilla, kanan React (class .pair, .pane, heading h3 "Vanilla JavaScript" dan "React")
   - tepat satu blok Demo Hidup (class .demo) yang jalan tanpa build tool; kode inline di halaman
   - link navigasi bab sebelumnya dan berikutnya
   - footer .site: www.argakuka.com
   - rujukan MDN/web.dev di akhir bab
Bab React: React dimuat lewat CDN ESM dalam demo, bukan build tool.

## Batasan
- Tanpa commit. Tanpa file lain di luar daftar di atas.
- Tanpa em-dash. Tanpa puffery. Kalimat variatif. Jargon didefinisikan saat pertama muncul.
- Jika ada yang tidak pasti, buat keputusan paling sederhana dan catat di overview.md, jangan bertanya.

## Laporan akhir
Pesan terakhir Anda wajib: satu kalimat per file yang diproduksi, lalu baris "DONE bab <N>".
