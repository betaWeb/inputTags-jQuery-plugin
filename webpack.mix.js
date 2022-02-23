// webpack.mix.js

let mix = require('laravel-mix')
let { rmSync, renameSync } = require('fs')

mix
    .disableNotifications()
    .disableSuccessNotifications()
    .before(() => {
        try {
            rmSync('src/inputTags.css')
        } catch {}

        try {
            rmSync('dist/', { recursive: true, force: true })
        } catch {}
    })
    .js('src/index', 'dist/inputTags.jquery')
    .less('src/inputTags.less', 'src/inputTags.css')
    .minify([
        'dist/inputTags.jquery.js',
        'src/inputTags.css'
    ])
    .options({ manifest: false })
    .after(() => {
        setTimeout(() => {
            rmSync('dist/inputTags.jquery.js')
            renameSync('src/inputTags.min.css', 'dist/inputTags.min.css')
        })
    })
