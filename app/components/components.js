define(['knockout'], function(ko) {
ko.components.register('file-upload', {
    viewModel: { require: './app/components/fileUpload.js' },
    template: { require: 'text!../app/components/fileUpload.html' }
});
});