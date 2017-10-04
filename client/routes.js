Router.route('/', function() {
  this.render('main');
  event.preventDefault();
});

Router.route('/blog', function(){
  this.render('blog');
});
