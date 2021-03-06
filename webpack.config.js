let Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .autoProvidejQuery()
    .enableSassLoader()
    .enableVersioning()
    .createSharedEntry('js/common', ['jquery'])
    .addEntry('js/app', './assets/js/app.js')
    .addEntry('js/login', './assets/js/login.js')
    .addEntry('js/register', './assets/js/register.js')
    .addEntry('js/admin', './assets/js/admin.js')
    .addEntry('js/search', './assets/js/search.js')
    .addEntry('js/chat-box', './assets/js/chat-box.js')
    .addEntry('js/textEditor', './assets/js/textEditor.js')
    .addEntry('js/chart-area-demo', './assets/js/chart-area-demo.js')
    .addEntry('js/chart-pie-demo', './assets/js/chart-pie-demo.js')

    .addStyleEntry('css/app', ['./assets/scss/app.scss'])
    .autoProvideVariables({
        "window.Bloodhound": require.resolve('bloodhound-js'),
        "jQuery.tagsinput": "bootstrap-tagsinput",
        "MediumEditor": "medium-editor"
    })
;

module.exports = Encore.getWebpackConfig();
