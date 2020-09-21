// StrengthsCard.js
// -------
define(["jquery", "backbone", "models/Model"], function ($, Backbone, Model) {
  const StrengthsCard = Backbone.View.extend({
    tagName: "div",
    id: "strengths-card",
    className: "d-flex col-12 justify-content-start card p-4 my-3",
    // View constructor
    initialize: function () {
      this.$el
        .append("<h2>Strengths</h2>")
        .append("<strong>Learner</strong>")
        .append(
          "<p>- Great desire to learn and want to continuously improve</p>"
        )
        .append("<strong>Adaptability</strong>")
        .append(
          "<p>- Takes things as they come and discover the future one day at a time</p>"
        )
        .append("<strong>Strategic</strong>")
        .append(
          "<p>- Quickly spots the relevant patterns and issues with any given scenario</p>"
        )
        .append("<strong>Creative Thinking</strong>")
        .append(
          "<p>- Breaks out of well-worn paths and find fresh approaches</p>"
        )
        .append("<strong>Gap Detection</strong>")
        .append(
          "<p>- Perceives spots for producing better things and work outcomes</p>"
        )
        .append("<strong>Vision</strong>")
        .append(
          "<p>- Paints a picture of future ideas and get started on something bigger and bolder</p>"
        );
    },
    // View Event Handlers
    events: {},
  });
  // Returns the StrengthsCard class
  return StrengthsCard;
});
