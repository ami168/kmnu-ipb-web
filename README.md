# KMNU IPB — Official Website & Digital Repository

Website resmi Keluarga Mahasiswa Nahdlatul Ulama (KMNU) IPB University.
Dirancang dengan pendekatan **Institutional Editorial** yang memadukan tradisi keilmuan pesantren (*turats*) dan integritas akademik modern IPB University.

## 🎨 Karakter Desain & UI/UX
- **Tipografi**: *DM Serif Display* untuk aksen editorial & judul monumental; *Manrope* untuk keterbacaan teks fungsional.
- **Palet Warna**: *Paper* (`#f6f6f1`), *Forest Green* (`#075844`), *Deep Ink* (`#14211d`), dan *Antique Gold* (`#c79a3d`).
- **Aksesibilitas (WCAG 2.1 AA)**: Skip-to-content link, kontras teks terverifikasi (min 4.5:1), indikator fokus keyboard (`:focus-visible`), dan adaptasi `prefers-reduced-motion`.
- **Navigasi Responsif**: Header transparan ke frosted glass saat scroll, active indicator per halaman, dan animated hamburger menu mobile dengan keyboard navigation (ESC close) serta scroll lock.

## 🛠️ Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Static Generation)
- **Library**: [React 19](https://react.dev/)
- **Bahasa**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: CSS Murni Bertoken (Zero-runtime overhead, tanpa framework bloated)

## 📁 Struktur Halaman
- `/` — Homepage storytelling (Hero, Identitas, Ruang Gerak, Linimasa Historis, Immersive Kebersamaan, Program Unggulan, Warta, Ekosistem Ma'had Jawi, BPH, Jejaring Diagram, Galeri)
- `/tentang` — Sejarah lengkap, Visi & Misi organisasi, 5 Nilai Karakter Aswaja An-Nahdliyyah, dan Ekosistem Ma'had Jawi
- `/gerakan` — Penjelasan mendalam Empat Pilar Gerakan (Keislaman, Keilmuan, Kaderisasi, Khidmah) beserta program prioritas
- `/kegiatan` — Kalender & daftar kegiatan interaktif dengan filter kategori (Keislaman, Keilmuan, Kaderisasi, Khidmah)
- `/kabar` — Portal warta santri, liputan kegiatan, artikel keaswajaan, dan callout pengiriman opini
- `/pengurus` — Struktur Badan Pengurus Harian (BPH) dan 5 Departemen/Biro Kerja Kabinet Al-Khidmah wal-Ijtihad
- `/arsip` — Repositori digital dokumen organisasi (AD/ART, modul, LPJ) dan galeri visual kegiatan
- `/not-found` — Halaman 404 berstandar editorial dengan navigasi pemulihan

## 🚀 Menjalankan Project

### Mode Pengembangan (Development)
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### Mode Produksi (Production Build)
```bash
npm run build
npm start
```

## 📝 Sumber Data & Kustomisasi
Seluruh konten, kontak, susunan kepengurusan, warta, dan repositori dokumen dikelola secara terpusat melalui file:
```
data/site.tsx
```
Untuk memperbarui data pengurus resmi, link media sosial, atau rilis warta terbaru, cukup sesuaikan objek data pada file tersebut.
