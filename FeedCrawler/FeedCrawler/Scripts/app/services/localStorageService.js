feedCrawlerModule.factory('localStorageService', ['$rootScope', function ($rootScope) {
    var factory = {
        addItem: function (key, data) {
            localStorage.setItem(key, data);
            $rootScope.$broadcast("itemsUpdated");
        },
        getAllItems: function () {
            var values = [];
            var keys = Object.keys(localStorage);
            var length = keys.length;

            while (length--) {
                var item = {};
                item[keys[length]] = localStorage.getItem(keys[length]);
                values.push(item);
            }

            return values;
        },
        removeItem: function (key) {
            localStorage.removeItem(key);
            $rootScope.$broadcast("itemsUpdated");
        },
        getSavedFeed: function (searchText) {
            var feeds = [];

            var allItems = factory.getAllItems();
            angular.forEach(allItems, function (item) {
                var link = Object.keys(item)[0];
                if (link.indexOf(searchText) !== -1) {
                    feeds.push({ Title: item[link], Link: link });
                }
            });

            return feeds;
        }
    };
    return factory;
}]);
