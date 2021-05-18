import Image from 'next/image'
import Footer from '../components/footer'
import Layout from '../components/layout'

export default function Links() {
    return (
        <Layout>

            <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                <h1 className="text-5xl md:text-7xl font-tactile tracking-tighter leading-tight ">
                    some links i like
                </h1>
            </section>
            <div className="max-w-prose md:pl-8">
                <div className="mx-6 my-6">
                    <a href="https://www.ubuweb.com/" className="hover:text-blue text-orange font-mono text-center duration-300 transition-colors">
                        ubu web
                    </a> — i discovered this site in school, with some friends in the art history department.
                    so many amazing works live here, and the site is coded in a beautifully simple way! i particularly like the <a className="font-mono hover:underline" href="https://www.ubuweb.com/outsiders/ass.html">outsiders</a> section.
                </div>
                <div className="mx-6 my-6">
                    <a href="https://fruitful.school/" className="hover:text-blue text-orange font-mono text-center duration-300 transition-colors">
                        fruitful.school
                    </a> — fruit emoji clock!!
                </div>
                <div className="mx-6 my-6">
                    <a href="http://luckysoap.com/statements/handmadeweb.html" className="hover:text-blue text-orange font-mono text-center duration-300 transition-colors">
                        the handmade web
                    </a> — part of what inspired me to make this site. as an artist and printmaker i like to think of these kinds of sites as digital zines.
                </div>
                <div className="mx-6 my-6">
                    <a href="https://unimaginable-heights.neocities.org/index.html" className="hover:text-blue text-orange font-mono text-center duration-300 transition-colors">
                        unimaginable heights
                    </a> — a great little neocities blog. i love their wild-at-heart and buttoned-up lists.
                </div>
                <div className="mx-6 my-6">
                    <a href="https://href.cool/" className="hover:text-blue text-orange font-mono text-center duration-300 transition-colors">
                        href.cool
                    </a> — the perfect way to spend an hour clicking around.
                </div>
                <div className="mx-6 my-6">
                    <a href="https://elliott.computer/" className="hover:text-blue text-orange font-mono text-center duration-300 transition-colors">
                        elliott cost's work
                    </a> — i love all of elliott's sites, for both their style and substance.
                </div>
            </div>


        </Layout>
    )
}
