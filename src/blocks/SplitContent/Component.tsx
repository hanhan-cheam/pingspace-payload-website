import React from 'react'
import RichText from '@/components/RichText'
// import type { Value } from '@payloadcms/richtext-lexical'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

// import type { SplitContentBlockType } from '@/payload-types'
// import { serializeRichText } from '@/components/serializeRichText' // or however you render Payload rich text

type SplitContentBlockProps = {
  blockType: 'splitContent'
  section1Content: DefaultTypedEditorState // Or `RichTextField` if you have types
  section2Content: DefaultTypedEditorState
  section3Content: DefaultTypedEditorState
  disableInnerContainer?: boolean
}

export const SplitContentBlock: React.FC<
  SplitContentBlockProps & { disableInnerContainer?: boolean }
> = ({ section1Content, section2Content, section3Content }) => {
  return (
    <div className="grid grid-cols-[40%_60%] grid-rows-[auto_auto] gap-4 my-8">
      {/* Section 1 */}
      <div>
        <RichText data={section1Content} />
      </div>

      {/* Section 3 (spans 2 rows) */}
      <div className="row-span-2">
        <RichText data={section3Content} />
      </div>

      {/* Section 2 */}
      <div>
        <RichText data={section2Content} />
      </div>
    </div>
  )
}
