// Left.js
// -------
define([
  "jquery",
  "backbone",
  "models/Model",
  "views/TitleCard",
], function ($, Backbone, Model, TitleCard) {
  const Left = Backbone.View.extend({
    tagName: "div",
    id: "left-col",
    className: "d-flex col-6 justify-content-center",
    // View constructor
    initialize: function () {
      this.titleCard = new TitleCard();
      this.$el.append(this.titleCard.$el);
    },
    // View Event Handlers
    events: {},
  });
  // Returns the Left class
  return Left;
});
