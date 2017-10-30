using System.Web.Mvc;
using FeedCrawler.Services;

namespace FeedCrawler.Controllers
{
    public class CNNFeedController : Controller
    {
        private ICNNFeedService _cnnFeedService;

        public CNNFeedController(ICNNFeedService cnnFeedService)
        {
            _cnnFeedService = cnnFeedService;
        }

        [HttpGet]
        public ActionResult GetData()
        {
            var feeds = _cnnFeedService.GetCNNFeed("Trump");
            return Json(feeds, JsonRequestBehavior.AllowGet);
        }
    }
}
