import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({ name: 'role', title: 'Role', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'company', title: 'Company', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'startDate', title: 'Start Date', type: 'date' }),
    defineField({ name: 'endDate', title: 'End Date', type: 'date' }),
    defineField({ name: 'current', title: 'Current Position', type: 'boolean', initialValue: false }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ],
  orderings: [{ title: 'Start Date', name: 'startDateDesc', by: [{ field: 'startDate', direction: 'desc' }] }],
  preview: { select: { title: 'role', subtitle: 'company' } },
});
