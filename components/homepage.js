import { CMS_NAME } from '../lib/constants'

export default function Homepage() {
    return (
        <section className="flex-col font-mono md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h2 className="text-center md:text-left text-lg mt-5 md:pl-8 max-w-prose">
                hello, i'm emma and this is my website. here are some of{' '}
                <a
                    href="/thots"
                    className="underline hover:text-success font-tactile duration-200 transition-colors"
                >
                    my thoughts
        </a>{' '}
            </h2>
        </section>
    )
}
