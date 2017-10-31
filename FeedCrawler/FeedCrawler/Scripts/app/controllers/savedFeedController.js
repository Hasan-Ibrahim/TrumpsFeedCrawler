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

        scope.showDetails = function (link) {
            uibModal.open({
                animation: true,
                ariaLabelledBy: 'Detail News',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/Templates/newsViewer.html',
                controller: 'cnnNewsViewerModalController',
                size: 'lg',
                resolve: {
                    newsUrl: function () {
                        return link;
                    }
                }
            });
        };

        scope.remove = function (feed) {
            localStorageService.removeItem(feed.Link);
        }

    }]);
