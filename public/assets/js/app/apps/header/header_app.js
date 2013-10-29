define(["app"], function(BookShop) {

  BookShop.module("HeaderApp", function(HeaderApp, BookShop, Backbone, Marionette, $, _) {

    var API = {

      listHeader: function() {
        require(['js/app/apps/header/list/list_controller'], function(ListController){
          ListController.listHeader();
        });
      }
    };

    BookShop.commands.setHandler("set:active:header", function(name){
      BookShop.HeaderApp.List.Controller.setActiveHeader(name);
    });

    BookShop.on("start", function() {
      API.listHeader();
    });

  });

  return BookShop.HeaderApp;

});

