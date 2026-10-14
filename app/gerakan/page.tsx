import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { dimensions } from '@/data/site';

export const metadata: Metadata = {
  title: 'Empat Pilar Gerakan',
  description:
    'Mengenal empat pilar perjuangan KMNU IPB University: Keislaman, Keilmuan, Kaderisasi, dan Khidmah untuk umat dan bangsa.',
};

export default function GerakanPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="section container subHero">
        <Reveal>
          <div className="section-label">01 / RUANG GERAK</div>
          <h1 className="subPageTitle">
            Empat pilar<br />
            <em>untuk berproses.</em>
          </h1>
          <p className="subPageLead">
            KMNU IPB bergerak di atas empat pilar utama yang saling menguatkan:
            menjaga sanad spiritual, mengembangkan intelektualitas akademik,
            mempersiapkan kepemimpinan kader, dan mengabdi nyata bagi masyarakat.
          </p>
        </Reveal>
      </section>

      {/* ── 4 PILAR DETAIL ───────────────────────────────── */}
      <section className="dimensionSection">
        {dimensions.map((d, index) => (
          <article className="dimensionDetail container" key={d.no}>
            <div className="dimensionNumberBlock">
              <span className="dimensionBigNum">{d.no}</span>
              <span className="dimensionTag">{d.label}</span>
            </div>

            <div className="dimensionContent">
              <Reveal>
                <span className="eyebrow" style={{ color: 'var(--gold)' }}>
                  PILAR KE-{index + 1}
                </span>
                <h2 className="dimensionTitle">{d.title}</h2>
                <p className="dimensionBodyText">{d.body}</p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="dimensionProgramBox">
                  <h4>PROGRAM PRIORITAS:</h4>
                  <ul className="dimensionProgramList">
                    {d.programs.map((prog) => (
                      <li key={prog}>
                        <span className="checkIcon" aria-hidden="true">
                          ✦
                        </span>
                        <span>{prog}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="dimensionVisualWrapper">
              <Reveal delay={0.2}>
                <ImagePlaceholder
                  src={d.image}
                  alt={`Ilustrasi pilar ${d.label}`}
                  className="dimensionHeroImage"
                />
              </Reveal>
            </div>
          </article>
        ))}
      </section>

      {/* ── CTA TO KEGIATAN ──────────────────────────────── */}
      <section className="section container ctaSection">
        <Reveal>
          <div className="section-label section-label-center">
            IMPLEMENTASI PROGRAM
          </div>
          <h2 className="ctaHeading">
            Dari konsep gerakan menuju <em>aksi nyata di kampus.</em>
          </h2>
          <p className="ctaBody">
            Lihat agenda kegiatan rutin, kaderisasi formal, serta aksi sosial KMNU IPB sepanjang tahun.
          </p>
          <div className="ctaActions">
            <Link href="/kegiatan" className="btnPrimary">
              Buka Kalender Kegiatan ↗
            </Link>
            <Link href="/arsip" className="textLink">
              Akses Modul & Dokumen Gerakan ↗
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
