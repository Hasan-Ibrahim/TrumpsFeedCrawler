feedCrawlerModule.controller('twitterTweetViewerModalController', ['$scope', 'statusId', '$uibModalInstance',
    function (scope, statusId, uibModalInstance) {

        scope.statusId = statusId;

        scope.close = function () {
            uibModalInstance.close();
        }
    }]);