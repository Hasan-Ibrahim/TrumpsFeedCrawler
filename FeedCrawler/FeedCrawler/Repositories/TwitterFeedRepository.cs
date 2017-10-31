using System.Collections.Generic;
using System.Linq;
using System.Web.Configuration;
using LinqToTwitter;

namespace FeedCrawler.Repositories
{
    public class TwitterFeedRepository: ITwitterFeedRepository
    {
        public List<Status> GetTwitterFeed(string username, int sizeLimit)
        {

            var auth = new SingleUserAuthorizer
            {

                CredentialStore = new InMemoryCredentialStore()
                {

                    ConsumerKey = WebConfigurationManager.AppSettings["ConsumerKey"],
                    ConsumerSecret = WebConfigurationManager.AppSettings["ConsumerSecret"],
                    OAuthToken = WebConfigurationManager.AppSettings["OAuthToken"],
                    OAuthTokenSecret = WebConfigurationManager.AppSettings["OAuthTokenSecret"]
                }

            };
            var twitterCtx = new TwitterContext(auth);

            var tweets = twitterCtx.Status.Where(tweet => tweet.Type == StatusType.User
                                                           && tweet.ScreenName == username
                                                           && tweet.Count == sizeLimit).ToList();

            return tweets;
        }
    }
}