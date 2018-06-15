define(['knockout'], function (ko) {
    ko.bindingHandlers['fileUpload'] = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here

            var afterFileProcessedCallBack = allBindings.get('afterFileProcessedCallBack');
            var viewModel = allBindings.get('viewModel');
            let callBack = function (event, data) {
                var $this = $(this);

                data.process(function () {
                    return $this.fileupload('process', data);
                }).always(function () {

                    afterFileProcessedCallBack.apply(viewModel, [data]);
                });
            };
            $(element).fileupload({

                dataType: 'json',
                autoUpload: false,
                acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
                maxFileSize: 999000,
                // Enable image resizing, except for Android and Opera,
                // which actually support image resizing, but fail to
                // send Blob objects via XHR requests:
                disableImageResize: /Android(?!.*Chrome)|Opera/
                    .test(window.navigator.userAgent),
                previewMaxWidth: 200,
                previewMaxHeight: 100,
                previewCrop: true,
                add: callBack
            });
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called once when the binding is first applied to an element,
            // and again whenever any observables/computeds that are accessed change
            // Update the DOM element based on the supplied values here.
        }
    };
    ko.bindingHandlers['renderPreview'] = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here

            var value = ko.unwrap(valueAccessor);
            $(element).append(value);
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called once when the binding is first applied to an element,
            // and again whenever any observables/computeds that are accessed change
            // Update the DOM element based on the supplied values here.
        }
    };
});