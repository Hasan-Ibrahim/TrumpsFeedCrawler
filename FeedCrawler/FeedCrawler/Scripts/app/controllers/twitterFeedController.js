feedCrawlerModule.controller('twitterFeedController', [
    '$scope', 'twitterFeedService', function (scope, twitterFeedService) {

        function loadFeedsFromTwitter() {
            scope.isTwitterFeedLoading = true;
            scope.twitterFeedData = [];

            twitterFeedService.getTwitterFeedData().then(function (response) {
                scope.twitterFeedData = response.data;
                scope.isTwitterFeedLoading = false;

            }, function (error) {
                scope.isTwitterFeedLoading = false;
            });
        }

        loadFeedsFromTwitter();

        scope.refreshFeed = function() {
            loadFeedsFromTwitter();
        }
    }
]);
