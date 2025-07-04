// blocks/SplitContent.ts
import { Block } from 'payload'

export const SplitContent: Block = {
  slug: 'splitContent',
  fields: [
    {
      name: 'section1Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'section2Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'section3Content',
      type: 'richText',
      required: true,
    },
  ],
}
