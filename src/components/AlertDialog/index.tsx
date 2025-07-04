'use client'

import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { StaticImageData } from 'next/image'
import { cn } from '@/utilities/ui'
import { Media } from '../../components/Media'
import { Media as MediaType } from '@/payload-types'
import { RichTextField } from 'payload'
import RichText from '@/components/RichText'
export type AlertDialogProps = {
  open: boolean
  onClose?: () => void
  title?: string
  mediaProps: {
    staticImage?: StaticImageData
    media: number | MediaType
    imgClassName?: string
  }
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
}

export default function AlertDialog({
  open = false,
  onClose,
  title,
  mediaProps,
  rightCardContent,
}: AlertDialogProps) {
  const { staticImage, media, imgClassName } = mediaProps

  return (
    <Dialog fullWidth={true} maxWidth={'lg'} open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent
        sx={{
          margin: '10px',
        }}
      >
        <div className="flex flex-start font-bold text-3xl">
          Want to Automate, but struggling with
        </div>
        <div className="flex flex-start font-bold text-cyan-600 text-2xl">High startup cost?</div>
        <div className="grid grid-cols-[1fr_1fr_auto] gap-3 justify-center my-5">
          <div className="flex flex-col gap-5 text-center justify-center items-center">
            <div className="border-2 border-solid rounded-full p-2 text-xl font-semibold">
              Warehouse Robotics Starter Kit
            </div>
            <div>
              Kick start with <b> 300 sqft</b> only at
            </div>
            <div>RM 15000 / month</div>
            <div className="border-2 border-solid rounded-full bg-cyan-600 text-white w-[200px] p-2">
              Preorder Now
            </div>
          </div>
          <div>
            <div className="relative w-40 h-40">
              {/* Circle background */}
              <div className="absolute inset-0 bg-cyan-200 rounded-full"></div>

              {/* Text on top */}
              <div className="relative flex items-center justify-center w-full h-full text-white font-bold text-xl">
                {(media || staticImage) && (
                  <Media
                    imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
                    resource={media}
                    src={staticImage}
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="relative w-full h-full">
              <div className="absolute top-0 right-0 w-[180px] h-[100px] bg-cyan-200 rounded-l-full p-4 text-sm leading-tight overflow-hidden break-words">
                {/* {rightCardContent} */}

                {rightCardContent && <RichText data={rightCardContent} />}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
