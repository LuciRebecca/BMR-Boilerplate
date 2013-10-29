define(["app"], function(BookShop) {


  BookShop.module("Entities", function(Entities, BookShop, Backbone, Marionette, $, _) {

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Create the Books definition here so it can be called from lots of places but only needs updating in one
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  //create model
  Entities.Book = Backbone.Model.extend({
    //we add defaults so the app doesn't break if they aren't loadded/dont exist in the data
    defaults: {
      author: "",
      title: "",
      price: ""
    },
    urlRoot: "/api/books"
  });
  //create collection 
  Entities.BookCollection = Backbone.Collection.extend({
    url: "/api/books",
    model: Entities.Book,
    //sorts ALL instances for this collection by author
    comparator: "author"
  });


  var initializeBooks = function(){
    var books = new Entities.BookCollection( /* this is where we could load in cached data, maybe? */);
    books.forEach(function(book){
      book.save();
    });
    return books.models;
  };

  var API = {

    getBookEntities: function(){

      var books = new Entities.BookCollection();
      var defer = $.Deferred();

      books.fetch({
        success: function(data) {
          defer.resolve(data); 
        }
      });

      var promise = defer.promise();

      $.when(promise).done(function(books){

        if(books.length === 0) {
          console.log('no data found at url');
          var models = initializeBooks();
          books.reset(models);
        }

      });

      return promise;
    },

    getBookEntity: function(bookId){

      var book = new Entities.Book( { id: bookId } );
      var defer = $.Deferred();
      
      book.fetch({
        success: function(data){
          defer.resolve(data);
        },
        error: function(data){
          defer.resolve(undefined);
        }
      });
      
      return defer.promise();
    }

  };
  

  //add a request handler to call the api when a book:entities request is made
  BookShop.reqres.setHandler("books:entities", function(){
    return API.getBookEntities();
  });

  
  //add a request handler to call the api when a book:entity request is made
  BookShop.reqres.setHandler("book:entity", function(id){
    return API.getBookEntity(id);
  });

});

return;
});

