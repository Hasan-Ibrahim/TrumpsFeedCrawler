using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FeedCrawler.Repositories;
using LinqToTwitter;

namespace FeedCrawler.Services
{
    public class TwitterFeedService: ITwitterFeedService
    {
        private readonly ITwitterFeedRepository _twitterFeedRepository;

        public TwitterFeedService(ITwitterFeedRepository twitterFeedRepository)
        {
            _twitterFeedRepository = twitterFeedRepository;
        }

        public List<Status> GetTwitterFeed(string username, int sizeLimit)
        {
            return _twitterFeedRepository.GetTwitterFeed(username, sizeLimit);
        }
    }
}