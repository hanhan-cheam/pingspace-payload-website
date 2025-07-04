// blocks/SplitContent.ts
import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const DialogContent: Block = {
  slug: 'dialogContent',
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Title',
    },
    {
      name: 'openOnLaunch',
      type: 'checkbox',
      label: 'Open On Launch',
    },

    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'rightCardContent',
      label: 'Right Card Content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          return [
            ...defaultFeatures,
            // HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            // FixedToolbarFeature(),
            // InlineToolbarFeature(),
            // HorizontalRuleFeature(),
            // OrderedListFeature(),
            // BlocksFeature({
            //   blocks: [Banner, CallToAction],
            // }),
          ]
        },
      }),
    },
  ],
}
