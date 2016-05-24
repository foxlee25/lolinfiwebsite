/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['lib/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      all:{
        files: [{
          expand: true,
          cwd: './client/js/',
          src: ['*.js', '**/*.js'],
          dest: '../LolInfi_deploy/client/js/'
        }]
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: false,
        boss: true,
        eqnull: true,
        browser: true,
        laxcomma: true,
        globals: {
          jQuery: true,
          angular: true,
          Twitch: true,
          app: true,
          console: true,
          require: true,
          exports: true,
            $: true,
            d3: true,
          module: true,
          TWEEN: true,
          THREE: true,
          process: true,
          FB: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['!./client/js/simple-slider.js',
                './client/js/*.js',
                './client/js/**/*.js', 
                './server/*.js',
                './server/dao/*.js',
                './server/route/*.js',
                './server/util/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      server: {
        files: ['.rebooted'],
        options: {
          livereload: true
        }
      }
    },
    copy: {
      main: {
        files:[
          {
            expand: true,
            src: ['./**', '!./client/images/**', '!./client/js/**'], 
            dest: '../LolInfi_deploy/'
        }
        ]
      }
    },
    clean: {
      options:{
        force: true
      },
      delete:{
        src:["../LolInfi_deploy/*"]
      },
	  git:{
		src:["./tmp/*"]
	  },
      css:{
        src:["../LolInfi_deploy/client/css/*.css"]
      },
      template:{
        src:["../LolInfi_deploy/client/templates/*/", "../LolInfi_deploy/client/templates/*"]
      }
    },
    image:{
      dynamic: {
        files: [{
          expand: true,
          cwd: './client/',
          src: ['**/*.{png, jpg, gif, svg}'],
          dest: '../LolInfi_deploy/client/'
        }]
      }
    },
    'json-minify': {
      build:{
        files: '../LolInfi_deploy/client/json/**.json'
      }
    },
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      dev: {
        script: 'server/app.js',
        options: {
          nodeArgs: ['--debug'],
          env: {
            PORT: '5455'
          },
          // omit this property if you aren't serving HTML files and 
          // don't want to open a browser tab on start
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
          }
        }
      }
    },
    git_deploy: {
      target: {
        options: {
          url: 'https://github.com/foxlee25/lolinfiwebsite_deploy.git'
        },
        src: '../LolInfi_deploy/'
      }
    },
    uncss: {
      dist: {
        files: {
          '../LolInfi_deploy/client/css/tidy.css': ['client/index.html', 'client/templates/**/*.html']
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          '../LolInfi_deploy/client/index.html': ['client/index.html']
        }
      }
    },
    htmlmin: {                                     
        dist: {                                      
          options: {                                 
            removeComments: true,
            collapseWhitespace: true
          },
          files: [{
              expand: true,
              cwd: 'client/templates',
              src: '{,*/}*.html',
              dest: '../LolInfi_deploy/client/templates'  ,
              filter: 'isFile'
          }]
        }
    },
    replace: {
      dev: {
        overwrite: true,
        src: ['./client/js/service.js', './server/util/url.js'],
        replacements: [{
          from: '52.33.51.44:8080',                   // string replacement 
          to: 'localhost:8080'
        },
        {
          from: 'mongodb://ec2-52-36-229-82.us-west-2.compute.amazonaws.com:27017/LolInfi',
          to: 'mongodb://localhost:27017/LolInfi'
        }]
      },
      deploy: {
        overwrite: true,
        src: ['./client/js/service.js', './server/util/url.js'],
        replacements: [{
          from: 'localhost:8080',                   // string replacement 
          to: '52.33.51.44:8080'
        },
        {
          from: 'mongodb://localhost:27017/LolInfi',
          to: 'mongodb://ec2-52-36-229-82.us-west-2.compute.amazonaws.com:27017/LolInfi'
        }]
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-image');
  grunt.loadNpmTasks('grunt-json-minify');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-git-deploy');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-text-replace');

  // Deploy task.
  grunt.registerTask('deploy', 
    ['jshint', 
    'clean:delete',
     'copy', 
     'image', 
     'json-minify', 
     'uglify', 
     'clean:css',
     'uncss',
     'processhtml',
     'clean:template',
     'htmlmin',
     'clean:git',
     'git_deploy:target']);
  // Deploy server
  grunt.registerTask('run', ['concurrent:dev']);

  //Switch to dev
  grunt.registerTask('dev', ['replace:dev']);

  //switch to deploy
  grunt.registerTask('deploy', ['replace:deploy']);

};
