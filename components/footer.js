import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-orange  py-5 min-width-full">
      <Container className="">
        <div className="py-10 flex ">
          <a href="/" className="text-peachpuff bg-peachpuff border-4 border-orange border-dotted
          font-tactile text-center flex-none px-5 pt-2  ">
            <h1 className="z-10 self-center justify-self-center">home </h1>
            <Image className="z-50 absolute" src='/sun.png' width='40px' height='40px' />
          </a>
          <a href="/thots" className="text-peachpuff hover:text-orange hover:bg-peachpuff 
          font-mono text-2xl text-center flex-1 border border-peachpuff mx-2 py-4 duration-400 transition-colors">
            <h5 className=" ">thots </h5>
          </a>
          <a href="/arts" className="text-peachpuff hover:text-orange hover:bg-peachpuff font-mono text-2xl
           text-center flex-1 border border-peachpuff mx-2 duration-200 py-4 transition-colors">
            <h5 >arts </h5>
          </a>
          <a href="/links" className="text-peachpuff hover:text-orange hover:bg-peachpuff font-mono text-2xl
           text-center flex-1 border border-peachpuff mx-2 duration-200 py-4 transition-colors">
            <h5 >links </h5>
          </a>
          <a href="/pics" className="text-peachpuff hover:text-orange hover:bg-peachpuff font-mono text-2xl
           text-center flex-1 border border-peachpuff mx-2 duration-200 py-4 transition-colors">
            <h5 >pics </h5>
          </a>
        </div>
      </Container>
    </footer>
  )
}
