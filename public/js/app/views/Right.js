// Right.js
// -------
define(["jquery", "backbone", "models/Model", "views/TitleCard"], function (
  $,
  Backbone,
  Model,
  TitleCard
) {
  const Right = Backbone.View.extend({
    tagName: "div",
    id: "right-col",
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
  return Right;
});
