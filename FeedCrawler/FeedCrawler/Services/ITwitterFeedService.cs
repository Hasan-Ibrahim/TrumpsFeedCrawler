using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LinqToTwitter;

namespace FeedCrawler.Services
{
    public interface ITwitterFeedService
    {
        List<Status> GetTwitterFeed(string username, int sizeLimit);
    }
}
