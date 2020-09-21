// Right.js
// -------
define(["jquery", "backbone", "models/Model", "views/ExperienceCard"], function (
  $,
  Backbone,
  Model,
  ExperienceCard
) {
  const Right = Backbone.View.extend({
    tagName: "div",
    id: "right-col",
    className: "d-flex col-6 justify-content-center",
    // View constructor
    initialize: function () {
      this.experienceCard = new ExperienceCard();
      this.$el.append(this.experienceCard.$el);
    },
    // View Event Handlers
    events: {},
  });
  // Returns the Left class
  return Right;
});
