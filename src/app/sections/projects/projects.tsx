import React from 'react'
import Layout from '../layout'
import { Project } from './components'
import SectionTitle from '../components/section-title'

export default function Projects() {
  return (
    <Layout id='projects'>
      <SectionTitle>Proyectos</SectionTitle>
      <div className='flex flex-col gap-12'>
        <Project 
          personal
          link='https://kristall.vercel.app/'
          image={{
            alt: 'Dashboard',
            src: '/dashboard.png'
          }}
          title='Kristall'>
            Punto de ventas, gestor de inventario y de pedidos para emprendedores. Como front-end utilicé <strong>React</strong>, <strong>Redux</strong> y <strong>Tailwind CSS</strong> para el dashboard junto con un bucket de <strong>Firebase</strong> para guardar imágenes y <strong>Next.js</strong> para la landing page, con un servidor creado con <strong>Nestjs</strong> y <strong>PostgreSQL</strong> como motor de base de datos, más una integración con <strong>Stripe</strong> como pasarela de pago.
        </Project>
        {/* <Project 
          personal
          reverse
          link='https://kristall.vercel.app/'
          image={{
            alt: 'Dashboard',
            src: '/dashboard.png'
          }}
          title='Kristall'>
            Punto de ventas, gestor de inventario y de pedidos para emprendedores. Como front-end utilicé <strong>React</strong>, <strong>Redux</strong> y <strong>Tailwind CSS</strong> para el dashboard junto con un bucket de <strong>Firebase</strong> para guardar imágenes y <strong>Next.js</strong> para la landing page, con un servidor creado con <strong>Nestjs</strong> y <strong>PostgreSQL</strong> como motor de base de datos, más una integración con <strong>Stripe</strong> como pasarela de pago.
        </Project>
        <Project 
          personal
          link='https://kristall.vercel.app/'
          image={{
            alt: 'Dashboard',
            src: '/dashboard.png'
          }}
          title='Kristall'>
            Punto de ventas, gestor de inventario y de pedidos para emprendedores. Como front-end utilicé <strong>React</strong>, <strong>Redux</strong> y <strong>Tailwind CSS</strong> para el dashboard junto con un bucket de <strong>Firebase</strong> para guardar imágenes y <strong>Next.js</strong> para la landing page, con un servidor creado con <strong>Nestjs</strong> y <strong>PostgreSQL</strong> como motor de base de datos, más una integración con <strong>Stripe</strong> como pasarela de pago.
        </Project> */}
      </div>
    </Layout>
  )
}
