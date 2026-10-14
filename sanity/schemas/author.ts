export const authorSchema = {
  name: 'author',
  title: 'Penulis & Kontributor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Penulis / Lembaga',
      type: 'string',
      description: 'Contoh: Ahmad Fauzi Ridwan atau Lembaga Pers & Redaksi KMNU IPB',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'role',
      title: 'Peran / Afiliasi',
      type: 'string',
      description: 'Contoh: Departemen Media & Informasi · Faperta 58',
    },
    {
      name: 'image',
      title: 'Foto Penulis',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Biografi Singkat',
      type: 'text',
      rows: 3,
    },
  ],
};
