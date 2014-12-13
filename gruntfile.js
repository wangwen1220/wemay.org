module.exports = function(grunt) {
  // 'use strict';

  // 配置任务和插件
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // 清除 dist 文件夹
    clean: ['dist/'],

    // 压缩 CSS 文件
    cssmin: {
      options: {
        report: 'gzip'
      },
      combine: {
        files: {
          'src/css/main.css': 'src/css/main-debug.css'
        }
      }
      // minify: {
      //   expand: true,
      //   cwd: 'css/',
      //   src: ['*-debug.css'],
      //   dest: 'css/',
      //   ext: '.css'
      // }
    },

    // 压缩合并 JS 文件
    uglify: {
      options: {
        report: 'gzip',
        mangle: true, // Specify mangle: false to prevent changes to your variable and function names.
        banner: '/*! <%= pkg.name %> by <%= pkg.author %> | <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      beautify: {
         ascii_only: true // 中文ascii化，非常有用！防止中文乱码的神配置
      },
      myTarget: {
        files: {
          'src/js/main.js': ['src/js/jquery-1.8.3.js', 'js/jquery-*.js', 'src/js/main-debug.js']
        }
      }
    },

    // 复制文件，打包到 dist 文件夹目录下
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/',
          // src: '*.htm?',
          src: '*',
          // flatten: true,
          filter: 'isFile',
          dest: 'dist/'
        },
        {
          expand: true,
          cwd: 'src/img/',
          src: ['**', '!*.psd'],
          dest: 'dist/img/'
        },
        {
          expand: true,
          cwd: 'src/css/',
          src: 'main.css',
          dest: 'dist/css/'
        }, {
          expand: true,
          cwd: 'src/js/',
          src: ['main.js', 'DD_belatedPNG.js'],
          dest: 'dist/js/'
        }]
      }
    },
    // copy: {
    //   main: {
    //     files: [{
    //       src: '*.htm?',
    //       dest: 'dist/'
    //     }, {
    //       src: ['img/**'],
    //       dest: 'dist/'
    //     }, {
    //       // src: ['css/*.css', '!css/*-debug.css'],
    //       src: ['css/main.css'],
    //       dest: 'dist/'
    //     }, {
    //       src: ['js/libs.js', 'js/main.js'],
    //       dest: 'dist/'
    //       // filter: 'isFile'
    //     }]
    //   }
    // },

    // 监控文件
    watch: {
      scripts: {
        files: ['src/css/*.css', 'src/js/*.js'],
        tasks: ['cssmin', 'uglify']
      }
    }
  });

  // 加载 Grunt 插件
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // 注册 Grunt 默认任务
  grunt.registerTask('default', ['cssmin', 'uglify', 'clean', 'copy']);
};