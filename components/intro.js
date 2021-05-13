import Image from 'next/image'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between md:mx-10 mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-7xl font-tactile tracking-tighter leading-tight md:pr-8">
        emma.
        <a
          href="/blog"
          className="text-3xl md:text-5xl underline hover:text-tomato font-mono duration-200 transition-colors"
        >rip
        </a>{' '}
      </h1>
      <a
        href="/"
        className=""
      >
        <Image className="" src='/sun.png' width='100px' height='100px' />

      </a>

    </section>
  )
}
