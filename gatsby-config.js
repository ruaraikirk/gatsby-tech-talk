module.exports = {
  siteMetadata: {
    title: 'Gatsby JS Tech Talk',
    author: 'Ruarai Kirk'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem', // Plugin
      options: {
        name: 'src',
        path: `${__dirname}/src/` // path to the directory (___dirname comes from nodejs)
      }
    },
    'gatsby-plugin-sharp',
    // 'gatsby-transformer-remark' when no images used
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false // Disables clicking of image to location
            }
          }
        ]
      }
    }
  ]
}
