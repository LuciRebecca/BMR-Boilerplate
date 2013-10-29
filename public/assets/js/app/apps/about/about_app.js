define(["app"], function(BookShop) {

  BookShop.module("AboutApp", function(AboutApp, BookShop, Backbone, Marionette, $, _) {

    AboutApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        "about": "showAbout"
      }
    });

    var API = {

      showAbout: function() {
        require(['js/app/apps/about/show/show_controller'], function(ShowController){
          ShowController.showAbout();
        });
      }
    };

    BookShop.on("about:show", function() {
      BookShop.navigate("about");
      API.showAbout();
    });

    BookShop.addInitializer(function(){
      new AboutApp.Router({
        controller: API
      });
    });

  });

  return BookShop.AboutApp;

});

