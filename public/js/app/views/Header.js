// Header.js
// -------
define([
  "jquery",
  "backbone",
  "models/Model",
  // "text!templates/resume.html",
], function ($, Backbone, Model, template) {
  var Header = Backbone.View.extend({
    tagName: "div",
    id: "resume-header",
    className: "d-flex col-6 align-items-center",

    // View constructor
    initialize: function () {
      this.$el.append('<p>Hey I am starting the resume thingy...');
    },

    // View Event Handlers
    events: {},
  });

  // Returns the View class
  return Header;
});
