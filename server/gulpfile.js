var gulp = require('gulp');
const process = require('process');
const spawn = require('child_process').spawn;
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var watch = require('gulp-watch');

// By default start the server
gulp.task('default', ['browser-sync'], function () {
});

// bundletask()
// Client bundle task will rebuild the 
// clients app-bundle.js and vendor-bundle.js files.
// This task gets called by the bundle task.
function bundletask(v) {
	console.log("Running 'Client Bundle' commands");

	// Ignore environment.js as it gets "changed" during a build.
	// In reality the access time gets modified and that counts as a change
	if ((typeof(v) != 'undefined'))
	{
		if (v.relative == "environment.js")
		{
			// skip this guy
			return;
		}
	}

	// save the server directory
	var cwd = process.cwd();

	// change to the client directory
	process.chdir('../client');

	// execute the au build
	const bundle = spawn('au', ['build','--env','dev']);

	bundle.stderr.on('data', (data) => {
  	console.log(`stderr: ${data}`);
	});

	// go back to the server directory
	process.chdir(cwd);
}

// bundle() 
// The client bundle execution task. Can be 
// called by the file watchers or by the command line.
gulp.task('bundle', function() {
	bundletask();
});


// browser-sync()
// The task to start the server using nodemon
// and watch files for change using browser-sync.
gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:9000",
        files: ["**/*.*", "../client/scripts/app-bundle.js", "../client/scripts/vendor-bundle.js"],
        browser: "safari",
        port: 7000,
	});
	watch('../client/src/*.*', { events: ['change']}, bundletask);
});

// nodemon()
// The task to start the server.
gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'server.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});