// blocks/SplitContent.ts
import { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const GridContent: Block = {
  slug: 'gridContent',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'items',
      type: 'array',
      label: 'Rows',

      fields: [
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'swapLeftRight',
          type: 'checkbox',
          label: 'Swap Left Right Content',
        },
      ],
    },
  ],
}
