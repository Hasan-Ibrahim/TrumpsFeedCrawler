feedCrawlerModule.controller('savedFeedController', ['$scope', 'cnnFeedService', 'twitterFeedService', '$uibModal', 'localStorageService',
    function (scope, cnnFeedService, twitterFeedService, uibModal, localStorageService) {

        function loadSavedFeeds() {
            scope.savedFeedFromCnn = cnnFeedService.getSavedFeed();
            scope.savedFeedFromTwitter = twitterFeedService.getSavedFeed();
        }

        loadSavedFeeds();

        scope.$on('itemsUpdated', function () {
            loadSavedFeeds();
        });


        scope.remove = function (feed) {
            localStorageService.removeItem(feed.Link);
            toastr.success("Feed Removed from saved list.", "Success!");
        }

    }]);
