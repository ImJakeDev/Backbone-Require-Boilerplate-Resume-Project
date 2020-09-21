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
  "views/SkillsCard",
], function (
  $,
  Backbone,
  Model,
  TitleCard,
  ContactCard,
  MissionCard,
  StrengthsCard,
  SkillsCard,
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
      this.skillsCard = new SkillsCard();
      this.$el
        .append(this.titleCard.$el)
        .append(this.contactCard.$el)
        .append(this.missionCard.$el)
        .append(this.strengthsCard.$el)
        .append(this.skillsCard.$el);
    },
    // View Event Handlers
    events: {},
  });
  // Returns the Left class
  return Left;
});
