import Container from './container'
import Image from 'next/image'

export default function Sidebar() {
    return (
        <div className="border border-orange ">


            <div class="text-center px-5 py-5">
                <a href="/" className="">
                    <Image className="mx-4" src='/sun.png' width='100px' height='100px' />
                </a>
                <h2 className="font-tactile text-2xl pt-2">emma.rip</h2>
                <a href="/thots" className="hover:text-peachpuff text-orange hover:bg-orange
          font-mono text-2xl text-center duration-400 transition-colors">
                    <h5 className=" ">thots </h5>
                </a>
                <a href="/arts" className="hover:text-peachpuff text-orange hover:bg-orange
          font-mono text-2xl text-center duration-400 transition-colors">
                    <h5 >arts </h5>
                </a>
                <a href="/links" className="hover:text-peachpuff text-orange hover:bg-orange
          font-mono text-2xl text-center duration-400 transition-colors">
                    <h5 >links </h5>
                </a>
                <a href="/pics" className="hover:text-peachpuff text-orange hover:bg-orange
          font-mono text-2xl text-center duration-400 transition-colors">
                    <h5 >pics </h5>
                </a>

            </div>

        </div>
    )
}