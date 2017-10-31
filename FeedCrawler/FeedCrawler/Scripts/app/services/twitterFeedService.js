feedCrawlerModule.factory('twitterFeedService', ["$http", function (http) {
    return {
        getTwitterFeedData: function () {
            return http.get(window.rootUrl + "/twitterFeed/getFeed");
        }
    };
}]);
