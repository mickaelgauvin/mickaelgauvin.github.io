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
      name: "deeporange-cyan",
      displayName: "Deep Orange / Cyan",
      primaryShades: [ "#fbe9e7", "#ffccbc", "#ffab91", "#ff8a65", "#ff7043", "#ff5722", "#f4511e", "#e64a19", "#d84315", "#bf360c" ],
      primaryAccents: [ "#84ffff", "#18ffff", "#00e5ff", "#00b8d4" ]
    });
  });
}).call(this);