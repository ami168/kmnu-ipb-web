import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { boardStructure, advisoryBoard, alumniNetwork } from '@/data/site';

export const metadata: Metadata = {
  title: 'Struktur Pengurus & Jejaring',
  description:
    'Struktur kepengurusan KMNU IPB University: Majelis Pembina, Badan Pengurus Harian (BPH), Departemen, dan Jejaring Alumni (IKALUM).',
};

export default function PengurusPage() {
  const { period, cabinetName, bph, departments } = boardStructure;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="section container subHero">
        <Reveal>
          <div className="section-label">01 / STRUKTUR ORGANISASI</div>
          <h1 className="subPageTitle">
            Orang-orang di balik<br />
            <em>KMNU IPB.</em>
          </h1>
          <p className="subPageLead">
            Organisasi tumbuh dan berdaya melalui bimbingan para ulama & akademisi senior,
            ikhtiar kader mahasiswa yang berkhidmat dalam kepengurusan, serta jejaring
            ribuan alumni yang tersebar di penjuru nusantara.
          </p>
          <div className="cabinetBadgeRow">
            <span className="cabinetBadge">{cabinetName}</span>
            <span className="periodBadge">PERIODE {period}</span>
          </div>
        </Reveal>
      </section>

      {/* ── 02 / MAJELIS PEMBINA & DEWAN PENASIHAT ────────── */}
      <section className="section container sectionNoTop" id="pembina">
        <div className="section-label">02 / MAJELIS PEMBINA & PENASIHAT</div>
        <div className="deptIntro">
          <Reveal>
            <h2>
              Sanad keilmuan,<br />
              <em>bimbingan, dan arah.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="muted">
              KMNU IPB senantiasa berpegang teguh pada arahan dan keteladanan para
              guru besar, dosen senior IPB University, serta alim ulama pondok
              pesantren yang mengawal transmisi keilmuan dan legitimasi organisasi.
            </p>
          </Reveal>
        </div>

        <div className="advisoryGrid">
          {advisoryBoard.map((adv, index) => (
            <Reveal key={adv.role} delay={index * 0.1}>
              <article className="advisoryCard">
                <div className="advisoryRole">{adv.role}</div>
                <h3 className="advisoryName">{adv.name}</h3>
                <p className="advisoryTitle">{adv.title}</p>
                <p className="advisoryNote">{adv.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 03 / BPH SECTION ─────────────────────────────── */}
      <section className="section container" id="bph">
        <div className="section-label">03 / BADAN PENGURUS HARIAN (BPH)</div>
        <div className="bphGrid">
          {bph.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.1}>
              <article className={`bphCard ${item.lead ? 'bphLeaderCard' : ''}`}>
                <div className="bphRoleBadge">{item.role}</div>
                <h2 className="bphName">{item.name}</h2>
                <p className="bphMajor">{item.major}</p>
                <blockquote className="bphQuote">"{item.quote}"</blockquote>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 04 / DEPARTEMEN SECTION ───────────────────────── */}
      <section className="section departemenSection" id="departemen">
        <div className="container">
          <div className="section-label">04 / DEPARTEMEN & BIRO KERJA</div>
          <div className="deptIntro">
            <Reveal>
              <h2>
                Lima poros penggerak<br />
                <em>roda khidmah organisasi.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="muted">
                Setiap departemen memegang mandat strategis untuk memastikan proses kaderisasi,
                syiar keilmuan, dan pelayanan sosial kemasyarakatan berjalan berkelanjutan.
              </p>
            </Reveal>
          </div>

          <div className="departmentGrid">
            {departments.map((dept, index) => (
              <Reveal key={dept.name} delay={index * 0.08}>
                <div className="deptCard">
                  <div className="deptCardHeader">
                    <span className="deptIndex">0{index + 1}</span>
                    <h3 className="deptTitle">{dept.name}</h3>
                  </div>
                  <div className="deptLeadInfo">
                    <span className="eyebrow eyebrowGold">
                      KETUA DEPARTEMEN
                    </span>
                    <p className="deptLeadName">{dept.lead}</p>
                  </div>
                  <p className="deptDesc">{dept.roleDesc}</p>
                  <div className="deptPrograms">
                    <span className="eyebrow eyebrowMuted">
                      PROGRAM UNGGULAN:
                    </span>
                    <ul className="deptProgramList">
                      {dept.programs.map((p) => (
                        <li key={p}>✦ {p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 / JEJARING ALUMNI (IKALUM KMNU IPB) ────────── */}
      <section className="section alumniSection" id="alumni">
        <div className="container">
          <div className="section-label">05 / JEJARING ALUMNI (IKALUM)</div>
          <div className="alumniIntro">
            <Reveal>
              <h2>
                Ikatan Alumni KMNU IPB:<br />
                <em>Jejak khidmah lintas sektor.</em>
              </h2>
              <div className="alumniLeadBadge">
                <span>✦</span>
                <span>{alumniNetwork.lead}</span>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="alumniIntroLead">{alumniNetwork.summary}</p>
            </Reveal>
          </div>

          {/* 4 Pilar Sebaran Alumni */}
          <div className="alumniPillarsGrid">
            {alumniNetwork.pillars.map((pil, idx) => (
              <Reveal key={pil.sector} delay={idx * 0.08}>
                <div className="alumniPillarCard">
                  <span className="alumniPillarCount">{pil.count}</span>
                  <h3 className="alumniPillarSector">{pil.sector}</h3>
                  <p className="alumniPillarDesc">{pil.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sinergi Alumni & Mahasiswa */}
          <Reveal delay={0.2}>
            <div className="alumniSynergiesContainer">
              <div className="alumniSynergiesHeader">
                <span className="eyebrow" style={{ color: 'var(--gold)' }}>
                  PROGRAM SINERGI ALUMNI & MAHASISWA AKTIF
                </span>
                <h3 style={{ fontSize: '1.45rem', marginTop: 8 }}>
                  Menjembatani Dunia Kampus dan Pengabdian Pascakampus
                </h3>
              </div>
              <div className="alumniSynergiesGrid">
                {alumniNetwork.synergies.map((syn) => (
                  <div key={syn.title} className="alumniSynergyCard">
                    <h4 className="alumniSynergyTitle">{syn.title}</h4>
                    <p className="alumniSynergyDesc">{syn.desc}</p>
                  </div>
                ))}
              </div>
              <div className="alumniCtaBox">
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                    Alumni KMNU IPB University?
                  </p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: 4 }}>
                    Perbarui data alumni Anda untuk memperkuat silaturahmi dan jaringan kolaborasi nasional.
                  </p>
                </div>
                <a
                  href={`mailto:${siteContactEmail}`}
                  className="btnOutline"
                >
                  Hubungi Presidium IKALUM ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 06 / KADERISASI CTA ───────────────────────────── */}
      <section className="section container ctaSection">
        <Reveal>
          <div className="section-label section-label-center">
            REGENERASI & KADERISASI
          </div>
          <h2 className="ctaHeading">
            Ingin berproses dan berkhidmah <em>bersama KMNU IPB?</em>
          </h2>
          <p className="ctaBody">
            Pintu silaturahmi senantiasa terbuka lebar bagi seluruh mahasiswa Muslim
            Ahlussunnah wal Jama’ah di kampus IPB University.
          </p>
          <div className="ctaActions">
            <Link href="/kegiatan" className="btnPrimary">
              Ikuti Istilahul Qudroh (IQ) Penerimaan Anggota ↗
            </Link>
            <Link href="/tentang" className="textLink">
              Pelajari Visi & Sejarah Kami ↗
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

const siteContactEmail = 'kmnu@apps.ipb.ac.id';
