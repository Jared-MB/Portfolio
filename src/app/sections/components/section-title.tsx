import React from 'react'

export default function SectionTitle({children}: {children: React.ReactNode}) {
  return (
    <h2 className='text-4xl font-semibold text-center'>{children}</h2>
  )
}
