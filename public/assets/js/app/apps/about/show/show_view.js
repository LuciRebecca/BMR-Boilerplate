define(["app", 
        "tpl!js/app/apps/about/show/templates/message.tpl"], 
function(BookShop, messageTpl) {

  BookShop.module("AboutApp.Show.View", function(View, BookShop, Backbone, Marionette, $, _) {
    
    View.Message = Marionette.ItemView.extend({
      template: messageTpl
    });

  });

  return BookShop.AboutApp.Show.View;
});