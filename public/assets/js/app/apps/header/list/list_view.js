define(["app", "tpl!js/app/apps/header/list/templates/list.tpl", 
               "tpl!js/app/apps/header/list/templates/list_item.tpl"], 
function(BookShop, listTpl, listItemTpl) {

  BookShop.module("HeaderApp.List.View", function(View, BookShop, Backbone, Marionette, $, _) {

  	View.Header = Marionette.ItemView.extend({
  		template: listItemTpl,
  		tagName: "li"
  	});

  	View.Headers = Marionette.CompositeView.extend({
  		template: listTpl,
  		className: "navbar navbar-inverse navbar-fixed-top",
  		itemView: View.Header,
  		itemViewContainer: "ul"
  	});
  

  });

  return BookShop.HeaderApp.List.View;

});