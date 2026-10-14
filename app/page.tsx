import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import {
  site,
  dimensions,
  history,
  activities,
  news,
  board,
} from '@/data/site';

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero container">
        <Reveal className="heroCopy">
          <div className="heroOfficialBadge">
            <Image
              src="/assets/logo.png"
              alt="Logo Resmi KMNU IPB"
              width={32}
              height={32}
              className="heroBadgeLogo"
              priority
            />
            <span className="eyebrow">{site.fullName.toUpperCase()}</span>
          </div>
          <h1 className="heroTitle">
            Merawat tradisi.<br />
            <em>Mengembangkan ilmu.</em>
          </h1>
          <p className="heroLead">{site.description}</p>
          <div className="heroMeta">
            <span className="heroMetaLocation">BOGOR · JAWA BARAT</span>
            <i className="rule" />
            <span className="heroMetaEst">EST. {site.established}</span>
          </div>
        </Reveal>

        <Reveal className="heroVisual" delay={0.2}>
          <ImagePlaceholder
            src="/assets/hero.jpg"
            alt="Keluarga Besar Mahasiswa Santri KMNU IPB University"
            className="heroPhotoA"
          />
          <ImagePlaceholder
            src="/assets/hero-detail.jpg"
            alt="Kajian Kitab dan Nuzulul Quran Santri KMNU IPB"
            className="heroPhotoB"
          />
          <span className="vertical" aria-hidden="true">
            TRADITION · KNOWLEDGE · SERVICE
          </span>
          <span className="index" aria-hidden="true">
            01 / 05
          </span>
        </Reveal>
      </section>

      {/* ── 01 / IDENTITAS & TENTANG ──────────────────────── */}
      <section className="section container" id="tentang">
        <div className="section-label">01 / IDENTITAS</div>
        <div className="introGrid">
          <Reveal>
            <div className="identityHeaderBlock">
              <Image
                src="/assets/logo.png"
                alt="Emblem Resmi KMNU IPB"
                width={72}
                height={72}
                className="identityEmblem"
              />
              <h2>
                Sebuah ruang<br />
                <em>untuk bertumbuh.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal className="introText" delay={0.15}>
            <p>
              KMNU IPB merupakan ruang silaturahmi, pembelajaran, kaderisasi,
              dan pengabdian bagi mahasiswa Nahdlatul Ulama di lingkungan IPB
              University.
            </p>
            <p className="muted">
              Di antara tradisi keilmuan pesantren dan dinamika akademik kampus,
              KMNU hadir sebagai rumah untuk belajar dengan sanad, berdiskusi
              dengan data, berproses dalam kepemimpinan, dan menghidupkan nilai-nilai
              Aswaja An-Nahdliyyah bagi kemaslahatan masyarakat.
            </p>
            <div className="introAction">
              <Link href="/tentang" className="textLink">
                Pelajari visi, misi & sejarah selengkapnya ↗
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 02 / EMPAT RUANG GERAK ────────────────────────── */}
      <section className="dimensionSection" id="gerakan">
        <div className="container dimensionHeader">
          <div className="section-label">02 / RUANG GERAK</div>
          <h2>
            Empat ruang<br />
            <em>untuk berproses.</em>
          </h2>
        </div>

        {dimensions.map((d) => (
          <article className="dimension container" key={d.no}>
            <div className="dimensionNum">{d.no}</div>
            <div className="dimensionText">
              <Reveal>
                <p className="eyebrow">{d.label}</p>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
                <div className="dimensionAction">
                  <Link href="/gerakan" className="textLink">
                    Pelajari pilar {d.label.toLowerCase()} ↗
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="dimensionImage">
              <ImagePlaceholder
                src={d.image}
                alt={`Ilustrasi pilar ${d.label.toLowerCase()}`}
              />
            </Reveal>
          </article>
        ))}
      </section>

      {/* ── 03 / PERJALANAN HISTORIS ──────────────────────── */}
      <section className="section container">
        <div className="section-label">03 / PERJALANAN</div>
        <div className="timelineIntro">
          <Reveal>
            <h2>
              Perjalanan yang<br />
              <em>terus tumbuh.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Jejak langkah KMNU IPB dalam merawat tradisi intelektual pesantren,
              mengembangkan jejaring santri mahasiswa, dan membangun sinergi
              bersama alumni dan civitas akademika IPB.
            </p>
          </Reveal>
        </div>

        <div className="timeline">
          {history.slice(0, 4).map((h, i) => (
            <Reveal key={h.year} delay={i * 0.1}>
              <article className="milestone">
                <i />
                <time>{h.year}</time>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── IMMERSIVE STORYTELLING ────────────────────────── */}
      <section className="immersive">
        <div className="stickyVisual">
          <ImagePlaceholder
            src="/assets/immersive.jpg"
            alt="Suasana malam keakraban api unggun kaderisasi Istilahul Qudroh (IQ) KMNU IPB"
          />
          <div className="immersiveCopy">
            <p className="eyebrow">RUANG KEBERSAMAAN</p>
            <h2>
              Belajar.<br />
              Berproses.<br />
              <em>Berkhidmah.</em>
            </h2>
            <span className="eyebrow" aria-hidden="true">
              KEBERLANJUTAN · INTEGRITAS · KEILMUAN
            </span>
          </div>
        </div>
      </section>

      {/* ── 04 / PROGRAM KEGIATAN ─────────────────────────── */}
      <section className="section container" id="kegiatan">
        <div className="section-label">04 / KEGIATAN</div>
        <div className="activityHead">
          <h2>
            Dari ruang kajian<br />
            <em>hingga ruang pengabdian.</em>
          </h2>
          <Link href="/kegiatan" className="textLink">
            Lihat semua kegiatan ↗
          </Link>
        </div>

        <Reveal>
          <div className="featured">
            <ImagePlaceholder
              src={activities[0].image}
              alt="Halaqah Akademik Nahdliyin"
              className="featuredImage"
            />
            <div className="featuredInfo">
              <span className="eyebrow" style={{ color: '#d8c38b' }}>
                {activities[0].category} · UNGGULAN
              </span>
              <h3 className="featuredTitle">{activities[0].title}</h3>
              <p className="featuredBody">{activities[0].body}</p>
              <span className="date">{activities[0].date}</span>
            </div>
          </div>
        </Reveal>

        <div className="activityGrid">
          {activities.slice(1, 3).map((a, i) => (
            <Reveal key={a.title} delay={i * 0.15}>
              <article className="activityCard">
                <ImagePlaceholder src={a.image} alt={a.title} />
                <p className="meta">
                  {a.category} · {a.date}
                </p>
                <h3>{a.title}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 05 / KABAR TERBARU ────────────────────────────── */}
      <section className="section newsSection" id="kabar">
        <div className="container">
          <div className="section-label">05 / KABAR</div>
          <div className="newsHead">
            <h2>
              Catatan<br />
              <em>dari KMNU.</em>
            </h2>
            <span className="eyebrow muted">BERITA · ARTIKEL · OPINI</span>
          </div>

          <Reveal>
            <article className="leadNews">
              <ImagePlaceholder
                src={news[0].image}
                alt={news[0].title}
              />
              <div className="leadCopy">
                <span className="eyebrow" style={{ color: 'var(--gold)' }}>
                  FEATURE REPORT
                </span>
                <h3>{news[0].title}</h3>
                <p>{news[0].excerpt}</p>
                <div className="leadNewsAction">
                  <span className="date">
                    {news[0].date}
                  </span>
                  <Link href={`/kabar/${news[0].id || 'mahad-jawi-saintifik'}`} className="textLink">
                    Baca warta ↗
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="newsList">
            {news.slice(1).map((n) => (
              <Link href={`/kabar/${n.id || 'warta-' + n.no}`} className="newsItem" key={n.no}>
                <span>{n.no}</span>
                <strong>{n.title}</strong>
                <small>{n.date}</small>
                <b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EKOSISTEM MA'HAD JAWI ────────────────────────── */}
      <section className="ecosystem">
        <ImagePlaceholder
          src="/assets/ecosystem.jpg"
          alt="Silaturahmi dan Halal Bihalal Keluarga Besar KMNU IPB"
          className="ecosystemVisual"
        />
        <div className="ecosystemCopy">
          <p className="eyebrow">EKOSISTEM</p>
          <h2>
            Di mana tradisi<br />
            bertemu <em>masa depan.</em>
          </h2>
          <p>
            Ma’had Jawi menjadi salah satu ruang yang mempertemukan tradisi
            pesantren, mahasiswa santri, akademisi, alumni, dan jejaring
            keilmuan Nahdliyin di lingkungan IPB University.
          </p>
          <div className="ecosystemAction">
            <Link className="btnOutline" href="/tentang">
              Pelajari Ekosistem KMNU ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ── 06 / PENGURUS ─────────────────────────────────── */}
      <section className="section container" id="pengurus">
        <div className="section-label">06 / PENGURUS</div>
        <div className="peopleIntro">
          <Reveal>
            <h2>
              Orang-orang<br />
              di balik <em>KMNU IPB.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Organisasi tumbuh melalui ikhtiar para kader yang belajar,
              bekerja, dan menjaga keberlanjutannya bersama dalam Kabinet
              Al-Khidmah wal-Ijtihad.
            </p>
          </Reveal>
        </div>

        <div className="board">
          {board.map((b, i) => (
            <div
              className={`boardCell ${i === 0 ? 'boardLead' : ''}`}
              key={b.role}
            >
              <p className="eyebrow">{b.role}</p>
              <h3>{b.name}</h3>
              <small>{b.period}</small>
            </div>
          ))}
        </div>

        <div className="sectionFootAction">
          <Link className="textLink" href="/pengurus">
            Lihat struktur departemen lengkap ↗
          </Link>
        </div>
      </section>

      {/* ── 07 / JEJARING NASIONAL & KAMPUS ──────────────── */}
      <section className="section networkSection">
        <div className="container">
          <div className="section-label">07 / JEJARING</div>
          <div className="networkGrid">
            <Reveal>
              <h2>
                Bagian dari<br />
                <em>jejaring yang luas.</em>
              </h2>
              <p>
                Hubungan KMNU IPB dengan rektorat dan ormawa IPB University,
                jejaring KMNU se-Nusantara, pesantren di tanah air, ikatan
                alumni santri, dan mitra kemasyarakatan merupakan ekosistem
                yang terus bertumbuh harmonis.
              </p>
              <div className="networkHighlights">
                <Link href="/pengurus#pembina" className="networkPillLink">
                  <span>✦</span>
                  <strong>Majelis Pembina & Alim Ulama</strong>
                  <i>↗</i>
                </Link>
                <Link href="/pengurus#alumni" className="networkPillLink">
                  <span>✦</span>
                  <strong>IKALUM (1.200+ Alumni)</strong>
                  <i>↗</i>
                </Link>
              </div>
            </Reveal>
            <div className="networkMap" role="img" aria-label="Diagram jejaring ekosistem KMNU IPB">
              <span className="connector c1" />
              <span className="connector c2" />
              <span className="connector c3" />
              <span className="connector c4" />
              <span className="connector c5" />
              <div className="node center">KMNU IPB</div>
              <div className="node a">IPB UNIVERSITY</div>
              <div className="node b">KMNU NASIONAL</div>
              <div className="node c">PESANTREN</div>
              <div className="node d">IKATAN ALUMNI</div>
              <div className="node e">MITRA SOSIAL</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 08 / ARSIP VISUAL ─────────────────────────────── */}
      <section className="section container">
        <div className="archiveHead">
          <div>
            <div className="section-label">08 / ARSIP VISUAL</div>
            <h2>
              Yang pernah<br />
              <em>kami jalani.</em>
            </h2>
          </div>
          <Link href="/arsip" className="textLink">
            Buka seluruh arsip ↗
          </Link>
        </div>

        <div className="archiveGrid">
          <ImagePlaceholder
            src="/assets/archive-01.jpg"
            alt="Dokumentasi Ziarah Ulama KH Raden Saleh"
            className="a1"
          />
          <ImagePlaceholder
            src="/assets/archive-02.jpg"
            alt="Dokumentasi Kajian Nuzulul Quran"
            className="a2"
          />
          <ImagePlaceholder
            src="/assets/archive-03.jpg"
            alt="Dokumentasi Lomba Kemerdekaan Santri"
            className="a3"
          />
          <ImagePlaceholder
            src="/assets/archive-04.jpg"
            alt="Dokumentasi Wisuda Santri Mahasiswa IPB"
            className="a4"
          />
        </div>
      </section>
    </>
  );
}
