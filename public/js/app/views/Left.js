// Left.js
// -------
define([
  "jquery",
  "backbone",
  "models/Model",
  "views/TitleCard",
  "views/ContactCard",
  "views/MissionCard",
  "views/StrengthsCard",
], function (
  $,
  Backbone,
  Model,
  TitleCard,
  ContactCard,
  MissionCard,
  StrengthsCard
) {
  const Left = Backbone.View.extend({
    tagName: "div",
    id: "left-col",
    className: "d-flex col-6 flex-column justify-content-center",
    // View constructor
    initialize: function () {
      this.titleCard = new TitleCard();
      this.contactCard = new ContactCard();
      this.missionCard = new MissionCard();
      this.strengthsCard = new StrengthsCard();
      this.$el
        .append(this.titleCard.$el)
        .append(this.contactCard.$el)
        .append(this.missionCard.$el)
        .append(this.strengthsCard.$el);
    },
    // View Event Handlers
    events: {},
  });
  // Returns the Left class
  return Left;
});
