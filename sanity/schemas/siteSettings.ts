import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Role / Title', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'text', rows: 2 }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'github', title: 'GitHub URL', type: 'url' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'twitter', title: 'Twitter / X URL', type: 'url' }),
    defineField({
      name: 'resumeCloudEng',
      title: 'Resume — Cloud Engineering',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'resumeSTEM',
      title: 'Resume — STEM Educator',
      type: 'file',
      options: { accept: '.pdf' },
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'role' } },
});
