# Fase 2: Konten Bab 1

Kembali ke [overview](overview.md).

## Goal
Naskah bab 1 lengkap di halaman publik, memenuhi STYLE_GUIDE.

## Changes
- `public/01-apa-itu-front-end/index.html`: naskah 900 sampai 1.400 kata, pasangan vanilla dan React berdampingan, satu blok Demo Hidup.

## Data structures
Pasangan contoh selalu vanilla dulu, React belakang, dalam satu `.pair`. Vanilla memakai `document.getElementById`. React memakai CDN sesuai ADR-0003, tanpa build tool. Demo Hidup memakai tombol yang mengubah teks halaman lewat DOM.

## Verification
Prosa lolos STYLE_GUIDE: tanpa em-dash, tanpa puffery, kalimat variatif, rujukan MDN dan web.dev di akhir bab. Demo jalan sekali klik.
