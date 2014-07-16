module.exports = function (grunt) {

    grunt.initConfig({

        // BrowserSync Task
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "*.html",
                        "components/nuxeo-elements/**/*.html"
                    ]
                },
                options: {
                    server: {
                        baseDir: "."
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-browser-sync");

    grunt.registerTask("default", ["browserSync"]);
};
