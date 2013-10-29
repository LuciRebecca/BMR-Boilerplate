define(["app", "js/app/apps/books/list/list_view"], function(BookShop) {

	BookShop.module("BooksApp.List", function(List, BookShop, Backbone, Marionette, $, _) {

		List.Controller = {
			listBooks: function(){
				require(["js/app/common/views", "js/app/entities/book"], function(){

					var loadingView = new BookShop.Common.Views.Loading();

					BookShop.mainRegion.show(loadingView); 

					var fetchingBooks = BookShop.request("books:entities");

					$.when(fetchingBooks).done(function(books){

						var booksListView = new List.Books({
							collection: books
						});

						booksListView.on("itemview:book:delete", function(childView, model){
							model.destroy();
						});

						booksListView.on("itemview:book:show", function(childView, model) {
							BookShop.trigger("book:show", model.get("id"));
						});

						BookShop.mainRegion.show(booksListView);
					});

				});

			}

		};

	});

	return BookShop.BooksApp.List.Controller;
});