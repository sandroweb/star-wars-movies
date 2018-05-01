module.exports = function (grunt) {

  'use strict';

  var os = require('os');

  grunt.initConfig({

    'http-server': {
      dev: {
        root: '.',
        port: '8888',
        showDir: true,
        autoIndex: 'index.html',
        ext: 'html',
        runInBackground: true,
        openBrowser : false,
      }
    },

    stylus: {
      main: {
          files: {
            'src/css/styles.css': 'src/css/styles.styl'
          },
          options: {
              compress: false,
              sourcemap: {
                  inline: true
              }
          }
      }
    },
    
    notify: {
      watch: {
        options: {
          title: 'Watch Completed!',
          message: 'Waiting for more changes...'
        }
      }
    },

    watch: {
      css: {
        files: ['src/css/**/*.styl'],
        tasks: ['stylus'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      notify: {
        files: ['src/**/*.*'],
        tasks: ['notify'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  });

  // Load all dependences needed
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.registerTask('build', ['stylus']);

  grunt.registerTask('default', ['build', 'http-server', 'watch']);

};