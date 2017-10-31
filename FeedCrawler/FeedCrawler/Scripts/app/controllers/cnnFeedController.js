feedCrawlerModule.controller('cnnFeedController', [
    '$scope', 'cnnFeedService', '$uibModal', 'localStorageService', function (scope, cnnFeedService, uibModal, localStorageService) {

        function loadFeedFromCnn() {
            scope.isCnnFeedLoading = true;
            scope.cnnFeedData = [];

            cnnFeedService.getCnnFeedData().then(function (response) {
                scope.cnnFeedData = response.data;
                scope.isCnnFeedLoading = false;
                cnnFeedService.updateSavedStatusOfLiveFeed(scope.cnnFeedData);

            }, function (error) {
                scope.isCnnFeedLoading = false;
            });
        }

        loadFeedFromCnn();

        scope.refreshFeed = function () {
            loadFeedFromCnn();
        }

        scope.toggleSave = function(feed) {
            if (feed.isSaved) {
                localStorageService.removeItem(feed.Link);
            } else {
                localStorageService.addItem(feed.Link, feed.Title);
            }
            //feed.isSaved = !feed.isSaved;
        }

        scope.$on('itemsUpdated', function () {
            cnnFeedService.updateSavedStatusOfLiveFeed(scope.cnnFeedData);
        });

        scope.openNews = function (newsLink) {
            uibModal.open({
                animation: true,
                ariaLabelledBy: 'Detail News',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/Templates/newsViewer.html',
                controller: 'cnnNewsViewerModalController',
                size: 'lg',
                resolve: {
                    newsUrl: function () {
                        return newsLink;
                    }
                }
            });
        }
    }
]);
