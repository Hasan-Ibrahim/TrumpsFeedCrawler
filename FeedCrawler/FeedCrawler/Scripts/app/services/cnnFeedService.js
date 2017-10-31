feedCrawlerModule.factory('cnnFeedService', ["$http", function (http) {
    return {
        getCnnFeedData: function () {
            return http.get(window.rootUrl+"/cnnFeed/getFeed");
        }
    };
}]);
