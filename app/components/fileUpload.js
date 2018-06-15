define(['knockout','jquery.fileupload-image'], function(ko) {

    function LikeWidgetViewModel(params) {

        this.afterFileProcessedCallBack = params.afterFileProcessedCallBack;
        this.viewModel=params.viewModel;
    }

    LikeWidgetViewModel.prototype.like = function() {
        this.chosenValue('like');
    };

    LikeWidgetViewModel.prototype.dislike = function() {
        this.chosenValue('dislike');
    };

    return LikeWidgetViewModel;

});