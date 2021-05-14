import Image from 'next/image'
import Footer from '../components/footer'

export default function Links() {
    return (
        <section >

            <div className="flex-col md:flex-row flex items-center  mt-16 mb-16 md:mb-12 mx-40">
                <h1 className="text-5xl md:text-7xl font-tactile tracking-tighter ml-16 leading-tight md:pr-8">
                    this page is coming soon.
             </h1>
            </div>
            <div className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 mx-40">
                <h2 className="text-left text-lg mt-5 md:pl-8 max-w-prose">
                    hello, i'm emma and this is my website. here are some of{' '}
                    <a
                        href="/thots"
                        className="underline hover:text-success font-tactile duration-200 transition-colors"
                    >
                        my thoughts
        </a>{' '}
                </h2>
            </div>
            <Footer />
        </section>
    )
}
