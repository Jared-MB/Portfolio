export default function Layout({ children, _id }: { children: React.ReactNode, _id: string }) {
  return (
    <section id={_id} className='min-h-[calc(100dvh-4rem)] flex flex-col gap-16 pt-24'>{children}</section>
  )
}
