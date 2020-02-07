import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About Me</h1>
            <p>I currently work at Continuous Software on the next
              big thing in Portfolio Project Management (PPM).</p>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
            {/*<p><a href="/contact">Want to work with me? Reach out, slower...</a></p>*/}
        </Layout>
    )
}

export default AboutPage
