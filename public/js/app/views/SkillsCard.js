// SkillsCard.js
// -------
define(["jquery", "backbone", "models/Model"], function ($, Backbone, Model) {
  const SkillsCard = Backbone.View.extend({
    tagName: "div",
    id: "skills-card",
    className: "d-flex col-12 justify-content-start card p-4 my-3",
    // View constructor
    initialize: function () {
      this.$el
        .append("<h2>Programming Skills</h2>")
        .append("<strong>Hard Skills</strong>")
        .append(
          $(document.createElement("ul"))
            .append("<li>Reactive programming</li>")
            .append("<li>In-depth analysis of advance JavaScript/ES6</li>")
            .append("<li>Experience with Agile/Scrum methodology</li>")
            .append(
              "<li>Creates modern UI / UX and responsive web designs</li>"
            )
            .append("<li>Advance competency with HTML & CSS</li>")
            .append("<li>Experience with MVC framework ReactJS</li>")
            .append("<li>Skill developing and using APIs</li>")
            .append("<li>A passion for flex grids</li>")
            .append("<li>Experience with JS testing framework Jest</li>")
            .append("<li>Git workflow management</li>")
            .append("<li>Experience with client-side store using Redux</li>")
        )
        .append("<strong>Soft Skills</strong>")
        .append(
          $(document.createElement("ul"))
            .append(
              "<li>Great desire to learn and want to continuously improve</li>"
            )
            .append(
              "<li>Excellent problem solving, critical thinking and communication skills</li>"
            )
            .append(
              "<li>Cares deeply about the quality of the work being done</li>"
            )
            .append(
              "<li>Encourages teammates/coworkers to think bigger and better</li>"
            )
            .append(
              "<li>Ability to adapt and work with team members in various manners</li>"
            )
            .append("<li>Self-starter who can work independently</li>")
        );
    },
    // View Event Handlers
    events: {},
  });
  // Returns the SkillsCard class
  return SkillsCard;
});
