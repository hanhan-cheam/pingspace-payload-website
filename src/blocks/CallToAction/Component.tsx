import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'

const bgColorList = {
  transparent: 'bg-transparent',
  red: 'bg-red-50',
  amber: 'bg-amber-100',
}

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText, bgColor }) => {
  return (
    <div className="container">
      <div
        className={cn(
          `rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center`,
          bgColorList[bgColor as 'transparent' | 'red' | 'amber'],
        )}
      >
        <div className="w-full flex items-center">
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </div>
        <div className="flex flex-col gap-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />
          })}
        </div>
      </div>
    </div>
  )
}
