'use client';

import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/data/site';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="siteFooter" role="contentinfo">
      <div className="container">
        <div className="footerTop">
          <div className="footerBrand">
            <div className="footerBrandRow">
              <Image
                src="/assets/logo.png"
                alt="Lambang Resmi KMNU IPB"
                width={64}
                height={64}
                className="footerLogo"
              />
              <h2>
                KMNU <span>IPB</span>
              </h2>
            </div>
            <p className="footerMotto">
              Merawat tradisi.
              <br />
              Mengembangkan ilmu.
              <br />
              <em>Berkhidmah untuk umat.</em>
            </p>
            <div className="footerSecretariat">
              <span className="eyebrow" style={{ color: '#d8c38b' }}>
                SEKRETARIAT
              </span>
              <p>{site.secretariat}</p>
              <a
                href={`mailto:${site.email}`}
                className="footerEmailLink"
                aria-label="Kirim email ke KMNU IPB"
              >
                {site.email} ↗
              </a>
            </div>
          </div>

          <div className="footerLinks">
            <div>
              <b>NAVIGASI</b>
              <Link href="/">Beranda</Link>
              <Link href="/tentang">Tentang KMNU</Link>
              <Link href="/gerakan">Empat Pilar Gerakan</Link>
              <Link href="/kegiatan">Program Kegiatan</Link>
              <Link href="/kabar">Kabar & Artikel</Link>
            </div>
            <div>
              <b>ORGANISASI</b>
              <Link href="/pengurus">Struktur Pengurus</Link>
              <Link href="/pengurus#pembina">Majelis Pembina</Link>
              <Link href="/pengurus#alumni">Jejaring Alumni (IKALUM)</Link>
              <Link href="/arsip">Arsip & Dokumen</Link>
              <a
                href="https://kmnu.or.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KMNU Nasional (buka di tab baru)"
              >
                KMNU Nasional ↗
              </a>
              <a
                href="https://ipb.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IPB University (buka di tab baru)"
              >
                IPB University ↗
              </a>
            </div>
            <div>
              <b>MEDIA SOSIAL</b>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram KMNU IPB (buka di tab baru)"
              >
                Instagram ↗
              </a>
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube KMNU IPB (buka di tab baru)"
              >
                YouTube ↗
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn KMNU IPB (buka di tab baru)"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <div className="footerBottomLeft">
            <span>© {new Date().getFullYear()} {site.fullName}.</span>
            <span className="footerLocation">{site.location.toUpperCase()}</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="backToTopBtn"
            aria-label="Kembali ke atas halaman"
          >
            <span>KEMBALI KE ATAS</span>
            <span className="arrowUp" aria-hidden="true">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
