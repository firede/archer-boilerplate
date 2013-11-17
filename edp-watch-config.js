exports.baseDir = __dirname;

var commonFilters = {
    ignoreNodeModules: '!node_modules/*',
    ignoreVCSFiles: '!.(git|svn)/*'
}

exports.getTasks = function() {
    return {
        'livereload': {
            filters: [
                '*.(html|js|coffee|less|styl|css)',
                commonFilters.ignoreNodeModules,
                commonFilters.ignoreVCSFiles
            ],
            events: [
                'addedFiles',
                'modifiedFiles'
            ],
            plugins: livereload()
        }
    }
};

exports.getGroups = function() {
    return {
        'default': [ 'livereload' ]
    }
};

exports.injectPlugin = function( plugins ) {
    for ( var key in plugins ) {
        global[ key ] = plugins[ key ];
    }
};
