feedCrawlerModule.controller('cnnFeedController', [
    '$scope', 'cnnFeedService', function (scope, cnnFeedService) {

        scope.isCnnFeedLoading = true;

        cnnFeedService.getCnnFeedData().then(function (response) {
            scope.cnnFeedData = response.data;
            scope.isCnnFeedLoading = false;

        }, function (error) {
            scope.isCnnFeedLoading = false;
        });
    }
]);
