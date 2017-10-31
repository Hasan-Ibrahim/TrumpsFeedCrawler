feedCrawlerModule.controller('twitterFeedController', [
    '$scope', 'twitterFeedService', '$uibModal', 'localStorageService', function (scope, twitterFeedService, uibModal, localStorageService) {

        function loadFeedsFromTwitter() {
            scope.isTwitterFeedLoading = true;
            scope.twitterFeedData = [];

            twitterFeedService.getTwitterFeedData().then(function (response) {
                scope.twitterFeedData = response.data;
                scope.isTwitterFeedLoading = false;
                twitterFeedService.updateSavedStatusOfLiveFeed(scope.twitterFeedData);

            }, function (error) {
                scope.isTwitterFeedLoading = false;
                toastr.error("Failed to load feed from twitter.", "Error!");
            });
        }

        loadFeedsFromTwitter();

        scope.refreshFeed = function () {
            loadFeedsFromTwitter();
        }

        scope.toggleSave = function (tweet) {
            var link = "https://twitter.com/realDonaldTrump/status/" + tweet.StatusId;
            if (tweet.isSaved) {
                localStorageService.removeItem(link);
                toastr.success("Feed Removed from saved list.", "Success!");
            } else {
                localStorageService.addItem(link, tweet.Text);
                toastr.success("Feed Added to saved list.", "Success!");
            }
        }

        scope.$on('itemsUpdated', function () {
            twitterFeedService.updateSavedStatusOfLiveFeed(scope.twitterFeedData);
        });

        scope.showTweet = function (statusId) {
            uibModal.open({
                animation: true,
                ariaLabelledBy: 'Original Tweet',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/Templates/tweetViewer.html',
                controller: 'twitterTweetViewerModalController',
                size: 'lg',
                resolve: {
                    statusId: function () {
                        return statusId;
                    }
                }
            });
        }
    }
]);
