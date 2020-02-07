import React from 'react'
import { graphql, useStaticQuery, StaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

// const Footer = () => {
//     const data = useStaticQuery(graphql`
//         query {
//             site {
//                 siteMetadata {
//                     author
//                 }
//             }
//         }
//     `)
//
//     return (
//       <footer className={footerStyles.footer}>
//           <p>Created by {data.site.siteMetadata.author}, © 2020</p>
//       </footer>
//     )
// }
//
// export default Footer

const Footer = (props) => {
  const { data } = props;
  return (
    <footer className={footerStyles.footer}>
        <p>Created by {data.site.siteMetadata.author}, © 2020</p>
    </footer>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `}
    render={data => <Footer data={data} {...props} />}
   />
);
