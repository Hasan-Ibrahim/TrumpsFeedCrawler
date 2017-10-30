using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using FeedCrawler.Models;
using FeedCrawler.Repositories;
using LinqToTwitter;

namespace FeedCrawler.Services
{
    public class CNNFeedSevice : ICNNFeedService
    {
        private readonly ICNNFeedRepository _cnnFeedRepository;

        public CNNFeedSevice(ICNNFeedRepository cnnFeedRepository)
        {
            _cnnFeedRepository = cnnFeedRepository;
        }

        public IEnumerable<RssFeed> GetCNNFeed(string searchText)
        {
            var cnnFeeds = _cnnFeedRepository.GetRssFeedFromCNN().ToList();
            var filteredFeeds = cnnFeeds.Where(feed => feed.Title.Contains(searchText));

            return filteredFeeds.Take(25);
        }
    }
}
