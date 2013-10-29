define(["app","js/app/apps/books/show/show_view"], function(BookShop, View) {

	BookShop.module("BooksApp.Show", function(Show, BookShop, Backbone, Marionette, $, _) {

		Show.Controller = {

			showBook: function(id){

				require(["js/app/common/views", "js/app/entities/book"], function(){

					// set up a loading view while we're waiting for data
					var loadingView = new BookShop.Common.Views.Loading();

					//push it into the main page region
					BookShop.mainRegion.show(loadingView); 

					var fetchingBook = BookShop.request("book:entity", id);



					$.when(fetchingBook).done(function(book){
						
						var bookView;

						console.log(book);

						if(book !== undefined) {
								bookView = new View.Book({
									model:book
								});
						}
						else {
								bookView = new View.MissingBook({
									model:book
								});

						}

						BookShop.mainRegion.show(bookView);        
					});
				});

			}

		}

	});

	return BookShop.BooksApp.Show.Controller;
});