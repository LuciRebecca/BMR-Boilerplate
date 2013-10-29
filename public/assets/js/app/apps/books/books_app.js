define(["app"], function(BookShop) {

  BookShop.module("BooksApp", function(BooksApp, BookShop, Backbone, Marionette, $, _) {

    BooksApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        "books": "listBooks",
        "books/:id": "showBook"
      }
    });

    var API = {
      listBooks: function(){
        require(['js/app/apps/books/list/list_controller'], function(){
          BooksApp.List.Controller.listBooks();
        });
      },

      showBook: function(id) {
        require(['js/app/apps/books/show/show_controller'], function(){
          BooksApp.Show.Controller.showBook(id);
        });
      }
    };

    BookShop.on("books:list", function(){
      BookShop.navigate("books");
      API.listBooks();
    });

    BookShop.on("book:show", function(id) {
      BookShop.navigate("books/" + id);
      API.showBook(id);
    });

    BookShop.addInitializer(function(){
      new BooksApp.Router({
        controller: API
      });
    });

  });

  return BookShop.BooksApp;

});

