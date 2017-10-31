feedCrawlerModule.controller('cnnFeedController', [
    '$scope', 'cnnFeedService', '$uibModal', function (scope, cnnFeedService, uibModal) {

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

        scope.openNews = function (newsLink) {
            uibModal.open({
                animation: true,
                ariaLabelledBy: 'Detail News',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'newsViewer.html',
                controller: 'cnnNewsViewerModalController',
                resolve: {
                    newsUrl: function () {
                        return newsLink;
                    }
                }
            });
        }
    }
]);
