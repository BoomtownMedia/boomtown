$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar.navbar-transparent").css("background-color" , "rgba(0,0,0,0.4)");
	  }

	  else{
		  $(".navbar.navbar-transparent").css("background-color" , "transparent");
	  }
  })
})


Template.main.events({


// jquery contact form find data itmems

    'submit #contactForm': function(event){
    event.preventDefault();
    var element = $(event.target);
    var name = element.find("#name").val();
    var email = element.find("#email").val();
    var message = element.find("#message").val();

    //create object to pass to serve methods
    var subForm = {
      name: name,
      email: email,
      message: message,
    };

    // call meteor to send email from input
    Meteor.call('sendEmail', subForm);
    Router.go("/contact");
  },

});
