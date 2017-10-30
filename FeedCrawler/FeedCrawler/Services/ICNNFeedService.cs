using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using FeedCrawler.Models;

namespace FeedCrawler.Services
{
    public interface ICNNFeedService
    {
        List<RssFeed> GetCNNFeed();
    }
}
