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
      name: "deeppurple-purple",
      displayName: "Deep Purple / Purple",
      primaryShades: [ "#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92" ],
      primaryAccents: [ "#ea80fc", "#e040fb", "#d500f9", "#aa00ff" ]
    });
  });
}).call(this);