// ExperienceCard.js
// -------
define(["jquery", "backbone", "models/Model"], function ($, Backbone, Model) {
  const ExperienceCard = Backbone.View.extend({
    tagName: "div",
    id: "strengths-card",
    className: "d-flex col-12 justify-content-start card p-4 mb-3",
    // View constructor
    initialize: function () {
      this.$el
        .append("<h2>Technology Experience</h2>")
        // --------------------------------------------------
        .append("<strong>Full Stack Software Engineer Training</strong>")
        .append("<em>Emerging Digital Academy | April 2020 - Present</em>")
        .append(
          $(document.createElement("ul"))
            .append(
              "<li>In-depth analysis of advance JavaScript/ES6 and Software Engineering</li>"
            )
            .append(
              "<li>Pair programming with teammates to build applications while working remotely using modern collaboration tools</li>"
            )
            .append(
              "<li>Building Full Stack JavaScript applications with NodeJS and ReactJS</li>"
            )
            .append(
              "<li>Developing problem-solving skills and the skills to reverse engineer end-goals to develop larger projects</li>"
            )
        )
        // --------------------------------------------------
        .append("<strong>Filament Technician</strong>")
        .append("<em>3D-Fuel | March 2019 - April 2020</em>")
        .append(
          $(document.createElement("ul"))
            .append(
              "<li>Tweaked settings and fine-tuned machines to produce the best product</li>"
            )
            .append("<li>Managed machine runtime</li>")
            .append("<li>Maintained a high-quality product</li>")
            .append(
              "<li>Tested new materials within the machine’s capabilities</li>"
            )
        )
        // --------------------------------------------------
        .append("<strong>CAD/CAM Technician</strong>")
        .append("<em>Protosthetics | September 2019 - February 2020</em>")
        .append(
          $(document.createElement("ul"))
            .append(
              "<li>Created 3D modeling of orthotics to patients’ needs</li>"
            )
            .append(
              "<li>Learned and used CAD/CAM software to modify 3d objects</li>"
            )
            .append(
              "<li>Ran and maintained fabrication equipment to produce custom products</li>"
            )
        )
        // --------------------------------------------------
        .append("<h2>Product Design Experience</h2>")
        // --------------------------------------------------
        .append("<strong>Product Developer/Production Specialist</strong>")
        .append("<em>DogIDs | April 2017 - February 2019</em>")
        .append(
          $(document.createElement("ul"))
            .append("<li>Manufactured hundreds of products weekly</li>")
            .append(
              "<li>Developed processes to create new and innovative products that are safe, high quality, customizable and dog-friendly</li>"
            )
            .append(
              "<li>Organized the workflow of production to be the most functional and efficient it can be</li>"
            )
            .append(
              "<li>Created processes and organization that will develop a flow for managing reusable waste to be recycled</li>"
            )
            .append(
              "<li>Implemented a new production calendar to manage production time</li>"
            )
            .append(
              "<li>Ordered wholesale stock & products through vendors</li>"
            )
            .append(
              "<li>Innovated company prototyping opportunity with 3D printing</li>"
            )
            .append(
              "<li>Learned custom manufacturing processes: laser engraving, cold cut biothane, assembly biothane, embroidery, sewing</li>"
            )
        )
        // --------------------------------------------------
        .append("<strong>Graphic Designer</strong>")
        .append("<em>Office Sign Company | October 2016 - March 2017</em>")
        .append(
          $(document.createElement("ul"))
            .append("<li>Created production-ready graphic art</li>")
            .append("<li>Processed dozens of customer orders promptly</li>")
            .append(
              "<li>Customized and personalized products for each customer order</li>"
            )
            .append(
              "<li>Designed new product artwork to sell on the website</li>"
            )
            .append("<li>Edited designed files for the production team</li>")
            .append(
              "<li>Utilized production knowledge for workflow efficiency</li>"
            )
            .append("<li>Expert in Adobe CC software</li>")
        )
        // --------------------------------------------------
        .append("<h2>Leadership Experience</h2>")
        // --------------------------------------------------
        .append("<strong>Startup Weekend Organizer</strong>")
        .append("<em>2017 - 2019</em>")
        .append(
          $(document.createElement("ul"))
            .append(
              "<li>Connected with attendees to make sure they enjoyed their experience</li>"
            )
            .append(
              "<li>Interacted with attendees to help solve problems and provide feedback</li>"
            )
            .append(
              "<li>Helped analyze the team’s pitches and prioritized their goal and vision</li>"
            )
            .append(
              "<li>Supported the other organizers and helped with any task</li>"
            )
        )
        // --------------------------------------------------
        .append("<strong>Startup Weekend Attendee</strong>")
        .append("<em>2014 - 2017</em>")
        .append(
          $(document.createElement("ul"))
            .append(
              "<li>Led my team to 1st place, during 4th year attending</li>"
            )
            .append("<li>Pitched 2 ideas and developed them as a team</li>")
            .append("<li>Learned about lean startup culture</li>")
        );
        // --------------------------------------------------
    },
    // View Event Handlers
    events: {},
  });
  // Returns the ExperienceCard class
  return ExperienceCard;
});
