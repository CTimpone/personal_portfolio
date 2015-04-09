Portfolio.Routers.Router = Backbone.Router.extend({

  routes: {
    "": "about",
    "about": "about",
    "projects": "projects",
    "resume": "resume"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  about: function () {
    var view = new Portfolio.Views.About();

    this._swapView(view);
  },

  projects: function () {
    var view = new Portfolio.Views.Projects();

    this._swapView(view);
  },

  resume: function () {
    var view = new Portfolio.Views.Resume();

    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;

    this.$rootEl.html(this.currentView.render().$el);
  }
});
