define(["app", 
        "tpl!js/app/apps/books/show/templates/view_item.tpl",
        "tpl!js/app/apps/books/show/templates/missing_item.tpl"], 
function(BookShop, showItemTpl, missingItemTpl) {

  BookShop.module("BooksApp.Show.View", function(View, BookShop, Backbone, Marionette, $, _) {
    
    View.MissingBook = Marionette.ItemView.extend({
      template: missingItemTpl
    });

    //create SINGLE VIEW and assign it a template
    View.Book = Marionette.ItemView.extend({
      template: showItemTpl
    });
  });

  return BookShop.BooksApp.Show.View;
});