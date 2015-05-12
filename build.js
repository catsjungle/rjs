({
    appDir: './src',
    baseUrl: './js',
    dir: './dist',
    modules: [
        {
            name: 'a'
        },
        {
            name: 'b'
        }
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
        // zepto: 'lib/zepto',
        // jHash: 'lib/jhash',
        // handlebars: 'lib/handlebars',
        // underscore: 'lib/underscore',
        // Deferred: 'lib/deferred',
        // DataCenter: 'model/datacenter',
        // iscroll: 'lib/iscroll',
        // fastclick: 'lib/fastclick',
        // wxstat: 'util/wxstat',
        // overthrow: 'lib/overthrow'
    },
    'shim': {
        // iscroll: {
        //     exports: 'IScroll'
        // },
        // zepto: {
        //     exports: '$'
        // },
        // jHash: {
        //     exports: 'jHash'
        // },
        // handlebars: {
        //     exports: 'Handlebars'
        // },
        // underscore: {
        //     exports: '_'
        // },
        // Deferred: {
        //     deps: ['underscore'],
        //     exports: 'Deferred'
        // },
        // wxstat: {
        //     deps: ['zepto'],
        //     exports: 'wxstat'
        // },
        // overthrow: {
        //     exports: 'overthrow'
        // }
    }
})
