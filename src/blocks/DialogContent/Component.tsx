'use client'

import AlertDialog from '@/components/AlertDialog'
import { StaticImageData } from 'next/image'
import React from 'react'
import type { MediaBlock as MediaBlockProps } from '@/payload-types'

export type DialogContentProps = {
  title?: string
  openOnLaunch: boolean
  rightCardContent?: {
    root: {
      type: string
      children: {
        type: string
        version: number
        [k: string]: unknown
      }[]
      direction: ('ltr' | 'rtl') | null
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
      indent: number
      version: number
    }
    [k: string]: unknown
  } | null
} & Props

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const DialogContent: React.FC<DialogContentProps> = (props) => {
  const { title, openOnLaunch, imgClassName, media, staticImage, rightCardContent } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  const [open, setOpen] = React.useState(openOnLaunch)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="flex justify-center">
      <AlertDialog
        open={open}
        onClose={handleClose}
        title={title}
        mediaProps={{
          staticImage: staticImage,
          media: media,
          imgClassName: imgClassName,
        }}
        rightCardContent={rightCardContent}
      />
    </div>
  )
}
