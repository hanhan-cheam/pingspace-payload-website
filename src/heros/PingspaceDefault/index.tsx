'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { CMSButton } from '@/components/Button'

export const PingspaceDefault: React.FC<Page['hero']> = ({ links, media, richText, richText2 }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="relative -mt-[10.4rem] flex items-end justify-center text-white"
      data-theme="dark"
    >
      <div className="container z-10 relative flex items-center justify-center">
        <div className="grid grid-cols-[40%_60%] gap-4">
          <div>{richText && <RichText className="mb-6 text-center" data={richText} />}</div>

          <div className="flex flex-col justify-center my-6">
            {richText2 && <RichText className="mb-6" data={richText2} />}

            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex md:justify-center gap-2">
                {links.map(({ link }, i) => (
                  <li key={i}>
                    <CMSButton {...link} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
    </div>
  )
}
