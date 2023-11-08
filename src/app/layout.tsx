import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { ThemeProvider } from './theme-provider'
import ThemeButton from './components/theme-button'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jared Muñoz',
  description: 'Desarrollador web front-end, apasionado por la tecnología y el aprendizaje continuo.',
  authors: {
    name: 'Jared Muñoz',
    url: 'https://jared-mb.vercel.app/'
  },
  keywords: [
    'Desarrollador web',
    'React',
    'Developer',
    'Javascript',
    'Front-end',
    'Frontend',
    'Front end',
    'Frontend developer',
    'Front end developer',
    'Web developer',
    'React developer',
    'Javascript developer',
    'Reactjs',
    'Redux',
    'Developer Mexico',
    'Desarrollador web Mexico',
    'Desarrollador web con React',
    'Jared Muñoz',
    'Jared Muñoz Baez',
    'Desarrollador Jared Muñoz',
    'Mexico',
    'Nestjs',
    'Next.js',
    'Tailwind CSS',
    'Typescript',
  ],
  category: 'Software',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              // enableSystem
              // disableTransitionOnChange
            >
          <header className='fixed w-screen z-10'>
            <nav className='flex items-center gap-4 justify-end h-16 p-4 pr-8 bg-white dark:bg-[#131313] shadow'>
              <Link href='#home' className='hover:font-semibold hover:text-purple-500 duration-300'>Inicio</Link>
              <Link href='#projects' className='hover:font-semibold hover:text-purple-500 duration-300'>Proyectos</Link>
              <Link href='#technologies' className='hover:font-semibold hover:text-purple-500 duration-300'>Tecnologías</Link>
              <Link href='#contact' className='hover:font-semibold hover:text-purple-500 duration-300'>Contacto</Link>
              <ThemeButton/>
            </nav>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
