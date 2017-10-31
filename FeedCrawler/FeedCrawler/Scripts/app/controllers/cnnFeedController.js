feedCrawlerModule.controller('cnnFeedController', [
    '$scope', 'cnnFeedService', function (scope, cnnFeedService) {

        function loadFeedFromCnn() {
            scope.isCnnFeedLoading = true;
            scope.cnnFeedData = [];

            cnnFeedService.getCnnFeedData().then(function (response) {
                scope.cnnFeedData = response.data;
                scope.isCnnFeedLoading = false;

            }, function (error) {
                scope.isCnnFeedLoading = false;
            });
        }

        loadFeedFromCnn();

        scope.refreshFeed = function () {
            loadFeedFromCnn();
        }
    }
]);
