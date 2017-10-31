feedCrawlerModule.factory('twitterFeedService', ["$http", 'localStorageService', function (http, localStorageService) {
    return {
        getTwitterFeedData: function () {
            return http.get(window.rootUrl + "/twitterFeed/getFeed");
        },
        getSavedFeed: function () {
            return localStorageService.getSavedFeed("twitter");
        },
        updateSavedStatusOfLiveFeed: function (liveFeed) {

            var allItems = localStorageService.getAllItems();

            for (var i = 0; i < liveFeed.length; i++) {
                var flag = false;

                for (var j = 0; j < allItems.length; j++) {
                    var link = Object.keys(allItems[j])[0];
                    if (link.indexOf(liveFeed[i].StatusId) !== -1) {
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
