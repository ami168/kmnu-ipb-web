import React from 'react';

export const site = {
  name: 'KMNU IPB',
  fullName: 'Keluarga Mahasiswa Nahdlatul Ulama IPB University',
  location: 'Bogor · Jawa Barat · Indonesia',
  established: '2007',
  tagline: 'Merawat tradisi. Mengembangkan ilmu. Berkhidmah untuk umat.',
  description:
    'Ruang bertemunya tradisi keilmuan pesantren, kehidupan akademik kampus, kaderisasi berkelanjutan, dan khidmah sosial mahasiswa Nahdlatul Ulama di IPB University.',
  secretariat:
    'Kompleks Ma\'had Jawi, Jalan Babakan Tengah No. 45, Dramaga, Kabupaten Bogor, Jawa Barat 16680',
  email: 'kmnu@apps.ipb.ac.id',
  socials: {
    instagram: 'https://instagram.com/kmnuipb',
    youtube: 'https://youtube.com/@kmnuipb',
    linkedin: 'https://linkedin.com/company/kmnu-ipb',
    telegram: 'https://t.me/kmnuipb',
  },
  logo: '/assets/logo.png',
  logoOriginal: '/assets/logo-original.jpg',
};

export const emblem = {
  title: 'Makna & Filosofi Lambang KMNU IPB',
  description:
    'Lambang resmi Keluarga Mahasiswa Nahdlatul Ulama IPB University memadukan keteguhan akidah Ahlussunnah wal Jama\'ah An-Nahdliyyah dengan kepeloporan sains pertanian dan biosains IPB University.',
  elements: [
    {
      symbol: 'Sembilan Bintang Kuning Emas',
      meaning:
        'Satu bintang terbesar di puncak melambangkan kemuliaan Nabi Muhammad SAW; empat bintang di sisi melambangkan Khulafaur Rasyidin; serta empat bintang di bawah melambangkan Empat Imam Mazhab fiqih (Hanafi, Maliki, Syafi\'i, Hambali).',
    },
    {
      symbol: 'Tunas Tanaman / Trisula Daun Hijau',
      meaning:
        'Representasi identitas IPB University sebagai episentrum pertanian dan biosains nusantara, serta simbol pertumbuhan kader yang senantiasa bertunas, adaptif, dan memberi manfaat bagi bumi.',
    },
    {
      symbol: 'Kitab / Lembaran Buku Terbuka',
      meaning:
        'Melambangkan dasar keilmuan Islam dan tradisi kajian kitab kuning (turats) yang berpadu selaras dengan riset sains modern dan literasi akademik.',
    },
    {
      symbol: 'Lingkaran Bola Dunia & Warna Hijau',
      meaning:
        'Melambangkan peradaban dunia, keharmonisan alam, serta kesuburan dan kedamaian dakwah Islam rahmatan lil \'alamin.',
    },
    {
      symbol: 'Pita Kuning Emas KMNU IPB',
      meaning:
        'Melambangkan kejayaan, kemuliaan cita-cita, serta ikatan ukhuwah nahdliyyah yang mengikat seluruh mahasiswa santri di IPB University.',
    },
  ],
};

export const values = [
  {
    title: 'Tawassuth',
    meaning: 'Sikap Moderat & Berimbang',
    desc: 'Menempatkan diri di jalur tengah, menghindari sikap ekstrem (tatharruf) baik ke kiri maupun ke kanan dalam beragama dan bermasyarakat.',
  },
  {
    title: 'Tawazun',
    meaning: 'Keseimbangan Menyeluruh',
    desc: 'Menjaga harmoni antara pemikiran dan tindakan, antara dalil naqli dan aqli, serta antara kepentingan ibadah dan kehidupan sosial.',
  },
  {
    title: 'Tasamuh',
    meaning: 'Toleransi & Keterbukaan',
    desc: 'Menghargai keragaman suku, bahasa, pandangan, dan kebudayaan dalam bingkai persaudaraan Islam, kebangsaan, dan kemanusiaan.',
  },
  {
    title: 'I\'tidal',
    meaning: 'Keadilan & Keteguhan Tegak',
    desc: 'Berpijak pada kebenaran dan keadilan secara proporsional, memegang teguh komitmen moral dalam lingkungan akademik dan sosial.',
  },
  {
    title: 'Amar Ma\'ruf Nahi Munkar',
    meaning: 'Keteladanan Kebaikan',
    desc: 'Mengajak kepada kebajikan dengan cara yang santun (bil-hikmah) serta mencegah kemungkaran dengan keteladanan akhlak mulia.',
  },
];

export const dimensions = [
  {
    no: '01',
    label: 'KEISLAMAN',
    title: 'Belajar dengan sanad. Beragama dengan ilmu.',
    body: 'Kajian kitab kuning, tahsin Al-Qur\'an, shalawat Ratibul Haddad, peringatan hari besar Islam, dan pembelajaran yang mengakar pada tradisi keilmuan pesantren Ahlussunnah wal Jama\'ah.',
    programs: [
      'Kajian Kitab Bulughul Maram & Ta\'lim Muta\'allim',
      'Rutinan Shalawat & Pembacaan Maulid Diba\'',
      'Peringatan Hari Santri Nasional & Harlah NU',
      'Tadarus & Diskusi Tematik Keislaman Kontemporer',
    ],
    image: '/assets/keislaman.jpg',
  },
  {
    no: '02',
    label: 'KEILMUAN',
    title: 'Dari pertanyaan menjadi gagasan ilmiah.',
    body: 'Mendorong integrasi sains modern dengan etika Islam. Memfasilitasi forum ilmiah, bedah buku, workshop penulisan karya tulis ilmiah, dan riset lintas disiplin di lingkungan IPB University.',
    programs: [
      'Halaqah Akademik Nahdliyin',
      'Bedah Buku & Literasi Pemikiran Tokoh Santri',
      'Pelatihan Karya Tulis Ilmiah & Essay Kompetisi',
      'Forum Diskusi Sains, Pertanian & Etika Ekologi',
    ],
    image: '/assets/keilmuan.jpg',
  },
  {
    no: '03',
    label: 'KADERISASI',
    title: 'Bertumbuh bersama. Menyiapkan kepemimpinan masa depan.',
    body: 'Menyiapkan generasi mahasiswa santri yang tangguh, adaptif, dan memiliki integritas moral. Pembinaan kepemimpinan formal dan kultural berjenjang dari mahasiswa baru hingga pascasarjana.',
    programs: [
      'Istilahul Qudroh (IQ) — Kaderisasi Formal Santri Mahasiswa',
      'Mentoring Akademik & Spiritual Mahasiswa Baru',
      'Upgrading & Pembekalan Kepengurusan KMNU IPB',
      'Leadership & Public Speaking Bootcamp',
    ],
    image: '/assets/kaderisasi.jpg',
  },
  {
    no: '04',
    label: 'KHIDMAH',
    title: 'Ilmu yang keluar dari ruang kelas untuk masyarakat.',
    body: 'Mengabdi nyata bagi masyarakat lingkar kampus IPB dan lingkungan sekitarnya. Meliputi aksi peduli lingkungan, bakti sosial Ramadan, edukasi pertanian ramah lingkungan, dan relawan bencana.',
    programs: [
      'KMNU Mengabdi di Desa Lingkar Kampus IPB',
      'Aksi Penanaman Bibit Pohon & Konservasi Lingkungan',
      'Santunan & Buka Puasa Bersama Yatim Dhuafa',
      'Edukasi Pertanian Perkotaan Ramah Lingkungan',
    ],
    image: '/assets/khidmah.jpg',
  },
];

export const history = [
  {
    year: '2007',
    title: 'Pencanangan KMNU di Sekolah Pascasarjana IPB',
    body: 'KMNU IPB resmi dideklarasikan pada 26 Mei 2007, berawal dari inisiatif para mahasiswa pascasarjana IPB yang ingin menjaga tradisi keilmuan dan amaliah santri di kampus IPB University.',
  },
  {
    year: '2009',
    title: 'Peleburan & Perluasan Naungan Mahasiswa S1',
    body: 'Melihat antusiasme mahasiswa sarjana, kepengurusan dilebur dan diperluas untuk menaungi seluruh mahasiswa jenjang Diploma, Sarjana, hingga Pascasarjana di lingkungan IPB.',
  },
  {
    year: '2015',
    title: 'Deklarasi Pendirian KMNU Nasional',
    body: 'KMNU IPB menjadi salah satu dari 12 pendiri deklarasi KMNU Nasional pada 24 Januari 2015 di Pondok Pesantren Sunan Pandanaran, Yogyakarta, memperluas jejaring santri mahasiswa nusantara.',
  },
  {
    year: '2020',
    title: 'Penguatan Ekosistem Ma\'had Jawi & Riset',
    body: 'KMNU IPB memperkuat sinergi dengan Ma\'had Jawi Dramaga sebagai pusat kajian keilmuan Islam-sains serta ruang tinggal dan belajar bersama kader-kader santri IPB.',
  },
  {
    year: '2026',
    title: 'Tradisi dan Masa Depan Era Digital',
    body: 'Transformasi digital, jejaring alumni lintas profesi, dan penguatan peran kader KMNU IPB dalam isu strategis kedaulatan pangan, biosains, dan keberlanjutan lingkungan.',
  },
];

export const activities = [
  {
    id: 'halaqah-akademik',
    category: 'KEILMUAN',
    badge: 'Unggulan',
    date: '18 AGUSTUS 2026',
    location: 'Auditorium CCR IPB Dramaga',
    title: 'Halaqah Akademik Nahdliyin: Integrasi Biosains dan Etika Ekologi',
    body: 'Forum ilmiah tahunan yang mempertemukan guru besar santri, peneliti, mahasiswa pascasarjana, dan aktivis lingkungan untuk mendiskusikan kedaulatan pangan berkelanjutan berlandaskan nilai Fiqh Al-Bi\'ah (etika lingkungan Islam).',
    image: '/assets/activity-feature.jpg',
  },
  {
    id: 'istilahul-qudroh-2026',
    category: 'KADERISASI',
    badge: 'Kaderisasi',
    date: '27–29 SEPTEMBER 2026',
    location: 'Pondok Pesantren Al-Ihya Bogor',
    title: 'Istilahul Qudroh (IQ) 2026: Membentuk Mahasiswa Santri Berkarakter dan Mandiri',
    body: 'Kaderisasi formal Istilahul Qudroh (IQ) untuk menyambut mahasiswa baru IPB Angkatan 61, mengenalkan nilai-nilai keaswajaan, ke-NU-an, dan peran strategis santri di perguruan tinggi.',
    image: '/assets/kaderisasi.jpg',
  },
  {
    id: 'konservasi-lingkungan',
    category: 'KHIDMAH',
    badge: 'Sosial',
    date: '12 JUNI 2026',
    location: 'Desa Cikarawang, Dramaga, Bogor',
    title: 'Khidmah Santunan Anak Yatim & Kepedulian Sosial Lingkar Kampus',
    body: 'Aksi nyata khidmah mahasiswa KMNU IPB bersama warga lingkar kampus Dramaga dalam berbagi santunan, kebahagiaan, dan pendampingan pendidikan.',
    image: '/assets/activity-01.jpg',
  },
  {
    id: 'kajian-kamis',
    category: 'KEISLAMAN',
    badge: 'Rutin',
    date: 'SETIAP KAMIS MALAM',
    location: 'Masjid Al-Hurriyyah / Ma\'had Jawi IPB',
    title: 'Kajian Aswaja, Manaqib Rutinan & Pembacaan Shalawat',
    body: 'Ruang rihlah ruhani mingguan yang menyejukkan di tengah kesibukan akademik, mengaji kitab akhlak dan mempererat ukhuwah antar-kader dari berbagai fakultas.',
    image: '/assets/activity-02.jpg',
  },
  {
    id: 'hari-santri',
    category: 'KEISLAMAN',
    badge: 'Tahunan',
    date: '22 OKTOBER 2026',
    location: 'Grha Widya Wisuda (GWW) IPB',
    title: 'Semarak Lomba Kemerdekaan & Peringatan Hari Santri Nasional',
    body: 'Peringatan kebersamaan santri dengan kirab santri kampus, berbagai perlombaan tradisional, dan orasi kebangsaan tokoh ulama nasional.',
    image: '/assets/archive-03.jpg',
  },
  {
    id: 'pelatihan-kti',
    category: 'KEILMUAN',
    badge: 'Workshop',
    date: '15 MEI 2026',
    location: 'Ruang Kuliah RK FEMA IPB',
    title: 'Bedah Buku Pemikiran Tokoh Santri & Workshop Literasi Ilmiah',
    body: 'Diskursus intelektual kritis menelaah karya keilmuan dan gagasan ulama nusantara dalam merespons tantangan peradaban modern.',
    image: '/assets/news-feature.jpg',
  },
];

export const news = [
  {
    no: '01',
    id: 'mahad-jawi-saintifik',
    tag: 'Riset & Tradisi',
    category: 'FEATURE',
    title: 'Bedah Buku dan Penguatan Diskursus Saintifik Santri Mahasiswa IPB',
    excerpt:
      'Di antara hamparan kebun percobaan dan laboratorium IPB, kader santri menggelar bedah buku intensif mempertemukan tradisi turats dan metode sains empiris.',
    date: '23 AGUSTUS 2026',
    author: 'Lembaga Pers & Redaksi KMNU IPB',
    readTime: '4 menit baca',
    image: '/assets/news-feature.jpg',
  },
  {
    no: '02',
    id: 'konservasi-dramaga',
    tag: 'Khidmah Lingkungan',
    category: 'LIPUTAN',
    title: 'Pengabdian Mahasiswa Santri: Nahdlatul Athfal & Edukasi Lingkar Kampus',
    excerpt:
      'Kolaborasi KMNU IPB dan masyarakat Dramaga mendampingi anak-anak generasi penerus melalui bimbingan belajar santun dan nilai-nilai akhlakul karimah.',
    date: '14 JUNI 2026',
    author: 'Divisi Pengabdian Masyarakat',
    readTime: '3 menit baca',
    image: '/assets/khidmah.jpg',
  },
  {
    no: '03',
    id: 'literasi-kader-muda',
    tag: 'Kaderisasi',
    category: 'ARTIKEL',
    title: 'Kolaborasi, Literasi, dan Ruang Tumbuh Kader Muda di Era Kecerdasan Buatan',
    excerpt:
      'Bagaimana kader santri di kampus pertanian terkemuka merespons percepatan AI tanpa tercerabut dari sanad keilmuan dan etika ketawadhuan.',
    date: '29 MEI 2026',
    author: 'Tim Kajian Strategis KMNU',
    readTime: '5 menit baca',
    image: '/assets/kaderisasi.jpg',
  },
  {
    no: '04',
    id: 'prestasi-debat-aswaja',
    tag: 'Prestasi',
    category: 'KABAR',
    title: 'Mencetak Sarjana dan Magister Berkarakter Aswaja di IPB University',
    excerpt:
      'Pelepasan wisudawan santri KMNU IPB membuktikan integritas mahasiswa nahdliyin yang unggul secara akademik dan teguh berkhidmat untuk peradaban.',
    date: '10 APRIL 2026',
    author: 'Biro Komunikasi Publik',
    readTime: '3 menit baca',
    image: '/assets/archive-04.jpg',
  },
];

export const boardStructure = {
  period: '2026 / 2027',
  cabinetName: 'Kabinet Al-Khidmah wal-Ijtihad',
  bph: [
    {
      role: 'KETUA UMUM',
      name: 'Ahmad Fauzi Ridwan',
      major: 'Agronomi dan Hortikultura · Faperta 58',
      quote: 'Meneguhkan sanad keilmuan, mengabdi untuk kemaslahatan umat dan bangsa.',
      lead: true,
    },
    {
      role: 'WAKIL KETUA',
      name: 'Muhammad Ilham Pratama',
      major: 'Ilmu Komputer · FMIPA 58',
      quote: 'Mengintegrasikan teknologi informasi dalam syiar dakwah moderat di kampus.',
      lead: false,
    },
    {
      role: 'SEKRETARIS UMUM',
      name: 'Nabila Nurul Hidayah',
      major: 'Komunikasi dan Pengembangan Masyarakat · FEMA 59',
      quote: 'Tertib administrasi sebagai cermin profesionalitas organisasi kemahasiswaan.',
      lead: false,
    },
    {
      role: 'BENDAHARA UMUM',
      name: 'Fathurrahman Aziz',
      major: 'Manajemen · FEM 59',
      quote: 'Transparansi dan akuntabilitas mewujudkan kemandirian finansial gerakan.',
      lead: false,
    },
  ],
  departments: [
    {
      name: 'Departemen Kaderisasi',
      lead: 'Muhammad Haidar Ali',
      roleDesc: 'Merancang sistem pembinaan, penyambutan mahasiswa baru, dan jenjang kaderisasi formal.',
      programs: ['Istilahul Qudroh (IQ)', 'Mentoring Mahasiswa Baru', 'Upgrading Kepengurusan', 'Database Kader Digital'],
    },
    {
      name: 'Departemen Syiar Keislaman',
      lead: 'Zidni Ilman Nafia',
      roleDesc: 'Mengelola kajian kitab turats, amaliah aswaja, maulid rutin, dan dakwah masjid kampus.',
      programs: ['Kajian Rutin Kamis Malam', 'Pembacaan Ratibul Haddad', 'Peringatan PHBI', 'Tahsin Al-Qur\'an'],
    },
    {
      name: 'Departemen Keilmuan & Riset',
      lead: 'Aisyah Putri Rahmawati',
      roleDesc: 'Mengembangkan diskursus intelektual, karya tulis ilmiah, dan sinergi sains-agama.',
      programs: ['Halaqah Akademik Nahdliyin', 'Pelatihan PKM/KTI Santri', 'Bedah Buku Pemikiran', 'Buletin Ilmiah'],
    },
    {
      name: 'Departemen Khidmah & Pengabdian Masyarakat',
      lead: 'Rizqi Maula Hasan',
      roleDesc: 'Menjembatani aksi kepedulian sosial, bakti sosial, edukasi desa, dan tanggap bencana.',
      programs: ['KMNU Mengabdi Desa Lingkar Kampus', 'Konservasi & Penanaman Pohon', 'Bakti Sosial Ramadan', 'Santunan Dhuafa'],
    },
    {
      name: 'Departemen Media, Informasi & Kreatif',
      lead: 'Farhan Dwi Cahyo',
      roleDesc: 'Memproduksi konten digital, dokumentasi visual, pengelolaan website resmi, dan publikasi opini.',
      programs: ['Pengelolaan Portal Website', 'Desain Konten Edukasi Digital', 'Dokumentasi & Arsip Audio-Visual', 'Podcast Santri Kampus'],
    },
  ],
};

export const advisoryBoard = [
  {
    role: 'PEMBINA UTAMA ORGANISASI',
    name: 'Dr. Ir. H. Ahmad Junaedi, M.Sc.',
    title: 'Dosen Senior IPB University · Pembina Ormawa KMNU IPB',
    note: 'Memberikan bimbingan kelembagaan, advokasi kemahasiswaan di tingkat universitas, dan arahan etika akademik santri.',
  },
  {
    role: 'PEMBINA KEISLAMAN & SANAD',
    name: 'KH. Dr. Muhammad Abbas, M.A.',
    title: 'Pengasuh Ma’had Jawi Dramaga · Tokoh Syuriah PCNU',
    note: 'Menjaga kesinambungan sanad keilmuan kitab turats pesantren, pembinaan ruhiyah, dan peneguhan aqidah Aswaja.',
  },
  {
    role: 'DEWAN PAKAR & RISET',
    name: 'Dr. Hj. Nurul Fadhilah, M.Si.',
    title: 'Peneliti Biosains IPB · Dewan Pertimbangan Keilmuan',
    note: 'Mengarahkan integrasi sains modern dengan fiqh ekologi serta memfasilitasi riset mahasiswa santri.',
  },
];

export const alumniNetwork = {
  name: 'IKALUM KMNU IPB',
  fullName: 'Ikatan Alumni Keluarga Mahasiswa Nahdlatul Ulama IPB University',
  established: '2007',
  lead: 'Dr. M. Syukron Habibie, S.P., M.Si. (Ketua Presidium IKALUM)',
  summary:
    'Jejaring persaudaraan yang menghimpun lebih dari 1.200 alumni santri IPB lintas angkatan dan disiplin ilmu, berkiprah nyata di sektor akademik, birokrasi, industri agro-maritim, hingga pesantren.',
  pillars: [
    {
      sector: 'Akademisi & Peneliti',
      desc: 'Dosen di berbagai PTN/PTS nusantara, periset di BRIN, dan ilmuwan di institusi riset internasional.',
      count: '350+ Alumni',
    },
    {
      sector: 'Birokrasi & Kebijakan',
      desc: 'Pengabdi di Kementerian Pertanian, KLHK, Bappenas, dan instansi pengambil kebijakan strategis.',
      count: '280+ Alumni',
    },
    {
      sector: 'Industri & Korporasi',
      desc: 'Praktisi di BUMN, industri pangan perkebunan, konsultan lingkungan, bioteknologi, dan perbankan syariah.',
      count: '420+ Alumni',
    },
    {
      sector: 'Pesantren & Kemasyarakatan',
      desc: 'Pengasuh pondok pesantren, kyai/asatidz, pegiat sociopreneur pedesaan, dan penggerak ekonomi santri.',
      count: '180+ Alumni',
    },
  ],
  synergies: [
    {
      title: 'KMNU Career & Study Mentorship',
      desc: 'Bimbingan intensif persiapan karier, magang kerja, seleksi CPNS/BUMN, dan pendampingan beasiswa S2/S3 luar negeri bagi kader mahasiswa.',
    },
    {
      title: 'Dana Abadi Khidmah Santri',
      desc: 'Program filantropi gotong royong alumni untuk beasiswa biaya kuliah (UKT) kader prasejahtera dan dukungan riset skripsi/tesis.',
    },
    {
      title: 'Forum Temu Gagasan & Reuni Akbar',
      desc: 'Halaqah berkala alumni dan temu tahunan untuk merumuskan sumbangsih pemikiran strategis santri bagi kedaulatan pangan nasional.',
    },
  ],
};

export const board = [
  { role: 'KETUA', name: 'Ahmad Fauzi Ridwan', period: '2026–2027' },
  { role: 'SEKRETARIS', name: 'Nabila Nurul Hidayah', period: '2026–2027' },
  { role: 'BENDAHARA', name: 'Fathurrahman Aziz', period: '2026–2027' },
];

export const archives = [
  {
    id: 'ad-art',
    category: 'DOKUMEN RESMI',
    title: 'Anggaran Dasar & Anggaran Rumah Tangga (AD/ART)',
    desc: 'Pedoman pokok konstitusi organisasi KMNU IPB University hasil Musyawarah Komisariat.',
    fileType: 'PDF · 1.4 MB',
    date: 'PERIODE 2026',
    image: '/assets/archive-01.jpg',
  },
  {
    id: 'modul-aswaja',
    category: 'MATERI KAJIAN',
    title: 'Modul Pengantar Keaswajaan An-Nahdliyyah',
    desc: 'Materi pegangan dasar kaderisasi seputar sejarah, pemikiran teologi, fiqh, dan tasawuf NU.',
    fileType: 'PDF · 3.2 MB',
    date: 'EDISI KE-4 (2026)',
    image: '/assets/archive-02.jpg',
  },
  {
    id: 'lpj-tahunan',
    category: 'LAPORAN TAHUNAN',
    title: 'Laporan Pertanggungjawaban Tahunan Organisasi',
    desc: 'Rekapitulasi ketercapaian program kerja, transparansi keuangan, dan evaluasi kinerja pengurus.',
    fileType: 'PDF · 5.8 MB',
    date: 'PERIODE 2025–2026',
    image: '/assets/archive-03.jpg',
  },
  {
    id: 'galeri-dokumentasi',
    category: 'DOKUMENTASI VISUAL',
    title: 'Album Dokumentasi & Arsip Fotografi Kegiatan',
    desc: 'Kumpulan foto resolusi tinggi rekaman sejarah kegiatan, seminar, dan kebersamaan santri IPB.',
    fileType: 'GALERI DIGITAL',
    date: '2007–2026',
    image: '/assets/archive-04.jpg',
  },
];
