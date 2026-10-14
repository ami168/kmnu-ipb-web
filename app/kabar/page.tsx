import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { getNewsArticles } from '@/sanity/client';

export const metadata: Metadata = {
  title: 'Kabar & Warta Santri',
  description:
    'Warta terkini, liputan kegiatan, artikel keaswajaan, dan pemikiran santri mahasiswa KMNU IPB University.',
};

export default async function KabarPage() {
  const articles = await getNewsArticles();
  const lead = articles[0];
  const restNews = articles.slice(1);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="section container subHero">
        <Reveal>
          <div className="section-label">01 / WARTA & OPINI</div>
          <h1 className="subPageTitle">
            Catatan dari<br />
            <em>ruang santri.</em>
          </h1>
          <p className="subPageLead">
            Mendokumentasikan dinamika keilmuan, refleksi pemikiran Aswaja,
            serta liputan kegiatan mahasiswa Nahdlatul Ulama di IPB University.
          </p>
        </Reveal>
      </section>

      {/* ── LEAD ARTICLE ─────────────────────────────────── */}
      {lead && (
        <section className="container featuredSectionWrapper">
          <Reveal>
            <Link href={`/kabar/${lead.slug}`} className="leadArticleLink">
              <article className="leadArticleCard">
                <ImagePlaceholder
                  src={lead.image}
                  alt={`Foto artikel: ${lead.title}`}
                  className="leadArticleVisual"
                />
                <div className="leadArticleContent">
                  <div className="articleBadgeRow">
                    <span className="badgeCategory">{lead.category}</span>
                    {lead.tag && <span className="articleTag">{lead.tag}</span>}
                  </div>
                  <h2 className="leadArticleTitle">{lead.title}</h2>
                  <p className="leadArticleExcerpt">{lead.excerpt}</p>
                  <div className="articleAuthorMeta">
                    <div className="authorInfo">
                      <strong>{lead.author}</strong>
                      <span className="muted"> · {lead.readTime}</span>
                    </div>
                    <time className="articleTime">{lead.date}</time>
                  </div>
                  <span className="readMoreLink">Baca selengkapnya ↗</span>
                </div>
              </article>
            </Link>
          </Reveal>
        </section>
      )}

      {/* ── ARTICLE LIST ─────────────────────────────────── */}
      <section className="section container sectionNoTop">
        <div className="section-label">02 / ARTIKEL TERBARU</div>
        <div className="newsEditorialGrid">
          {restNews.map((item, index) => (
            <Reveal key={item.slug || item.id} delay={index * 0.1}>
              <Link href={`/kabar/${item.slug}`} className="newsEditorialCardLink">
                <article className="newsEditorialCard">
                  <ImagePlaceholder
                    src={item.image}
                    alt={`Ilustrasi warta: ${item.title}`}
                    className="newsEditorialImg"
                  />
                  <div className="newsEditorialBody">
                    <div className="articleBadgeRow">
                      <span className="badgeCategory">{item.category}</span>
                      {item.tag && <span className="articleTag">{item.tag}</span>}
                    </div>
                    <h3 className="newsEditorialTitle">{item.title}</h3>
                    <p className="newsEditorialExcerpt">{item.excerpt}</p>
                    <div className="newsEditorialFooter">
                      <span className="articleDate">{item.date}</span>
                      <span className="articleReadTime">{item.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── KONTRIBUSI TULISAN ───────────────────────────── */}
      <section className="section container sectionBorderTop">
        <div className="opiniSubmissionBox">
          <Reveal>
            <span className="eyebrow eyebrowGold">
              RUANG LITERASI SANTRI
            </span>
            <h2 className="opiniHeading">Punya gagasan atau opini ilmiah seputar Islam & Sains?</h2>
            <p className="muted opiniBody">
              Lembaga Pers & Redaksi KMNU IPB membuka rubrik opini, esai keagamaan,
              dan resensi buku bagi seluruh mahasiswa, santri, dan civitas akademika.
            </p>
            <div className="opiniAction">
              <a
                href="mailto:kmnu@apps.ipb.ac.id?subject=Pengiriman%20Naskah%20Opini%20KMNU%20IPB"
                className="btnPrimary"
              >
                Kirim Naskah Tulisan ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
