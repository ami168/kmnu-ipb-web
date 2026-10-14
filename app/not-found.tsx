import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section container notFoundSection">
      <div className="notFoundContent">
        <span className="section-label">KESALAHAN 404</span>
        <h1 className="notFoundTitle">
          Halaman tidak<br />
          <em>ditemukan.</em>
        </h1>
        <p className="notFoundLead">
          Tautan yang Anda tuju mungkin telah dipindahkan, diubah jalurnya, atau
          belum dipublikasikan dalam repositori digital KMNU IPB University.
        </p>

        <div className="notFoundActions">
          <Link href="/" className="btnPrimary">
            Kembali ke Beranda ↗
          </Link>
          <Link href="/kegiatan" className="textLink">
            Jelajahi Kegiatan KMNU ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
