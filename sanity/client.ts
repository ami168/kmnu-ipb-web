import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
import { sanityConfig, isSanityConfigured } from './config';
import { news as fallbackNews } from '@/data/site';

export function getSanityClient() {
  if (!isSanityConfigured) return null;
  try {
    return createClient(sanityConfig);
  } catch {
    return null;
  }
}

export function urlForImage(source: any) {
  if (!source || !isSanityConfigured) return '';
  const client = getSanityClient();
  if (!client) return '';
  try {
    return createImageUrlBuilder(client).image(source).auto('format').fit('max').url();
  } catch {
    return '';
  }
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tag: string;
  date: string;
  author: string;
  authorRole?: string;
  readTime: string;
  image: string;
  caption?: string;
  body?: any;
}

// Fallback body contents for local static news
const fallbackArticleBodies: Record<string, string[]> = {
  'mahad-jawi-saintifik': [
    'Di antara hamparan laboratorium riset, kebun percobaan agronomi, dan ruang kuliah IPB University, Kompleks Ma’had Jawi di Jalan Babakan Tengah Dramaga berdiri sebagai episentrum perjumpaan dua tradisi besar: tradisi keilmuan pesantren yang berakar pada teks-teks klasik (turats), dan tradisi saintifik modern yang berpijak pada metodologi empiris.',
    'Sejak awal berdirinya, santri mahasiswa di Ma’had Jawi didorong untuk tidak mempertentangkan antara sains dan agama. Dalam pandangan para kyai dan ilmuwan Nahdliyin, penelitian di laboratorium biosains, rekayasa genetika tanaman pangan, hingga konservasi sumber daya alam maritim adalah manifestasi nyata dari pengamalan ayat-ayat kauniyah Allah SWT.',
    '“Tradisi mengaji kitab kuning seperti Bulughul Maram, Ta’lim Muta’allim, hingga kitab fiqh ekologi memberi landasan etika dan spiritual. Sementara ilmu yang kami dapatkan di bangku perkuliahan memberi perkakas teknis untuk memecahkan persoalan ketahanan pangan bangsa,” tutur salah satu santri pascasarjana IPB mukim Ma’had Jawi.',
    'Ke depan, KMNU IPB bersama Ma’had Jawi terus menguatkan program kolaborasi riset, penerbitan jurnal pemikiran, dan pengabdian masyarakat lingkar kampus guna membuktikan bahwa santri mampu menjadi garda terdepan sains berkelanjutan.',
  ],
  'konservasi-dramaga': [
    'Aksi nyata kepedulian lingkungan kembali diwujudkan oleh puluhan mahasiswa yang tergabung dalam KMNU IPB University. Bekerja sama dengan Paguyuban Petani Desa Cikarawang Dramaga, kegiatan penanaman 1.000 bibit pohon buah dan tanaman agroforestri berhasil dilaksanakan di sepanjang sempadan sungai lingkar kampus.',
    'Kegiatan ini bukan sekadar seremoni seremonial penanaman, melainkan wujud implementasi nilai Fiqh Al-Bi’ah (etika pelestarian lingkungan dalam perspektif Islam). Menjaga kesuburan tanah dan keseimbangan tata air DAS adalah bagian integral dari maqashid syariah, yakni hifdz an-nafs (menjaga jiwa) dan hifdz al-bi’ah (menjaga ekosistem).',
    'Kepala Desa Cikarawang menyambut hangat inisiatif para mahasiswa santri. “Kehadiran mahasiswa IPB yang santun, memahami ilmu pertanian, dan dekat dengan masyarakat sangat kami rasakan manfaatnya. Kami berharap kolaborasi semacam ini terus berkelanjutan,” ungkapnya.',
  ],
  'literasi-kader-muda': [
    'Percepatan revolusi kecerdasan buatan (Artificial Intelligence) dan otomatisasi data membawa perubahan radikal dalam ekosistem akademik kampus. Mahasiswa santri dituntut untuk tanggap terhadap disrupsi teknologi tanpa kehilangan kompas moral dan tradisi sanad keilmuan.',
    'Dalam forum diskusi yang diselenggarakan Departemen Media & Keilmuan KMNU IPB, dibahas bagaimana generative AI dapat dimanfaatkan sebagai asisten produktivitas riset, telaah literatur ilmiah, dan syiar digital yang beretika.',
    'Namun demikian, forum menekankan pentingnya adab dalam menuntut ilmu. Algoritma tidak dapat menggantikan ketawadhuan seorang murid di hadapan guru, dan keakuratan kecerdasan buatan tetap memerlukan verifikasi manusia yang kritis, bijaksana, dan bertanggung jawab secara moral.',
  ],
  'prestasi-debat-aswaja': [
    'Prestasi membanggakan kembali ditorehkan oleh kader santri mahasiswa KMNU IPB University. Dalam ajang Olimpiade Sains dan Pemikiran Islam Perguruan Tinggi Tingkat Nasional, delegasi KMNU IPB berhasil menyabet predikat Juara I pada cabang Lomba Debat Fiqh Kontemporer.',
    'Tim delegasi yang terdiri dari mahasiswa Fakultas Pertanian dan Fakultas Ekologi Manusia (FEMA) berhasil memukau dewan juri melalui argumentasi yang memadukan dalil nash klasik dengan data sains empiris seputar isu kedaulatan pangan, transisi energi berkeadilan, dan etika bioteknologi.',
    'Pencapaian ini membuktikan bahwa mahasiswa santri kampus pertanian memiliki daya saing intelektual yang mumpuni serta mampu mewarnai diskursus keilmuan nasional dengan gagasan yang moderat, solutif, dan berwawasan luas.',
  ],
};

export async function getNewsArticles(): Promise<ArticleItem[]> {
  if (isSanityConfigured) {
    try {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        "id": _id,
        "slug": slug.current,
        title,
        excerpt,
        "category": category->title,
        tag,
        "date": publishedAt,
        "author": author->name,
        "authorRole": author->role,
        readTime,
        "image": mainImage.asset->url,
        "caption": mainImage.caption
      }`;
      const client = getSanityClient();
      if (client) {
        const sanityPosts = await client.fetch(query);
        if (sanityPosts && sanityPosts.length > 0) {
          return sanityPosts.map((post: any) => ({
            ...post,
            date: formatDate(post.date),
          }));
        }
      }
    } catch (err) {
      console.warn('Gagal mengambil data dari Sanity, menggunakan data fallback lokal:', err);
    }
  }

  // Fallback to local static news
  return fallbackNews.map((item) => ({
    id: item.id || item.no,
    slug: item.id || `warta-${item.no}`,
    title: item.title,
    excerpt: item.excerpt,
    category: item.category,
    tag: item.tag,
    date: item.date,
    author: item.author,
    authorRole: 'Lembaga Pers & Redaksi KMNU IPB',
    readTime: item.readTime,
    image: item.image,
    caption: `Dokumentasi resmi KMNU IPB University`,
    body: fallbackArticleBodies[item.id] || [item.excerpt],
  }));
}

export async function getArticleBySlug(slug: string): Promise<ArticleItem | null> {
  if (isSanityConfigured) {
    try {
      const query = `*[_type == "post" && slug.current == $slug][0] {
        "id": _id,
        "slug": slug.current,
        title,
        excerpt,
        "category": category->title,
        tag,
        "date": publishedAt,
        "author": author->name,
        "authorRole": author->role,
        readTime,
        "image": mainImage.asset->url,
        "caption": mainImage.caption,
        body
      }`;
      const client = getSanityClient();
      if (client) {
        const post = await client.fetch(query, { slug });
        if (post) {
          return {
            ...post,
            date: formatDate(post.date),
          };
        }
      }
    } catch (err) {
      console.warn('Gagal mengambil detail warta dari Sanity, mencoba data fallback:', err);
    }
  }

  // Fallback to local static news
  const found = fallbackNews.find((n) => n.id === slug || `warta-${n.no}` === slug);
  if (!found) return null;

  return {
    id: found.id || found.no,
    slug: found.id || `warta-${found.no}`,
    title: found.title,
    excerpt: found.excerpt,
    category: found.category,
    tag: found.tag,
    date: found.date,
    author: found.author,
    authorRole: 'Lembaga Pers & Redaksi KMNU IPB',
    readTime: found.readTime,
    image: found.image,
    caption: `Dokumentasi resmi KMNU IPB University`,
    body: fallbackArticleBodies[found.id] || [found.excerpt],
  };
}

function formatDate(dateString: string): string {
  if (!dateString) return '';
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).toUpperCase();
  } catch {
    return dateString;
  }
}
