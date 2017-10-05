FlowRouter.route('/', {
  action: function(params){
    BlazeLayout.render("main");
  }
});

FlowRouter.route('/blog', {
  action: function(params){
    BlazeLayout.render('blog')
  }
});
