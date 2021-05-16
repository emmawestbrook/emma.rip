import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Sidebar from '../components/sidebar'
import Container from '../components/container'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Container>
        <div id="content" className="content sm:flex py-10">
          <div className=" max-w-xs sm:object-left sm:grid-cols-3 ">
            <Sidebar />
          </div>
          <div className=" sm:grid-cols-9">
            <main>{children}</main>
          </div>
        </div>
      </Container>


      {/* <Footer /> */}
    </>
  )
}
