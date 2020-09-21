// ContactCard.js
// -------
define(["jquery", "backbone", "models/Model"], function ($, Backbone, Model) {
  const ContactCard = Backbone.View.extend({
    tagName: "div",
    id: "contact-card",
    className: "d-flex col-12 justify-content-start card p-4 my-3",
    // View constructor
    initialize: function () {
      this.$el.append("<h2>Contact Info</h2>").append(
        $(document.createElement("div"))
          .addClass("row")
          .append(
            $(document.createElement("div"))
              .addClass("col-6")
              .append("<p>ImJakeDev@gmail.com</p>")
          )
          .append(
            $(document.createElement("div"))
              .addClass("col-6")
              .append("<p>605-940-0022</p>")
          )
      );
    },
    // View Event Handlers
    events: {},
  });
  // Returns the ContactCard class
  return ContactCard;
});
