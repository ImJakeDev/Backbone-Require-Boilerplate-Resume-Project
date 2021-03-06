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
    className: "d-flex col-12 align-items-center card p-5 mb-3 text-center",
    // View constructor
    initialize: function () {
      this.$el.append(
        $(document.createElement("div"))
          .append("<h1>Jake <br> Schaffer</h1>")
          .append("<h2>Full Stack Software Engineer</h2>")
          .append("<strong>/ImJakeDev</strong>")
      );
    },
    // View Event Handlers
    events: {},
  });
  // Returns the TitleCard class
  return TitleCard;
});
