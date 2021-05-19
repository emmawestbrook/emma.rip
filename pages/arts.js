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
            <section className="">
                <h1 className="text-5xl md:text-7xl font-tactile my-16 text-center md:text-left">
                    some of my art
             </h1>
                <div className="grid grid-cols-1 lg:mx-8 lg:gap-x-8 mb-32 ">
                    {artwork.map((art) => (
                        <div className=" px-4 lg:py-4  lg:flex lg:flex-row">
                            <div className="">
                                <img className=" pt-8 lg:py-8 max-w-100 xl:max-w-screen-sm max-h-600" src={'/assets/artwork/' + art.image} />

                            </div>
                            <div className="mb-8 lg:pt-24 text-center md:text-left">
                                <div className=" px-6 py-6 border border-orange border-dashed ">
                                    <h3 className="text-2xl font-mono text-blue">{art.title}</h3>
                                    <div className="text-lg pt-4 font-tactile">{art.medium}</div>
                                    <div className="text-xl font-tactile">{art.date}</div>
                                </div>

                            </div>


                        </div>
                    ))}

                </div>
            </section>
        </Layout>
    )
}
