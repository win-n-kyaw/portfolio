import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 8 }),
    defineField({ name: 'image', title: 'Profile Image', type: 'image', options: { hotspot: true } }),
  ],
  preview: { select: { title: 'heading' } },
});
