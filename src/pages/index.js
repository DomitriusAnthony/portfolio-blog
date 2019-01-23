import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import NavMenu from '../components/navMenu';

const IndexPage = () => (
  <Layout>
    <NavMenu />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
