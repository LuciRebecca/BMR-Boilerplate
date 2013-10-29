define(["app","js/app/apps/about/show/show_view"], function(BookShop, View) {

	BookShop.module("AboutApp.Show", function(Show, BookShop, Backbone, Marionette, $, _) {

		Show.Controller = {

			showAbout: function(id){

				var view = new View.Message();

				BookShop.mainRegion.show(view);

			}

		};

	});

	return BookShop.AboutApp.Show.Controller;
});