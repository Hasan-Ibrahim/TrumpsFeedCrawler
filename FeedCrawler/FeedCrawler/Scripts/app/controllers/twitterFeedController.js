feedCrawlerModule.controller('twitterFeedController', [
    '$scope', 'twitterFeedService', function (scope, twitterFeedService) {

        scope.isTwitterFeedLoading = true;

        twitterFeedService.getTwitterFeedData().then(function (response) {
            scope.twitterFeedData = response.data;
            scope.isTwitterFeedLoading = false;

        }, function (error) {
            scope.isTwitterFeedLoading = false;
        });
    }
]);
