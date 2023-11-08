import React from 'react'
import Layout from '../section-layout'
import SectionTitle from '../components/section-title'

import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Contact() {
  return (
    <Layout _id='contact'>
      <SectionTitle>Contacto</SectionTitle>
      <div className='flex justify-center items-center flex-col gap-8'>
        <div className='flex items-center gap-4'>
          <Button asChild size='icon'>
            <Link href='https://github.com/Jared-MB' target='_blank' rel='noreferrer'>
              <FiGithub className='w-6 h-6'/>
            </Link>
          </Button>
          <Button asChild size='icon'>
            <Link href='https://linkedin.com/in/angel-jared-muñoz-baez-348748241' target='_blank' rel='noreferrer'>
              <FaLinkedinIn className='w-6 h-6'/>
            </Link>
          </Button>
          <Button asChild size='icon'>
            <Link href='https://www.instagram.com/a.jared_munoz/' target='_blank' rel='noreferrer'>
              <FaInstagram className='w-6 h-6'/>
            </Link>
          </Button>
        </div>
        amunozbaez669@gmail.com
      </div>
    </Layout>
  )
}
