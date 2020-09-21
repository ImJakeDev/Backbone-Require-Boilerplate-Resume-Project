// Left.js
// -------
define([
  "jquery",
  "backbone",
  "models/Model",
  "views/TitleCard",
  "views/ContactCard",
], function ($, Backbone, Model, TitleCard, ContactCard) {
  const Left = Backbone.View.extend({
    tagName: "div",
    id: "left-col",
    className: "d-flex col-6 flex-column justify-content-center",
    // View constructor
    initialize: function () {
      this.titleCard = new TitleCard();
      this.contactCard = new ContactCard();
      this.$el.append(this.titleCard.$el).append(this.contactCard.$el);
    },
    // View Event Handlers
    events: {},
  });
  // Returns the Left class
  return Left;
});
