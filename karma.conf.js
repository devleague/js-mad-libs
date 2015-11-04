module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon', 'sinon-chai', 'fixture'],
    files: [
      {pattern: 'test/fixtures/**/*.html', included: true},
      'test/*.spec.js'
    ],
    reporters: ['progress'],
    preprocessors: {
            'test/fixtures/index.html': ['html2js'],
        },
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,
    browsers: ['PhantomJS']
  });
};