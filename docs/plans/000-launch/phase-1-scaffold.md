# Fase 1: Scaffold

Kembali ke [overview](overview.md).

## Goal
Repo hidup dengan struktur final: beranda berisi daftar isi 24 bab, netlify.toml, STYLE_GUIDE, empat ADR, CONTEXT.md, kerangka plans.

## Changes
- README.md: judul, daftar isi, konvensi seri.
- CONTEXT.md: glosarium (Versi Sederhana, Naskah Sumber, Kontrak Kuka, Demo Hidup, Fase, Verifikasi).
- docs/adr/0001-0004: keputusan arah dari sesi grill.
- netlify.toml: publish public/.
- tools/STYLE_GUIDE.md: aturan unslop penulisan.

## Data structures
Skema folder bab (backend pattern): docs/plans/<NN-bab>/ berisi konsep.md, kontrak-kuka.md, overview.md, phase-1-scaffold.md, phase-2-konten.md, phase-3-ilustrasi.md. Halaman publik: public/<bab>/index.html.

## Verification
Halaman beranda terbuka tanpa error; daftar isi 25 entri (0-24); struktur folder sesuai skema.
