import Link from 'next/link'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import NestedLayout from '../components/nested-laytout'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <ul>
      <li>
        <Link href="/about">
          <a>Go to about</a>
        </Link>
      </li>
      <li>
        <Link href="/content/abc">
          <a>Also goes to pages/content/[id].js</a>
        </Link>
      </li>
    </ul>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Home