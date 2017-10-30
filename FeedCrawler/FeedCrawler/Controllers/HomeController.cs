using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;
using FeedCrawler.Models;

namespace FeedCrawler.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            WebClient wclient = new WebClient();
            string RSSData = wclient.DownloadString("http://rss.cnn.com/rss/edition.rss");

            XDocument xml = XDocument.Parse(RSSData);

            var RSSFeedData = xml.Descendants("item").Select(item => new RssFeed
            {
                Title = ((string)item.Element("title")),
                Link = ((string)item.Element("link")),
                Description = ((string)item.Element("description")),
                PublishedDate = ((string)item.Element("pubDate"))
            });

            ViewBag.RSSFeed = RSSFeedData;
            return View();
        }
    }


}
