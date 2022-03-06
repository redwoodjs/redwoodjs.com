module.exports = {
  addons: ['@storybook/addon-viewport'],
  previewHead: (head) => `
  ${head}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&display=swap"
  rel="stylesheet"
  />
  <link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
  />
  <link
  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/atom-one-light.min.css"
  rel="stylesheet"
  />
  `,
}
