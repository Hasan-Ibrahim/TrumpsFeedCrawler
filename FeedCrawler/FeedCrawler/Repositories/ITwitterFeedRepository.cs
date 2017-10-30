using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FeedCrawler.Models;
using LinqToTwitter;

namespace FeedCrawler.Repositories
{
    public interface ITwitterFeedRepository
    {
        List<Status> GetTwitterFeed(string username, int limit);
    }
}
