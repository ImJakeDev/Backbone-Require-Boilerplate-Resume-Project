// Resume.js
// -------
define([
  "jquery",
  "backbone",
  "models/Model",
  "text!templates/resume.html",
  "views/Header",
], function ($, Backbone, Model, template, Header) {
  var Resume = Backbone.View.extend({
    // The DOM Element associated with this view
    el: ".resume",

    // View constructor
    initialize: function () {
      // Setting the view's template property using the Underscore template method
      this.template = _.template(template, {});
      // Dynamically updates the UI with the view's template
      this.header = new Header
      this.$el.html(this.template)
      this.$el.append(this.header.$el);

      console.log(this);
    },

    // View Event Handlers
    events: {},

  });

  // Returns the View class
  return Resume;
});
