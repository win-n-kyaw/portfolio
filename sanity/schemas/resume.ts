import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Display name shown in the dropdown (e.g. "Cloud Engineering")',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'file',
      title: 'PDF File',
      type: 'file',
      options: { accept: '.pdf' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: { select: { title: 'label' } },
});
