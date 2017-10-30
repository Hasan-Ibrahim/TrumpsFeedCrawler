using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FeedCrawler.Controllers
{
    public class CNNFeedController : Controller
    {
        public ActionResult GetData()
        {
            return Json(new { success = true });
        }
    }
}
