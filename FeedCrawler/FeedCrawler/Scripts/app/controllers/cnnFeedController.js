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
                toastr.error("Failed to load feed from CNN.", "Error!");
            });
        }

        loadFeedFromCnn();

        scope.refreshFeed = function () {
            loadFeedFromCnn();
        }

        scope.toggleSave = function(feed) {
            if (feed.isSaved) {
                localStorageService.removeItem(feed.Link);
                toastr.success("Feed Removed from saved list.", "Success!");
            } else {
                localStorageService.addItem(feed.Link, feed.Title);
                toastr.success("Feed Added to saved list.", "Success!");
            }
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
