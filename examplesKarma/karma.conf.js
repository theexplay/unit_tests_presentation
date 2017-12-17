module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            { pattern: 'test-context.js', watched: false }
        ],
        frameworks: ['jasmine', 'fixture'],
        preprocessors: {
            'test-context.js': ['webpack'],
            '**/*.html'   : ['html2js'],
            '**/*.json'   : ['json_fixtures']
        },
        webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },
        jsonFixturesPreprocessor: {
            variableName: '__json__'
        }
    });
};
