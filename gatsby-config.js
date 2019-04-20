module.exports = {
    siteMetadata: {
        title: 'Gatsby Static Site',
        author: 'Bill Vasilopoulos'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark'
    ]
};
