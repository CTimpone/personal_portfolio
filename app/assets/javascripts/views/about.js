Portfolio.Views.About = Backbone.View.extend({
  template: JST["about"],

  initialize: function () {
    $(".links-content li").css({"color": "#FFFFF3", "font-weight": "400"});
    $(".about-page").css({"color": "#00C0FF", "font-weight": "700"});
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
})
