using System.Web.Mvc;
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
            
            container.RegisterType<ICNNFeedService, CNNFeedSevice>();
            
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}