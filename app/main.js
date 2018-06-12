﻿requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.4.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1',
        'jquery.ui.widget': '../lib/jquery-file-upload/jquery.ui.widget',
        'jquery.fileupload': '../lib/jquery-file-upload/jquery.fileupload',
        'jquery.fileupload-validate': '../lib/jquery-file-upload/jquery.fileupload-validate',
        'jquery.fileupload-process': '../lib/jquery-file-upload/jquery.fileupload-process',
        'jquery.fileupload-image': '../lib/jquery-file-upload/jquery.fileupload-image',
        // 'jquery.load-image': '../lib/jquery-file-upload/load-image.all.min',
        'load-image': '../lib/JavaScript-Load-Image/load-image',
        'load-image-meta': '../lib/JavaScript-Load-Image/load-image-meta',
        'load-image-scale': '../lib/JavaScript-Load-Image/load-image-scale',
        'load-image-exif': '../lib/JavaScript-Load-Image/load-image-exif',
        'canvas-to-blob':'../lib/JavaScript-Canvas-to-Blob/canvas-to-blob.min'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap'],  
function (system, app, viewLocator,bootstrap,jqueryUI) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Starter Kit';

    app.configurePlugins({
        router:true,
        dialog: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});