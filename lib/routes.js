FlowRouter.route('/', {
  action: function(params){
    BlazeLayout.render("main");
  }
});

FlowRouter.route('/contact', {
  action: function(params){
    BlazeLayout.render('contact')
  }
});
