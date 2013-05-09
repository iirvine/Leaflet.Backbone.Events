// Karma configuration
var libSources = require(__dirname+'/../node_modules/Leaflet/build/build.js').getFiles();

// base path, that will be used to resolve files and exclude
basePath = '';

for (var i=0; i < libSources.length; i++) {
	libSources[i] = __dirname+"/../node_modules/Leaflet/" + libSources[i];
}

// list of files / patterns to load in the browser
files = [].concat([
	"../node_modules/mocha/mocha.js",
	MOCHA_ADAPTER,
	"../node_modules/Leaflet/spec/before.js",
	"../node_modules/Leaflet/spec/sinon.js",
	"../node_modules/Leaflet/spec/expect.js"
	],
	"../node_modules/underscore/underscore.js",
	"../node_modules/backbone/backbone.js",
	libSources,
	"../L.Backbone.Events.js",
	[ "../node_modules/Leaflet/spec/after.js",
	"../node_modules/Leaflet/spec/happen.js",
	"../node_modules/Leaflet/spec/suites/SpecHelper.js",
	"../node_modules/Leaflet/spec/suites/**/*.js"
]);

// list of files to exclude
exclude = [
];

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['dots'];

// web server port
port = 8080;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_WARN;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;
