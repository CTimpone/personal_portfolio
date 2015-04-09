Portfolio.Views.Resume = Backbone.View.extend({
  template: JST["resume"],

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
})
