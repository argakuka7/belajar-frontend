# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Add durable project-specific notes here as they are discovered through real work.

## Ilustrasi Kuka

Setiap bab merujuk dua PNG di `public/<bab>/img/kuka-*.png`; spesifikasi file, alt text, dan deskripsinya ada di `docs/plans/<bab>/kontrak-kuka.md` (nama file terkunci oleh halaman publik). Gaya: kartun datar, warna hangat, aksen oranye `#e68a3c` (`public/enhancements.css`). Acuan gaya karakter: ilustrasi ter-commit di repo saudara `argakuka7/Belajar-backend` (`public/assets/illustrations/`). Verifikasi runtime halaman (console bersih, demo jalan, ilustrasi termuat, tautan internal utuh) didefinisikan di `docs/plans/000-launch/testing.md`; situs statis, serve `public/` sebagai root (Netlify `publish = "public"`).

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
