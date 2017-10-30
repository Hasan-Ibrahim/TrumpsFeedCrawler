using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FeedCrawler.Startup))]
namespace FeedCrawler
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
