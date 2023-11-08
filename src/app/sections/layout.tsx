export default function Layout({ children, id }: { children: React.ReactNode, id: string }) {
  return (
    <section id={id} className='min-h-[calc(100dvh-4rem)] flex flex-col gap-16 pt-24'>{children}</section>
  )
}
