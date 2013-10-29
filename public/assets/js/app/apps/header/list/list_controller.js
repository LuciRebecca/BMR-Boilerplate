define(["app", "js/app/apps/header/list/list_view"], function(BookShop, View) {

	BookShop.module("HeaderApp.List", function(List, BookShop, Backbone, Marionette, $, _) {

		List.Controller = {
			listHeader: function(){
				require(["js/app/entities/header"], function(){

					var links = BookShop.request("header:entities");
					var headers = new View.Headers({collection: links});
						
					BookShop.headerRegion.show(headers);

				});

			}

		};

	});

	return BookShop.HeaderApp.List.Controller;
});