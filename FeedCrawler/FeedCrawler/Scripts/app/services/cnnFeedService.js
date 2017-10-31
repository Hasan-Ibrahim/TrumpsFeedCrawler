feedCrawlerModule.factory('cnnFeedService', ["$http", 'localStorageService', function (http, localStorageService) {
    return {
        getCnnFeedData: function () {
            return http.get(window.rootUrl + "/cnnFeed/getFeed");
        },
        getSavedFeed: function () {
            return localStorageService.getSavedFeed("cnn");
        },
        updateSavedStatusOfLiveFeed: function(liveFeed) {

            var allItems = localStorageService.getAllItems();

            for (var i = 0; i < liveFeed.length; i++) {
                var flag = false;

                for (var j = 0; j < allItems.length; j++) {
                    var link = Object.keys(allItems[j])[0];
                    if (link === liveFeed[i].Link) {
                        liveFeed[i].isSaved = true;
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    liveFeed[i].isSaved = false;
                }
            }
        }
    };
}]);
