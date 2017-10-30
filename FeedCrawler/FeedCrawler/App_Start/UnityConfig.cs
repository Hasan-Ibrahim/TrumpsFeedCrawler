using System.Web.Mvc;
using FeedCrawler.Repositories;
using FeedCrawler.Services;
using Microsoft.Practices.Unity;
using Unity.Mvc5;

namespace FeedCrawler
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            container.RegisterType<ICNNFeedRepository, CNNFeedRepository>();
            container.RegisterType<ICNNFeedService, CNNFeedSevice>();

            container.RegisterType<ITwitterFeedRepository, TwitterFeedRepository>();
            container.RegisterType<ITwitterFeedService, TwitterFeedService>();

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}
