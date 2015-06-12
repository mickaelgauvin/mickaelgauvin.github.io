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
      name: "bluegrey-lightblue",
      displayName: "Blue Grey / Light Blue",
      primaryShades: [ "#eceff1", "#cfd8dc", "#b0bec5", "#90a4ae", "#78909c", "#607d8b", "#546e7a", "#455a64", "#37474f", "#263238" ],
      primaryAccents: [ "#80d8ff", "#40c4ff", "#00b0ff", "#0091ea" ]
    });
  });
}).call(this);