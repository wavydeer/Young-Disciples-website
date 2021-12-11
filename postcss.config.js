module.exports = {
    plugins: [
        require('postcss-import'),  // combine all css to 1 output
        require('autoprefixer'),  // add things like moz-display-flex
        // require('cssnano'),  // auto minify css
    ],
}