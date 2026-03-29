import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Skill Name', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cloud Platforms', value: 'Cloud Platforms' },
          { title: 'Containers & Orchestration', value: 'Containers & Orchestration' },
          { title: 'Infrastructure as Code', value: 'Infrastructure as Code' },
          { title: 'Languages', value: 'Languages' },
          { title: 'Networking', value: 'Networking' },
          { title: 'AI & ML', value: 'AI & ML' },
          { title: 'Other', value: 'Other' },
        ],
      },
    }),
    defineField({
      name: 'proficiency',
      title: 'Proficiency (0-100)',
      type: 'number',
      validation: (r) => r.min(0).max(100),
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'category' } },
});
