module.exports = {
  siteMetadata: {
    title: `Quang Pham`,
    description: `This is quangpham's portfolio version 2 which was built by gatsby.js`,
    author: `Nhat Quang Pham`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve:`gatsby-transformer-remark`,
      options:{
        plugins:[{
          resolve: `gatsby-remark-emojis`,
          options:{
            active: true,
            class  : 'emoji-icon',
            //specify an escape character which will be prepended to the actual pattern
            escapeCharacter:'#',
            //Select size:
            size : 64,
            styles:{
              display: `inline`,
              margin:`0`,
              position:`relative`,
              top:`5px`,
              width: `25px`,
            }
          }
        }]
      }
    }
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
