import React from 'react'
import Layout from '../layout'
import SectionTitle from '../components/section-title'
import Image from 'next/image'
import { Logo, LogosContainer } from './components'

export default function Technologies() {
  return (
    <Layout id='technologies'>
      <SectionTitle>Tecnologías</SectionTitle>
      <div className='grid grid-cols-3 place-items-center px-16'>
        <LogosContainer title='Front-end'>
            <Logo src='/react.svg' title='React'/>
            <Logo src='/next.svg' title='Next.js'/>
            <Logo src='/redux.svg' title='Redux'/>
            <Logo src='/tailwindcss.svg' title='Tailwind CSS'/>
        </LogosContainer>
        <div>
          <Logo src='/typescript.svg' title='Typescript'/>
        </div>
        <LogosContainer title='Back-end'>
            <Logo src='/nestjs.svg' title='Nestjs'/>
            <Logo src='/postgresql.svg' title='PostgreSQL'/>
            <Logo src='/mongodb.svg' title='MongoDB'/>
            <Logo src='/express.svg' title='Express'/>
        </LogosContainer>
      </div>
    </Layout>
  )
}
