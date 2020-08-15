$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar.navbar-transparent").css(
        "background-color",
        "rgba(0,0,0,0.4)"
      );
    } else {
      $(".navbar.navbar-transparent").css("background-color", "transparent");
    }
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $("nav.navbar.navbar-transparent.navbar-fixed-top.contact").css(
        "background-color",
        "rgba(0,0,0,0.4)"
      );
    } else {
      $("nav.navbar.navbar-transparent.navbar-fixed-top.contact").css(
        "background-color",
        "transparent"
      );
    }
  });
});

Template.main.onRendered(function() {
  var self = this;
  self.selection = this.$(".grid").isotope({
    //options....
    itemSelector: ".grid-item",
    filter: "*",
    masonry: {
      columnWidth: 300,
      isFitWidth: true
    }
  });

  self.selection.imagesLoaded(function() {
    self.selection.isotope("layout");
  });
});

// removed contact form js logic 7/20/2019

//Template.main.events({

// jquery contact form find data itmems

//   'submit #contactForm': function(event){
//   event.preventDefault();
//   var element = $(event.target);
//   var name = element.find("#name").val();
//   var email = element.find("#email").val();
//   var message = element.find("#message").val();
//
//   //create object to pass to serve methods
//   var subForm = {
//     name: name,
//     email: email,
//     message: message,
//   };
//
//   // call meteor to send email from input
//   Meteor.call('sendEmail', subForm);
//   Router.go("/contact");
// },
//});   // end of remove 7/20/2019

//// Facebook API call (added 7/20/2019 AF, JS)



