import { CMS_NAME } from '../lib/constants'

export default function Homepage() {
    return (
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">

            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                some of{' '}
                <a
                    href="/thots"
                    className="underline hover:text-success font-mono duration-200 transition-colors"
                >
                    my thoughts
        </a>{' '}
            </h4>
        </section>
    )
}
