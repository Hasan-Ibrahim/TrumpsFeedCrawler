# TrumpsFeedCrawler
This is a web application which pulls data from CNN and Twitter that are relevant to Donald Trump

### Application Features
This application lets you view the most recent news titles about Donald Trump that are published on CNN. This not only lets you view those news titles, it also navigate you to the detailed news as soon as you click on the news title. 

Another feature of this application is showing the latest Twitter tweets from Donald Trump's official Twitter account. It also navigates you to the original Twitter tweet where you can see everything of that tweet once you click on the tweet link. 

Both of these preceding features are under the **Live Feed** tab.

The special feature of this application is, it can save a feed item for later reading since the live feed only shows the latest items which can be lost very easily. There is a *star* icon at the right of each feed item which let you save the item for reading it later. You can view the saved items just under the **Saved Feed** tab. You can also remove an item from the list of the saved feed items. This application saves data in the browser's local storage since we have not used any database for this application. Therefore, the saved information will be only valid for the browser on which you have saved the feed items previously. 

Another special feature is, it tracks the read articles. As soon as you open a news link or Twitter tweet link, it will turn that link to *Purple* color which will ultimately help the user to track the already read news or tweets. 

### Technologies
The server side is built with **ASP.NET MVC5** and **C#** is used as the programming language. 
The server side used **Unity** for dependency injection.
Thus, dependency injection is used to make different components completely decoupled and made it fully testable.
**LinqToTwitter** library is used to pull data from Twitter. 

The client side is built with **AngulaJs** which has been used as the javascript framework. **Bootstrap 3** has been used for styling the layout. Also **Toastr** has been used to show the toast messages.
**Fontawesome** is another library that has been used for icon support.

### Application Architecture
The server side of the application is built following three tier architecture. There is a Repository layer for pulling the data from the services of Twitter and CNN. Then there is a Service layer which pulls data from the repositories and process the data according to buisness logic. The final layer is Controller layer that is responsible for gathering data from the services and deliver the data to client side upon request. 

The client side used MVVM and MVC pattern. **AngularJS** framework helped to implement those patterns. There is a service layer which pulls data from the server side and also responsible for processing data according to business logic. The controllers pull data from the services and show them in the view. Controllers also handle the user interactions. 
