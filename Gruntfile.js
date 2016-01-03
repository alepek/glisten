var postcss = function(){
  return require('poststylus')(['autoprefixer', 'rucksack-css']);
}

module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          use: [postcss]
        },
        files: {
          'dist/stylesheets/index.css': 'src/stylesheets/index.styl'
        }
      }
    },
    watch: {
      styles: {
        files: ['src/stylesheets/*.*'],
        tasks: ['stylus'],
        options: {
          spawn: false,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("cssnext", ["cssnext"]);
  grunt.registerTask("postcss", ["postcss"]);
};
