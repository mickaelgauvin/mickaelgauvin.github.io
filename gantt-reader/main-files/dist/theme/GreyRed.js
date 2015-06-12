/*! timetraveljs-gantt-reader - v<%= __packageJson['gantt-reader'].version %> - <%= grunt.template.today("yyyy-mm-dd") %> | © 2015 Mickaël Gauvin */

/*! Font Awesome by Dave Gandy - http://fontawesome.io */
/*! Lo-Dash 2.4.1 MIT license <http://lodash.com/> <http://lodash.com/license> */
/*! Backbone.js 1.1.2 MIT license <http://backbonejs.org> */
/*! Fontello Copyright (C) 2011 by Vitaly Puzrin <http://fontello.com/> */
/*! JS Signals <http://millermedeiros.github.com/js-signals/>  */
/*! tween.js https://github.com/CreateJS/TweenJS  */
/*! easel.js https://github.com/CreateJS/EaselJS  */


(function() {
  !function(root, factory) {
    "function" == typeof define && define.amd ? define([ "tt.common" ], factory) : factory(root.tt.common);
  }(this, function(common) {
    var ThemeManager;
    ThemeManager = common.ThemeManager;
    return ThemeManager.define({
      name: "grey-red",
      displayName: "Grey / Red",
      primaryShades: [ "#fafafa", "#f5f5f5", "#eeeeee", "#e0e0e0", "#bdbdbd", "#9e9e9e", "#757575", "#616161", "#424242", "#212121" ],
      primaryAccents: [ "#ff8a80", "#ff5252", "#ff1744", "#d50000" ]
    });
  });
}).call(this);