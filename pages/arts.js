import Image from 'next/image'
import Layout from '../components/layout'
import Artwork from '../components/artwork'
export default function Arts() {
    let artwork = [
        {
            title: 'annunciation of crotchwink',
            date: '2020',
            medium: 'gouache',
            image: 'annunciation.jpg'
        },
        {
            title: 'wizard crotchwink comes home',
            date: '2019',
            medium: 'gouache',
            image: 'crotchwink.jpg'
        },
        {
            title: 'spirit ii',
            date: '2018',
            medium: 'ink and gold leaf',
            image: 'spiritii.jpg'
        },
        {
            title: 'spirit i',
            date: '2018',
            medium: 'ink and gold leaf',
            image: 'spiriti.jpg'
        },
        {
            title: 'cowboy',
            date: '2018',
            medium: 'lithograph',
            image: 'cowboy.jpg'
        },
        {
            title: 'drifter',
            date: '2018',
            medium: 'lithograph',
            image: 'drifter.jpg'
        },
        {
            title: "melencolia '97",
            date: '2018',
            medium: 'screenprint',
            image: 'melencolia97.jpg'
        },
        {
            title: 'i hope you think of me sometimes',
            date: '2018',
            medium: 'screenprint',
            image: 'angel.jpg'
        }
    ];
    return (
        <Layout>
            <section className="text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-tactile ">
                    some of my art
             </h1>
                <div className="grid grid-cols-1 lg:mx-8 lg:gap-x-8 mb-32 ">
                    {artwork.map((art) => (
                        <div className="border-b-4 px-4 py-4 border-orange border-dashed xl:flex flex-row">
                            <div className="">
                                <img className="py-8 max-w-100 max-h-600" src={'/assets/artwork/' + art.image} layout='fill' objectFit='contain' sizes='100' />

                            </div>
                            <div className="ml-6 pb-6 xl:pt-16">
                                <h3 className="text-3xl font-mono text-blue">{art.title}</h3>
                                <div className="text-lg font-tactile">{art.medium}</div>
                                <div className="text-lg font-tactile">{art.date}</div>
                            </div>


                        </div>
                    ))}

                </div>
            </section>
        </Layout>
    )
}
