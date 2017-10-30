using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using FeedCrawler.Services;
using LinqToTwitter;

namespace FeedCrawler.Controllers
{
    public class TwitterFeedController : Controller
    {
        private readonly ITwitterFeedService _twitterFeedService;

        public TwitterFeedController(ITwitterFeedService twitterFeedService)
        {
            _twitterFeedService = twitterFeedService;
        }

        [HttpGet]
        public ActionResult GetFeed()
        {
            var feed = _twitterFeedService.GetTwitterFeed("realDonaldTrump", 25);
            return Json(feed, JsonRequestBehavior.AllowGet);
        }
    }
}