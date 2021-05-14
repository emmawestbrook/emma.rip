import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Sidebar from '../components/sidebar'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
