import Image from 'next/image'
import Layout from '../components/layout'
import Artwork from '../components/artwork'
export default function Arts() {
    return (
        <Layout>
            <section className="text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-tactile ">
                    this page is coming soon.
             </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-8 lg:gap-x-8 gap-y-4 mb-32 ">

                    <Artwork />
                    <Artwork />
                    <Artwork />
                    <Artwork />
                    <Artwork />
                </div>
            </section>
        </Layout>
    )
}
