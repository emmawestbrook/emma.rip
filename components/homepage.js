import { CMS_NAME } from '../lib/constants'

export default function Homepage() {
    return (
        <section className="font-mono md:mx-16 md:pl-16 text-center md:text-left max-w-prose">
            <h2 className="text-center md:text-left text-lg py-6">
                hello, i'm emma and this is my website. i'm a programmer and an artist but mostly i am just a person
                who likes to think about the internet.
            </h2>
            <p className="text-xs">
                this website was made with next.js and tailwind. the background color is peachpuff.
            </p>
        </section>
    )
}
