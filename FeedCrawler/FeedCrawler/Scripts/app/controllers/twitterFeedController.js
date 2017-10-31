feedCrawlerModule.controller('twitterFeedController', [
    '$scope', 'twitterFeedService', '$uibModal', function (scope, twitterFeedService, uibModal) {

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

        scope.refreshFeed = function () {
            loadFeedsFromTwitter();
        }

        scope.showTweet = function (statusId) {
            uibModal.open({
                animation: true,
                ariaLabelledBy: 'Original Tweet',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/Templates/tweetViewer.html',
                controller: 'twitterTweetViewerModalController',
                size:'lg',
                resolve: {
                    statusId: function () {
                        return statusId;
                    }
                }
            });
        }
    }
]);
