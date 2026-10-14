import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { archives } from '@/data/site';

export const metadata: Metadata = {
  title: 'Arsip & Repositori Digital',
  description:
    'Repositori digital KMNU IPB University: dokumen konstitusi, modul kajian keaswajaan, laporan tahunan, dan galeri visual kegiatan.',
};

export default function ArsipPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="section container subHero">
        <Reveal>
          <div className="section-label">01 / REPOSITORI DIGITAL</div>
          <h1 className="subPageTitle">
            Yang pernah<br />
            <em>kami jalani.</em>
          </h1>
          <p className="subPageLead">
            Dokumentasi perjalanan, materi kajian keilmuan, konstitusi organisasi,
            serta arsip visual yang merekam jejak langkah pengabdian KMNU IPB University.
          </p>
        </Reveal>
      </section>

      {/* ── DOKUMEN & MODUL REPOSITORI ───────────────────── */}
      <section className="section container sectionNoTop">
        <div className="section-label">02 / DOKUMEN & MATERI KAJIAN</div>
        <div className="archiveDocGrid">
          {archives.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <article className="archiveDocCard">
                <div className="archiveDocHeader">
                  <span className="badgeCategory">{item.category}</span>
                  <span className="archiveDocType">{item.fileType}</span>
                </div>
                <h3 className="archiveDocTitle">{item.title}</h3>
                <p className="archiveDocDesc">{item.desc}</p>
                <div className="archiveDocFooter">
                  <span className="archiveDocDate">{item.date}</span>
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="archiveDownloadLink"
                    aria-label={`Unduh ${item.title}`}
                  >
                    Buka Dokumen ↗
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── ARSIP VISUAL GALERI ─────────────────────────── */}
      <section className="section archiveVisualSection">
        <div className="container">
          <div className="section-label">
            03 / GALERI VISUAL
          </div>
          <div className="archiveVisualHeader">
            <h2>
              Rekaman lensa<br />
              <em>kebersamaan santri.</em>
            </h2>
            <p className="muted">
              Potret aktivitas halaqah, bakti sosial, kaderisasi, dan dinamika kebersamaan
              keluarga besar mahasiswa Nahdlatul Ulama di IPB.
            </p>
          </div>

          <div className="archivePhotoGrid">
            <div className="archivePhotoCol aCol1">
              <Reveal>
                <ImagePlaceholder
                  src="/assets/archive-01.jpg"
                  alt="Dokumentasi Ziarah Ulama KH Raden Saleh"
                  className="archivePhotoItem"
                />
                <span className="photoCaption">Tradisi Ziarah Ulama & Tabarruk Aswaja</span>
              </Reveal>
              <Reveal delay={0.1}>
                <ImagePlaceholder
                  src="/assets/archive-02.jpg"
                  alt="Kajian Kitab dan Nuzulul Quran"
                  className="archivePhotoItem"
                />
                <span className="photoCaption">Halaqah & Pembacaan Kitab Turats Nuzulul Quran</span>
              </Reveal>
            </div>

            <div className="archivePhotoCol aCol2">
              <Reveal delay={0.15}>
                <ImagePlaceholder
                  src="/assets/archive-03.jpg"
                  alt="Semarak Lomba Kemerdekaan Santri"
                  className="archivePhotoItem"
                />
                <span className="photoCaption">Kebersamaan & Semarak Lomba 17 Agustus Santri</span>
              </Reveal>
              <Reveal delay={0.2}>
                <ImagePlaceholder
                  src="/assets/archive-04.jpg"
                  alt="Wisuda Sarjana & Magister Santri Mahasiswa IPB"
                  className="archivePhotoItem"
                />
                <span className="photoCaption">Pelepasan Wisudawan Santri Mahasiswa IPB University</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── INFO SUMBANGSIH ARSIP ────────────────────────── */}
      <section className="section container ctaSection">
        <Reveal>
          <div className="section-label section-label-center">
            KONTRIBUSI DOKUMENTASI
          </div>
          <h2 className="ctaHeading">
            Memiliki foto lawas atau dokumen <em>sejarah KMNU IPB?</em>
          </h2>
          <p className="ctaBody">
            Bantu kami merawat memori kolektif organisasi dengan mengirimkan salinan foto, buletin,
            atau arsip ke tim kepustakaan digital KMNU IPB.
          </p>
          <div className="ctaActions">
            <a href="mailto:kmnu@apps.ipb.ac.id?subject=Kontribusi%20Arsip%20KMNU%20IPB" className="btnPrimary">
              Hubungi Tim Arsip & Media ↗
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
