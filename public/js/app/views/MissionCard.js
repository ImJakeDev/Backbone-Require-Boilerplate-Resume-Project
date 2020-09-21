// MissionCard.js
// -------
define(["jquery", "backbone", "models/Model"], function ($, Backbone, Model) {
  const MissionCard = Backbone.View.extend({
    tagName: "div",
    id: "mission-card",
    className: "d-flex col-12 justify-content-start card p-4 my-3",
    // View constructor
    initialize: function () {
      this.$el
        .append("<h2>Mission</h2>")
        .append(
          "<strong>To create, connect and inspire technology for changemakers, so they can achieve their vision.</strong>"
        );
    },
    // View Event Handlers
    events: {},
  });
  // Returns the MissionCard class
  return MissionCard;
});
