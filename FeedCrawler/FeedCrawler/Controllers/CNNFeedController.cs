using System.Web.Mvc;
using FeedCrawler.Services;

namespace FeedCrawler.Controllers
{
    public class CNNFeedController : Controller
    {
        private readonly ICNNFeedService _cnnFeedService;

        public CNNFeedController(ICNNFeedService cnnFeedService)
        {
            _cnnFeedService = cnnFeedService;
        }

        [HttpGet]
        public ActionResult GetFeed()
        {
            var feeds = _cnnFeedService.GetCNNFeed("Trump");
            return Json(feeds, JsonRequestBehavior.AllowGet);
        }
    }
}
