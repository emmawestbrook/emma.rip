import Container from './container'
import Image from 'next/image'

export default function Sidebar() {
    return (
        <>
            <div className="sm:border sm:border-orange hover:border-dashed mb-5">


                <div class="text-center px-5 py-5 ">
                    <a href="/" className="">
                        <Image className="mx-4" src='/sun.png' width='100px' height='100px' />
                    </a>
                    <h2 className="font-tactile text-2xl pt-2 text-blue">emma.rip</h2>
                    <a href="/thots" className="hover:text-blue text-orange hover:bg-orange
          font-mono text-2xl text-center duration-300 transition-colors">
                        <h5 className=" ">thots </h5>
                    </a>
                    <a href="/arts" className="hover:text-blue text-orange hover:bg-orange
          font-mono text-2xl text-center duration-300 transition-colors">
                        <h5 >arts </h5>
                    </a>
                    <a href="/links" className="hover:text-blue text-orange hover:bg-orange
          font-mono text-2xl text-center duration-300 transition-colors">
                        <h5 >links </h5>
                    </a>
                    <a href="/pics" className="hover:text-blue text-orange hover:bg-orange
          font-mono text-2xl text-center duration-300 transition-colors">
                        <h5 >pics </h5>
                    </a>

                </div>

            </div>
            <div className="hidden sm:block" >
                <Image className=" mx-4 mt-15" src='/skeleton.png' width='150px' height='200px' />

            </div>

        </>
    )
}