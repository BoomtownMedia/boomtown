Router.route("/", function() {
  this.render("main");
});

Router.route("/mission", function() {
  this.render("mission");
});

Router.route("/privacy_policy", function() {
  this.render("privacy_policy");
});
