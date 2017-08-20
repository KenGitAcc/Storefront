//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
     'lib/angular.min.js',
  'lib/angular-mocks.js',
  'app/*.js',
  'tests/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
