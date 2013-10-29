//config settings
requirejs.config({
  baseUrl: "assets",
  paths: {

    app: "js/app/app",
    backbone: "libs/backbone-amd/backbone",
    "backbone.picky": "libs/backbone.picky/lib/backbone.picky",
    jquery: "libs/jquery/jquery",
    json2: "libs/json2/json2",
    marionette: "libs/marionette/lib/backbone.marionette",
    spin: "libs/spinjs/spin",
    "spin.jquery": "libs/spinjs/jquery.spin",
    tpl: "libs/requirejs-tpl/tpl",
    underscore: "libs/underscore-amd/underscore"
  },

  //non amd stuff
  shim: {
    underscore: {
      exports: "_"
    },
    app: {
      exports: "app"
    },

    //dependencies
    backbone: {
      deps: ["jquery", "underscore", "json2"],
      exports: "Backbone"
    },
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    "spin.jquery": ["spin", "jquery"],
    "backbone.picky": ["backbone"]
  }

});


require(["app", "js/app/apps/header/header_app"], function(BookShop){
  BookShop.start();
});