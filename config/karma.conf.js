// Karma configuration
// Generated on Fri Aug 16 2013 04:51:21 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    // basePath: '',
    // basePath = '../';
    basePath: '../app',

    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // files: [
    // ],
    files: [
      // JASMINE,
      // JASMINE_ADAPTER,
      // 'app/lib/angular/angular.js',
      // 'app/lib/angular/angular-*.js',
      // 'test/lib/angular/angular-mocks.js',
      // 'app/js/**/*.js',
      // 'test/unit/**/*.js'
      'js/jquery.js',
      'lib/angular/angular.js',
      'lib/angular/angular-*.js',
      '../test/lib/angular/angular-mocks.js',
      // '../test/lib/sinon-1.6.0.js',
      'js/**/*.js',
      '../test/unit/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      // 'app/js/bootstrap*.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],
    // junitReporter = {
    //   outputFile: 'test_out/unit.xml',
    //   suite: 'unit'
    // };


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
