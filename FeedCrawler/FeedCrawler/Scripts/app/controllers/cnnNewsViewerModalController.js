feedCrawlerModule.controller('cnnNewsViewerModalController', ['$scope', 'newsUrl', '$uibModalInstance',
    function (scope, newsUrl, uibModalInstance) {

        scope.newsLink = newsUrl;

        scope.close = function () {
            uibModalInstance.close();
        }
    }]);