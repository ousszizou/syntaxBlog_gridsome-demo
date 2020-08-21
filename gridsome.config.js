// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require("tailwindcss")

module.exports = {
  siteName: 'simple blog',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
      },
    },
  ],
  templates: {
    Post: "/posts/:title",
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  },
}
