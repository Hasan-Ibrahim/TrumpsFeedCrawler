using System.Collections.Generic;
using System.Linq;
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

                    ConsumerKey = "Ueo5Ek2Y8jcwvSUwGzxSoQHCb",
                    ConsumerSecret = "AIsm7GLOJxAilR2airtQrSVakmi253QbsoJeaEXQnFE0ZrznhY",
                    OAuthToken = "925053209965555712-v3LZKk3CC6b6fVDD7AHJHdBn0zbIkWJ",
                    OAuthTokenSecret = "1WF64tr0Ez4cFr3TVy8t49ov9KcT4galRZNcc4rkVhCX0"
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