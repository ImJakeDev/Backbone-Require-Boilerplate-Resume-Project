// TitleCard.js
// -------
define([
  "jquery",
  "backbone",
  "models/Model",
], function ($, Backbone, Model) {
  const TitleCard = Backbone.View.extend({
    tagName: "div",
    id: "title-card",
    className: "d-flex col-12 align-items-center card p-5",
    // View constructor
    initialize: function () {
      this.$el.append(
        $(document.createElement("div"))
          .append("<h1>Jake Schaffer</h1>")
          .append("<h2>Full Stack Software Engineer</h2>")
      );
    },
    // View Event Handlers
    events: {},
  });
  // Returns the TitleCard class
  return TitleCard;
});
