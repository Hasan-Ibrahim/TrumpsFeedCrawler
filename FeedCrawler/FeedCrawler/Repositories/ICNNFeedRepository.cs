using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FeedCrawler.Models;

namespace FeedCrawler.Repositories
{
    public interface ICNNFeedRepository
    {
        IEnumerable<RssFeed> GetRssFeedFromCNN();
    }
}
