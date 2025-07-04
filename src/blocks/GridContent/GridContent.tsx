import React from 'react'
import RichText from '@/components/RichText'
// import type { Value } from '@payloadcms/richtext-lexical'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import { Media } from '@/components/Media'

// import type { SplitContentBlockType } from '@/payload-types'
// import { serializeRichText } from '@/components/serializeRichText' // or however you render Payload rich text

import type { Media as MediaType } from '@/payload-types'

import { cn } from '@/utilities/ui'


type GridContentBlockProps = {
  blockType: 'gridContent'
  title?: string
  items?: {
    content: DefaultTypedEditorState
    image: MediaType | string
    swapLeftRight: boolean
  }[]
}

export const GridContentBlock: React.FC<GridContentBlockProps> = ({ title, items }) => {
  return (
    <>
      <div className="grid grid-rows-5 items-center justify-center rounded-xl border border-solid bg-slate-200 max-w-5xl mx-auto px-4">
        {title && (
          <div className="flex items-center justify-center row-span-1">
            <div className="text-brand-midnight-navy z-20 max-w-2xl px-5 text-center text-2xl font-bold sm:text-3xl">
              {title}
            </div>
          </div>
        )}

        {items && items.length > 0 && (
          <div className="flex flex-col gap-8 items-center justify-center row-span-4 mx-2 p-10">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex flex-col md:flex-row text-center items-center gap-4 max-w-full",
                  item.swapLeftRight && "md:flex-row-reverse"
                )}
              >
                <RichText data={item.content} />
                <Media
                  imgClassName={cn(' h-auto object-contain border border-border rounded-[0.8rem]')}
                  resource={item.image}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
