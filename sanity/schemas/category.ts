export const categorySchema = {
  name: 'category',
  title: 'Kategori Warta',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nama Kategori',
      type: 'string',
      description: 'Contoh: FEATURE, LIPUTAN, ARTIKEL, OPINI',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'description',
      title: 'Deskripsi Kategori',
      type: 'text',
      rows: 2,
    },
  ],
};
