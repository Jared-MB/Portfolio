import Image from 'next/image'
import Link from 'next/link'

interface ProjectImage {
    src: string
    alt: string
}

export default function Project({ image: { src, alt }, title, children, link, reverse, personal }: { image: ProjectImage, title: string, children: React.ReactNode, link: string, reverse?: boolean, personal?: boolean }) {
  return (
    <article className='h-72 grid grid-cols-2 place-items-center p-4'>
        <picture className={`rounded-md shadow-lg p-1 row-start-1 ${reverse ? 'col-start-2' : 'col-start-1'}`}>
            <Image src={src} alt={alt} width={450} height={200} className='rounded-md'/>
        </picture>
        <div className={`flex gap-4 flex-col px-16 row-start-1 ${reverse ? 'col-start-1': 'col-start-2' }`}>
            <header className='flex items-end justify-between'>
              <h3 className='font-semibold text-2xl underline text-purple-500'>{title}</h3>
              {
                personal && <small className='font-semibold text-gray-700'>Proyecto personal</small>
              }
            </header>
            <p>{children}</p>
            <Link target='_blank' href={link} className='text-sm font-bold hover:underline text-purple-500'>Ver sitio</Link>
        </div>
    </article>
  )
}
