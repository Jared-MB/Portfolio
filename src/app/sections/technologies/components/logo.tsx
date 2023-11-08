import Image from 'next/image'
import React from 'react'

export default function Logo({ src, title }: { src: string, title: string }) {
  return (
    <div className='flex items-center flex-col gap-4'>
        <Image src={src} alt={title} width={72} height={72} className='h-20 object-contain'/>
        <h4 className='font-semibold text-xl'>{title}</h4>
    </div>
  )
}
