import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { site, history, values, emblem } from '@/data/site';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    'Mengenal KMNU IPB University: sejarah pendirian, visi misi, nilai-nilai Aswaja, serta lambang resmi santri di lingkungan kampus pertanian.',
};

export default function TentangPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="section container subHero">
        <Reveal>
          <div className="section-label">01 / TENTANG KMNU IPB</div>
          <h1 className="subPageTitle">
            Tradisi yang<br />
            <em>terus hidup.</em>
          </h1>
          <p className="subPageLead">
            KMNU IPB University merupakan ruang silaturahmi, pembelajaran,
            kaderisasi, dan pengabdian bagi mahasiswa Nahdlatul Ulama di
            lingkungan IPB University, Bogor.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="subHeroVisual">
            <ImagePlaceholder
              src="/assets/hero.jpg"
              alt="Keluarga Besar Mahasiswa Santri KMNU IPB University"
              className="subHeroImage"
            />
            <div className="subHeroBadge">
              <span className="eyebrow eyebrowGold">
                KOMISARIAT RESMI
              </span>
              <p>Menaungi mahasiswa Diploma, Sarjana, hingga Pascasarjana IPB</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 02 / LAMBANG & IDENTITAS RESMI ──────────────── */}
      <section className="section container sectionBorderTop">
        <div className="section-label">02 / IDENTITAS & LAMBANG RESMI</div>
        <div className="emblemGrid">
          <Reveal className="emblemVisualCard">
            <div className="emblemImageWrapper">
              <Image
                src="/assets/logo.png"
                alt="Lambang Resmi KMNU IPB"
                width={320}
                height={320}
                className="emblemLargeImage"
                priority
              />
            </div>
            <div className="emblemMeta">
              <h3>Lambang Resmi KMNU IPB</h3>
              <p className="emblemSubtitle">
                Keluarga Mahasiswa Nahdlatul Ulama IPB University
              </p>
              <div className="emblemActionGroup">
                <a
                  href="/assets/logo.png"
                  download="Logo-KMNU-IPB.png"
                  className="btnPrimary emblemDownloadBtn"
                >
                  Unduh Logo PNG (Transparan) ↓
                </a>
                <a
                  href="/assets/logo-original.jpg"
                  download="Logo-KMNU-IPB-Original.jpg"
                  className="btnOutline emblemDownloadBtnSecondary"
                >
                  Unduh Format Asli (JPG) ↓
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="emblemDescCard">
            <span className="eyebrow" style={{ color: 'var(--gold)' }}>
              FILOSOFI & MAKNA SIMBOL
            </span>
            <p className="emblemIntro">
              {emblem.description}
            </p>
            <div className="emblemElementsList">
              {emblem.elements.map((el, i) => (
                <div key={i} className="emblemElementItem">
                  <div className="emblemElementDot" />
                  <div>
                    <h4>{el.symbol}</h4>
                    <p>{el.meaning}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 03 / VISI & MISI ──────────────────────────────── */}
      <section className="section container sectionBorderTop">
        <div className="section-label">03 / VISI & MISI</div>
        <div className="visiMisiGrid">
          <Reveal className="visiCard">
            <span className="eyebrow">VISI ORGANISASI</span>
            <h2>
              Terwujudnya kader santri mahasiswa yang <em>unggul secara intelektual</em>, teguh beramaliah Aswaja, dan berdaya saing global.
            </h2>
            <p className="muted">
              Menjadi wadah perekat persaudaraan nahdliyin yang aktif berkontribusi
              dalam pengembangan biosains, pertanian berkelanjutan, dan kemaslahatan masyarakat.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="misiCard">
            <span className="eyebrow">MISI UTAMA</span>
            <ol className="misiList">
              <li>
                <strong>Kaderisasi Berkelanjutan</strong>
                <p>Menyelenggarakan pembinaan kepemimpinan formal dan kultural bagi mahasiswa NU dari berbagai fakultas di IPB.</p>
              </li>
              <li>
                <strong>Pelestarian Tradisi Keilmuan</strong>
                <p>Menjaga transmisi sanad keilmuan Islam melalui kajian kitab turats dan amaliah Ahlussunnah wal Jama\'ah.</p>
              </li>
              <li>
                <strong>Sinergi Sains & Nilai Keislaman</strong>
                <p>Mendorong riset, publikasi, dan diskusi kritis yang mengintegrasikan keilmuan modern dengan etika Islam.</p>
              </li>
              <li>
                <strong>Khidmah Sosial Nyata</strong>
                <p>Mengaplikasikan ilmu pengetahuan untuk pemberdayaan masyarakat desa dan komunitas lingkar kampus.</p>
              </li>
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ── 04 / LIMA NILAI ASWAJA ────────────────────────── */}
      <section className="section valuesSection">
        <div className="container">
          <div className="section-label">04 / NILAI DASAR ASWAJA</div>
          <div className="valuesHeader">
            <h2>
              Lima pijakan moral<br />
              <em>dalam melangkah.</em>
            </h2>
            <p className="valuesLead">
              Nilai-nilai Ahlussunnah wal Jama\'ah An-Nahdliyyah yang senantiasa
              menjiwai setiap gerak, pemikiran, dan tindakan kader KMNU IPB di ruang akademik maupun sosial.
            </p>
          </div>

          <div className="valuesGrid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="valueCard">
                <span className="valueIndex">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p className="valueMeaning">{v.meaning}</p>
                <p className="valueDesc">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 / KILAS BALIK & SEJARAH ───────────────────── */}
      <section className="section container">
        <div className="section-label">05 / KILAS BALIK</div>
        <div className="timelineIntro">
          <h2>
            Jejak perjalanan<br />
            <em>KMNU di IPB.</em>
          </h2>
          <p>
            Dari inisiatif mahasiswa pascasarjana pada tahun 2007 hingga menjadi
            salah satu deklarator berdirinya KMNU Nasional di Yogyakarta.
          </p>
        </div>

        <div className="timeline">
          {history.map((h, i) => (
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

      {/* ── EKOSISTEM MA'HAD JAWI ────────────────────────── */}
      <section className="ecosystem">
        <ImagePlaceholder
          src="/assets/ecosystem.jpg"
          alt="Silaturahmi dan Halal Bihalal Santri KMNU IPB"
          className="ecosystemVisual"
        />
        <div className="ecosystemCopy">
          <span className="eyebrow">EKOSISTEM KAMPUS</span>
          <h2>
            Ma\'had Jawi:<br />
            Di mana tradisi bertemu <em>masa depan.</em>
          </h2>
          <p>
            Berlokasi di kawasan Babakan Dramaga, Ma\'had Jawi menjadi ruang
            spiritual dan intelektual tempat mahasiswa santri mengkaji kitab kuning,
            berdiskusi, dan merawat ikatan kebersamaan di sela aktivitas perkuliahan.
          </p>
          <div className="ecosystemActions">
            <Link className="btnOutline" href="/gerakan">
              Lihat Empat Pilar Gerakan ↗
            </Link>
            <Link className="btnOutline" href="/pengurus">
              Susunan Pengurus ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
