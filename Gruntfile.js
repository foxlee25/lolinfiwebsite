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
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
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
          THREE: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['./client/js/*.js',
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
      gruntfile: {
        files: ['./client/js/*.js',
                './client/js/**/*.js', 
                './server/*.js',
                './server/dao/*.js',
                './server/route/*.js',
                './server/util/*.js'],
        tasks: ['jshint']
      }
    },
    copy: {
      main: {
        files:[
          {
            expand: true,
            src: ['./**', '!./client/images/**', '!./client/json/**'], 
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
        src:["../LolInfi_deploy/"]
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

  // Deploy task.
  grunt.registerTask('deploy', ['jshint', 'clean:delete', 'copy', 'image', 'json-minify']);
  // Watch JShint
  grunt.registerTask('watch', ['jshint']);

};
