import React from 'react'

export default function LogosContainer({ title, children }: { title: string, children: React.ReactNode[] }) {
  return (
    <article className='flex flex-col gap-12'>
        <h3 className='text-center text-3xl font-semibold text-purple-500'>{title}</h3>
        <div className='grid grid-cols-2 gap-16'>
        {children}
        </div>
    </article>
  )
}
