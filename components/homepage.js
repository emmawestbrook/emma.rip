import { CMS_NAME } from '../lib/constants'

export default function Homepage() {
    return (
        <section className="font-syne lg:mx-16 text-center lg:text-left max-w-prose">
            <h2 className="text-xl pt-6">
                hello, i'm <div className="font-tactile text-2xl inline">emma</div> and this is my website. i'm a programmer and an artist.
            </h2>
            <h2 className="text-xl pt-6">
                i also like to write about music sometimes.
                i've got some album reviews on this site in the thots section. <div className="inline text-xs">haha</div> here's
                a link to my <a className="font-tactile underline" href="https://www.last.fm/user/bog_hag">last.fm</a> if you'd like to see what i've been listening to lately. you can also find me & my artwork on <a className="font-tactile underline" href="https://instagram.com/bog_hag">instagram</a> if you like.
            </h2>
            {/*<h2 className="text-xl pt-6">*/}
            {/*    some other things i like include medieval illuminated manuscripts, disco music, and books with dragons in them.*/}
            {/*</h2>*/}
            <div className="text-md my-16 text-orange font-tactile">
                (<p className="text-xs font-syne inline"> this website was made with next.js and tailwind. it's deployed on netlify. the background color is 'peachpuff'.
                <br></br><a href="https://github.com/emmawestbrook/emma.rip" className="font-mono hover:underline">here's the source code.</a>
                </p> )
            </div>
            <a className="text-peachpuff " href="https://www.ubuweb.com/outsiders/ass/Crumberry-Sause.jpg">cr'mberry sause</a>
        </section>
    )
}
