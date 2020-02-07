import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const newPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>This is a new page.</h2>
    </Layout>
  )
}

export default newPage
