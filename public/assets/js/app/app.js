define(["marionette"], function(Marionette) {

  var BookShop = new Marionette.Application();

  //define regions
  BookShop.addRegions({
    headerRegion: "#header-region",
    mainRegion: "#main-region"
  });

  BookShop.navigate = function(route, options) {
    options || (options = {} );
    Backbone.history.navigate(route, options);
  };

  BookShop.getCurrentRoute = function(){
    return Backbone.history.fragment
  };

  BookShop.on("initialize:after", function() {

    if(Backbone.history) {
      
      require(["js/app/apps/books/books_app", "js/app/apps/about/about_app", "js/app/apps/header/header_app"], function(){
        
        Backbone.history.start();

        if(BookShop.getCurrentRoute() === "") {
          BookShop.trigger("books:list");
        }

      });
    }
    
  });

  return BookShop;
});