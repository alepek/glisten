var postcss = function(){
  return require('poststylus')(['autoprefixer', 'rucksack-css']);
}

module.exports = function(grunt) {
  grunt.initConfig({
    jade: {
      demo: {
        options: {
          client: false,
          pretty: true
        },
        files: [ {
          cwd: "src/tpl",
          src: "**/*.jade",
          dest: "dist",
          expand: true,
          ext: ".html"
        } ]
      }
    },
    stylus: {
      compile: {
        options: {
          use: [postcss]
        },
        files: {
          'dist/style/glisten.css': 'src/style/index.styl',
          'dist/style/demo.css': 'src/style/demo.styl'
        }
      }
    },
    watch: {
      style: {
        files: ['src/style/*.*'],
        tasks: ['stylus'],
        options: {
          spawn: false,
        }
      },
      jade: {
        files: ['src/**/*.jade'],
        tasks: ['jade'],
        options: {
          spawn: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("cssnext", ["cssnext"]);
  grunt.registerTask("postcss", ["postcss"]);
};
