window.Portfolio = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Portfolio.Routers.Router({
      $rootEl: $('#content')
    });
    Backbone.history.start();
    Backbone.history.navigate("about", {trigger: true})
  }
};

$(document).ready(function(){
  Portfolio.initialize();
});
