import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Sidebar from '../components/sidebar'
import Container from '../components/container'
import Image from 'next/image'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Container>
        <div id="content" className="content sm:flex py-10">
          <div className=" sm:object-left sm:grid-cols-3 sm:pr-16 lg:pl-4">
            <Sidebar />
          </div>
          <div className=" sm:grid-cols-9">
            <main>{children}</main>
          </div>
        </div>
        <div className="sm:hidden text-center" >
          <Image className="" src='/skeleton.png' width='150px' height='200px' />
        </div>
      </Container>


      {/* <Footer /> */}
    </>
  )
}
