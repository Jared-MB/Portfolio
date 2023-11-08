import { About, Contact, Projects, Technologies } from "./sections";

export default function Home() {
  return (
    <main className='relative top-16'>
      <About/>
      <Projects/>
      <Technologies/>
      <Contact/>
    </main>
  )
}
