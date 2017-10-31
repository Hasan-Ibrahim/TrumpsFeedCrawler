using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Xml.Linq;
using FeedCrawler.Models;

namespace FeedCrawler.Repositories
{
    public class CNNFeedRepository : ICNNFeedRepository
    {
        public IEnumerable<RssFeed> GetRssFeedFromCNN()
        {
            WebClient wclient = new WebClient();
            string RssData = wclient.DownloadString("http://rss.cnn.com/rss/cnn_latest.rss");

            XDocument xml = XDocument.Parse(RssData);

            var RssFeedData = xml.Descendants("item").Select(item => new RssFeed
            {
                Title = ((string)item.Element("title")),
                Link = ((string)item.Element("link")),
                Description = ((string)item.Element("description")),
                PublishedDate = ((string)item.Element("pubDate"))
            });

            return RssFeedData;
        }
    }
}
