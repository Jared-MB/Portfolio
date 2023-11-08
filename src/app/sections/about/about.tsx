import React from 'react'
import Layout from '../section-layout'

export default function About() {
  return (
    <Layout _id='home'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='font-bold text-4xl'>Hola, soy <span className='text-purple-500'>Jared</span></h1>
        <h2 className='font-semibold text-2xl'>Desarrollador web</h2>
      </div>
      <div className='flex flex-col items-center gap-6'>
        <p className='text-center text-lg max-w-3xl'>Soy un desarrollador front-end de México y tengo 20 años. Hace 3 años me enamore del desarrollo web y desde entonces he estado aprendiendo tecnologías y desarrollando aplicaciones web.</p>
        <p className='text-center text-lg max-w-xl'>Actualmente estoy trabajando con <strong className='text-purple-500'>Typescript</strong>, <strong className='text-purple-500'>React</strong> y <strong className='text-purple-500'>Tailwind CSS</strong>, pero estoy dispuesto a aprender nuevas tecnologías</p>
      </div>
    </Layout>
  )
}
