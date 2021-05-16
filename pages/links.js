import Image from 'next/image'
import Footer from '../components/footer'
import Layout from '../components/layout'

export default function Links() {
    return (
        <Layout>
            <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                <h1 className="text-5xl md:text-7xl font-tactile tracking-tighter leading-tight ">
                    this page is coming soon.
                </h1>
            </section>
        </Layout>
    )
}
