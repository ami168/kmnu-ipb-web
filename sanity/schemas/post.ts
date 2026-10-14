export const postSchema = {
  name: 'post',
  title: 'Kabar & Warta',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Warta / Artikel',
      type: 'string',
      description: 'Gunakan judul editorial yang jelas dan bernas',
      validation: (rule: any) => rule.required().max(120),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'tag',
      title: 'Topik / Tag',
      type: 'string',
      description: 'Contoh: Riset & Tradisi, Khidmah Lingkungan, Kaderisasi, Prestasi',
    },
    {
      name: 'mainImage',
      title: 'Gambar Utama',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Teks Alternatif (Alt text)',
          description: 'Penting untuk aksesibilitas dan SEO',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Keterangan Foto (Caption)',
        },
      ],
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'author',
      title: 'Penulis',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'readTime',
      title: 'Estimasi Waktu Baca',
      type: 'string',
      description: 'Contoh: 4 menit baca',
      initialValue: '4 menit baca',
    },
    {
      name: 'excerpt',
      title: 'Ringkasan / Cuplikan (Lead)',
      type: 'text',
      rows: 3,
      description: 'Ditampilkan di halaman depan dan kartu warta',
      validation: (rule: any) => rule.required().max(260),
    },
    {
      name: 'body',
      title: 'Isi Lengkap Artikel',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Subjudul H2', value: 'h2' },
            { title: 'Subjudul H3', value: 'h3' },
            { title: 'Kutipan Menarik', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author ? `Oleh ${author}` : 'Tanpa nama penulis',
      });
    },
  },
};
