define(["app", "tpl!js/app/apps/books/list/templates/list.tpl", 
               "tpl!js/app/apps/books/list/templates/list_item.tpl"], 
function(BookShop, listTpl, listItemTpl) {

  BookShop.module("BooksApp.List", function(List, BookShop, Backbone, Marionette, $, _) {
  

  //create SINGLE VIEW and assign it a template
    List.Book = Marionette.ItemView.extend({
      tagName: "tr",
      template: listItemTpl,

        //events are defined at view level because they happen 'within this view'
      events: {
        "click": "highlightName",
        "click button.js-delete": "deleteClicked",
        "click a.js-show": "showClicked"
      },

      //declare function referenced in event
      highlightName: function(e) {
        this.$el.toggleClass("warning");
      },

      showClicked: function(e){
        e.preventDefault();
        e.stopPropagation();
        this.trigger("book:show", this.model);
      },

      deleteClicked: function(e) {
        e.stopPropagation();
        this.trigger("book:delete", this.model);
      },

      remove: function(){
        var self = this;
        this.$el.fadeOut( function(){
          Marionette.ItemView.prototype.remove.call(self);
        });
      }

    });

    //create a collection VIEW to DISPLAY multiple models
    List.Books = Marionette.CompositeView.extend({
      tagName: "table",
      className: "table table-hover",
      template: listTpl,
      itemView: List.Book,
      itemViewContainer: "tbody"
    });



  });

  return;
});