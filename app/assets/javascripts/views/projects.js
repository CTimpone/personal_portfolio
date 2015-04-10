Portfolio.Views.Projects = Backbone.View.extend({
  template: JST["projects"],

  initialize: function () {
    $(".links-content li").css({"color": "#FFFFF3", "font-weight": "400"});
    $(".projects-page").css({"color": "#00C0FF", "font-weight": "700"});
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
})
