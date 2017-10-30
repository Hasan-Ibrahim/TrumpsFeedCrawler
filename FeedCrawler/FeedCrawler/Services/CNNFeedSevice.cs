using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Xml.Linq;
using FeedCrawler.Models;

namespace FeedCrawler.Services
{
    public class CNNFeedSevice: ICNNFeedService
    {

        public IEnumerable<RssFeed> GetCNNFeed()
        {
            WebClient wclient = new WebClient();
            string RssData = wclient.DownloadString("http://rss.cnn.com/rss/edition.rss");

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