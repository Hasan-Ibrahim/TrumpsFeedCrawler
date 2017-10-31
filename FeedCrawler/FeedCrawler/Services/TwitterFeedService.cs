using System.Collections.Generic;
using System.Linq;
using FeedCrawler.Models;
using FeedCrawler.Repositories;
using LinqToTwitter;

namespace FeedCrawler.Services
{
    public class TwitterFeedService : ITwitterFeedService
    {
        private readonly ITwitterFeedRepository _twitterFeedRepository;

        public TwitterFeedService(ITwitterFeedRepository twitterFeedRepository)
        {
            _twitterFeedRepository = twitterFeedRepository;
        }

        public List<Tweet> GetTwitterFeed(string username, int sizeLimit)
        {
            return _twitterFeedRepository.GetTwitterFeed(username, sizeLimit)
                .Select(status => new Tweet { Text = status.Text, StatusId = status.StatusID.ToString() }).ToList();
        }
    }
}