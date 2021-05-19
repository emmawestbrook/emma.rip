import Image from 'next/image'
import Layout from '../components/layout'

export default function Artwork() {
    return (

        <div className="border px-4 py-4  border-orange border-dashed">
            <div className="mb-5 filter grayscale hover:grayscale-0">
                <Image className=" mx-4 mt-15" src={this.props.image} width='170px' height='220px' />

            </div>
            <h3 className="text-3xl mb-3 leading-snug font-mono text-blue">title</h3>
            <div className="text-lg mb-4 font-tactile">medium, date</div>
        </div>


    )
}
