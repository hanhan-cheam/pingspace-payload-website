// {
//       name: 'title',
//       type: 'text',
//       admin: {
//         placeholder: 'This is a test placeholder',
//         rtl: true,
//       },
//     },

import { CollectionConfig } from 'payload'

export const TEST: CollectionConfig = {
  slug: 'post',
  labels: {
    singular: 'Blog',
    plural: 'Blog',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'This is a test placeholder',
      },
    },
  ],
}
