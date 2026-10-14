'use client';

import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { activities } from '@/data/site';

const categories = ['SEMUA', 'KEISLAMAN', 'KEILMUAN', 'KADERISASI', 'KHIDMAH'];

export default function KegiatanPage() {
  const [activeTab, setActiveTab] = useState('SEMUA');

  const filtered =
    activeTab === 'SEMUA'
      ? activities
      : activities.filter((a) => a.category.toUpperCase() === activeTab);

  const featured = activities[0];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="section container subHero">
        <Reveal>
          <div className="section-label">01 / PROGRAM & KEGIATAN</div>
          <h1 className="subPageTitle">
            Dari ruang kajian<br />
            <em>hingga pengabdian.</em>
          </h1>
          <p className="subPageLead">
            Rangkaian agenda kaderisasi, seminar ilmiah, halaqah keislaman,
            dan aksi sosial yang diselenggarakan oleh KMNU IPB University
            sepanjang tahun akademik.
          </p>
        </Reveal>
      </section>

      {/* ── KEGIATAN UNGGULAN ────────────────────────────── */}
      <section className="container featuredSectionWrapper">
        <Reveal>
          <div className="featured">
            <ImagePlaceholder
              src={featured.image}
              alt={`Foto kegiatan ${featured.title}`}
              className="featuredImage"
            />
            <div className="featuredInfo">
              <div className="featuredBadgeGroup">
                <span className="eyebrow eyebrowGold">
                  PROGRAM UNGGULAN
                </span>
                <span className="badgeGold">{featured.badge}</span>
              </div>
              <h2 className="featuredTitle">{featured.title}</h2>
              <p className="featuredBody">{featured.body}</p>
              <div className="featuredMeta">
                <span>🗓 {featured.date}</span>
                <span>📍 {featured.location}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── FILTER & DAFTAR KEGIATAN ──────────────────────── */}
      <section className="section container sectionNoTop">
        <div className="filterHeader">
          <div>
            <div className="section-label">02 / DAFTAR PROGRAM KERJA</div>
            <h2 className="sectionSubHeading">
              Eksplorasi seluruh <em>agenda KMNU.</em>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="filterPills" role="tablist" aria-label="Filter kategori kegiatan">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeTab === cat}
                className={`filterPill ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Activity Grid */}
        <div className="activityCardGrid">
          {filtered.map((item, index) => (
            <Reveal key={item.id || item.title} delay={index * 0.08}>
              <article className="activityCardItem">
                <ImagePlaceholder
                  src={item.image}
                  alt={`Kegiatan: ${item.title}`}
                  className="activityCardImg"
                />
                <div className="activityCardContent">
                  <div className="activityCardMeta">
                    <span className="badgeCategory">{item.category}</span>
                    <span className="activityDate">{item.date}</span>
                  </div>
                  <h3 className="activityCardTitle">{item.title}</h3>
                  <p className="activityCardLocation">📍 {item.location}</p>
                  <p className="activityCardDesc">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="emptyState">
            <p>Tidak ada kegiatan untuk kategori ini saat ini.</p>
          </div>
        )}
      </section>

      {/* ── CTA / KOLABORASI ─────────────────────────────── */}
      <section className="section container sectionBorderTop">
        <div className="collabBox">
          <div className="collabCopy">
            <span className="eyebrow eyebrowGold">
              KOLABORASI & SINERGI
            </span>
            <h2>Ingin berkolaborasi mengadakan kegiatan bersama?</h2>
            <p className="muted">
              KMNU IPB terbuka bagi kerja sama lintas organisasi kampus, lembaga pesantren,
              instansi pemerintah, dan kemitraan masyarakat.
            </p>
          </div>
          <div className="collabAction">
            <a href="mailto:kmnu@apps.ipb.ac.id" className="btnPrimary">
              Hubungi Sekretariat ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
