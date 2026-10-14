import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import PortableTextRenderer from '@/components/PortableTextRenderer';
import { getArticleBySlug, getNewsArticles } from '@/sanity/client';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getNewsArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Warta Tidak Ditemukan',
    };
  }

  return {
    title: `${article.title} — KMNU IPB`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = await getNewsArticles();
  const relatedArticles = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article className="articleDetailRoot">
      {/* ── BREADCRUMB & HEADER ──────────────────────────── */}
      <header className="articleHeader container">
        <div className="articleBreadcrumb">
          <Link href="/">Beranda</Link>
          <span className="sep">/</span>
          <Link href="/kabar">Kabar & Warta</Link>
          <span className="sep">/</span>
          <span className="current">{article.category}</span>
        </div>

        <div className="articleBadgeRow">
          <span className="badgeCategory">{article.category}</span>
          {article.tag && <span className="articleTag">{article.tag}</span>}
        </div>

        <h1 className="articleMainTitle">{article.title}</h1>

        <p className="articleLeadText">{article.excerpt}</p>

        <div className="articleMetaBar">
          <div className="authorMetaBox">
            <div className="authorAvatar">
              <span>{article.author.charAt(0)}</span>
            </div>
            <div>
              <strong className="authorName">{article.author}</strong>
              <small className="authorRole">{article.authorRole || 'Kontributor Santri'}</small>
            </div>
          </div>

          <div className="articleTimeBox">
            <time className="articlePublishDate">{article.date}</time>
            <span className="articleReadBadge">⏱ {article.readTime}</span>
          </div>
        </div>
      </header>

      {/* ── FEATURED IMAGE ───────────────────────────────── */}
      <section className="container articleHeroVisualSection">
        <Reveal>
          <div className="articleVisualWrapper">
            <ImagePlaceholder
              src={article.image}
              alt={article.title}
              className="articleHeroImage"
            />
            {article.caption && (
              <figcaption className="articleCaption">
                <span>✦</span> {article.caption}
              </figcaption>
            )}
          </div>
        </Reveal>
      </section>

      {/* ── ARTICLE BODY CONTENT ─────────────────────────── */}
      <section className="container articleContentLayout">
        <div className="articleContentBody">
          <PortableTextRenderer value={article.body} />

          {/* Social Share Bar */}
          <div className="articleShareBar">
            <span className="shareLabel">BAGIKAN WARTA INI:</span>
            <div className="shareLinks">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  `${article.title} — KMNU IPB University`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shareBtn waBtn"
                aria-label="Bagikan ke WhatsApp"
              >
                WhatsApp
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  `${article.title} — KMNU IPB`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shareBtn xBtn"
                aria-label="Bagikan ke X Twitter"
              >
                X (Twitter)
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/`}
                target="_blank"
                rel="noopener noreferrer"
                className="shareBtn liBtn"
                aria-label="Bagikan ke LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Author Box */}
          <div className="articleAuthorBioCard">
            <div className="bioAvatar">
              <span>{article.author.charAt(0)}</span>
            </div>
            <div className="bioText">
              <span className="eyebrow" style={{ color: 'var(--gold)' }}>
                TENTANG PENULIS
              </span>
              <h3>{article.author}</h3>
              <p>
                Kader santri mahasiswa yang aktif menulis dan mendokumentasikan
                dinamika keilmuan, tradisi pesantren, dan pengabdian masyarakat di
                lingkungan KMNU IPB University.
              </p>
            </div>
          </div>

          <div className="articleBackRow">
            <Link href="/kabar" className="textLink">
              ← Kembali ke Seluruh Warta & Kabar
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED ARTICLES ─────────────────────────────── */}
      {relatedArticles.length > 0 && (
        <section className="section relatedArticlesSection">
          <div className="container">
            <div className="section-label">BACA JUGA</div>
            <h2 className="relatedHeading">
              Warta terkait<br />
              <em>dari ruang santri.</em>
            </h2>

            <div className="newsEditorialGrid" style={{ marginTop: 32 }}>
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/kabar/${rel.slug}`}
                  className="newsEditorialCard"
                >
                  <ImagePlaceholder
                    src={rel.image}
                    alt={rel.title}
                    className="newsEditorialImg"
                  />
                  <div className="newsEditorialBody">
                    <div className="articleBadgeRow">
                      <span className="badgeCategory">{rel.category}</span>
                      {rel.tag && <span className="articleTag">{rel.tag}</span>}
                    </div>
                    <h3 className="newsEditorialTitle">{rel.title}</h3>
                    <p className="newsEditorialExcerpt">{rel.excerpt}</p>
                    <div className="newsEditorialFooter">
                      <span className="articleDate">{rel.date}</span>
                      <span className="articleReadTime">{rel.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
