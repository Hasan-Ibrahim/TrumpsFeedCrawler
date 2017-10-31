using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Configuration;
using System.Xml.Linq;
using FeedCrawler.Models;

namespace FeedCrawler.Repositories
{
    public class CNNFeedRepository : ICNNFeedRepository
    {
        public IEnumerable<RssFeed> GetRssFeedFromCNN()
        {
            WebClient wclient = new WebClient();
            string rssData = wclient.DownloadString(WebConfigurationManager.AppSettings["CNNRssFeedEndPoint"]);

            XDocument xml = XDocument.Parse(rssData);

            var rssFeedData = xml.Descendants("item").Select(item => new RssFeed
            {
                Title = ((string)item.Element("title")),
                Link = ((string)item.Element("link")),
                Description = ((string)item.Element("description")),
                PublishedDate = ((string)item.Element("pubDate"))
            });

            return rssFeedData;
        }
    }
}
