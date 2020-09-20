// Resume.js
// -------
define([
  "jquery",
  "backbone",
  "models/Model",
  "views/Left",
  "views/Right",
], function ($, Backbone, Model, Left, Right) {
  const Resume = Backbone.View.extend({
    // The DOM Element associated with this view
    el: ".resume",

    // View constructor
    initialize: function () {

      this.left = new Left();
      this.right = new Right();
      this.$el
        .addClass("row")
        .append(this.left.$el)
        .append(this.right.$el);

      console.log(this);
    },

    // View Event Handlers
    events: {},
  });

  // Returns the View class
  return Resume;
});
