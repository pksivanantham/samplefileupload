define(['durandal/app', 'jquery.fileupload-image', 'knockout'], function (app, fileUpload, ko) {
    var ctor = function () {
        var self = this;
        self.displayName = 'File Upload';
        self.fileDetails = ko.observableArray([]);
        self.afterFileProcessedCallBack = (data) => {
            data.files.forEach((item) => {
                self.fileDetails.push({
                    name: item.name,
                    preview: item.preview
                });
            });

        };
    };


    //Note: This module exports a function. That means that you, the developer, can create multiple instances.
    //This pattern is also recognized by Durandal so that it can create instances on demand.
    //If you wish to create a singleton, you should export an object instead of a function.
    //See the "flickr" module for an example of object export.

    return ctor;
});