// DesktopRouter.js
// ----------------
define([
  "jquery",
  "backbone",
  "models/Model",
  "views/View",
  "views/Resume",
  "collections/Collection",
], function ($, Backbone, Model, View, Resume, Collection) {
  var DesktopRouter = Backbone.Router.extend({
    initialize: function () {
      // Tells Backbone to start watching for hashchange events
      Backbone.history.start();
    },

    // All of your Backbone Routes (add more)
    routes: {
      // When there is no hash on the url, the home method is called
      "": "index",
    },

    index: function () {
      // Instantiates a new view which will render the header text to the page
      new Resume();
    },
  });

  // Returns the DesktopRouter class
  return DesktopRouter;
});