import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-orange border-t border-black">
      <Container>
        <div className="py-4 flex ">


          <a href="/thots" className="text-peachpuff font-syne text-center flex-1 border border-peachpuff mx-2">
            <h5 >thots </h5>
          </a>
          <a href="/arts" className="text-peachpuff font-syne text-center flex-1 border border-peachpuff mx-2">
            <h5 >arts </h5>
          </a>
          <a href="/links" className="text-peachpuff font-syne text-center flex-1 border border-peachpuff mx-2">
            <h5 >links </h5>
          </a>
          <a href="/pics" className="text-peachpuff font-syne text-center flex-1 border border-peachpuff mx-2">
            <h5 >pics </h5>
          </a>
        </div>
      </Container>
    </footer>
  )
}
