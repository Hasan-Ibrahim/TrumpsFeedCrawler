using System.Collections.Generic;
using FeedCrawler.Models;

namespace FeedCrawler.Services
{
    public interface ICNNFeedService
    {
        IEnumerable<RssFeed> GetCNNFeed();
    }
}
