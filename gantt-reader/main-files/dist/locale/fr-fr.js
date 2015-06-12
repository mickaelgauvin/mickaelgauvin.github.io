/*! timetraveljs-gantt-reader - v1.0.0 - 2015-06-12 | © 2015 Mickaël Gauvin */

// ████████╗██╗███╗   ███╗███████╗ ████████╗██████╗  █████╗ ██╗   ██╗███████╗██╗           ██╗███████╗
// ╚══██╔══╝██║████╗ ████║██╔════╝ ╚══██╔══╝██╔══██╗██╔══██╗██║   ██║██╔════╝██║           ██║██╔════╝
//    ██║   ██║██╔████╔██║█████╗      ██║   ██████╔╝███████║██║   ██║█████╗  ██║           ██║███████╗
//    ██║   ██║██║╚██╔╝██║██╔══╝      ██║   ██╔══██╗██╔══██║╚██╗ ██╔╝██╔══╝  ██║      ██   ██║╚════██║
//    ██║   ██║██║ ╚═╝ ██║███████╗    ██║   ██║  ██║██║  ██║ ╚████╔╝ ███████╗███████╗ ╚█████╔╝███████║
//    ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚══════╝  ╚════╝ ╚══════╝

/*! Font Awesome by Dave Gandy - http://fontawesome.io */
/*! Lo-Dash 2.4.1 MIT license <http://lodash.com/> <http://lodash.com/license> */
/*! Backbone.js 1.1.2 MIT license <http://backbonejs.org> */
/*! Fontello Copyright (C) 2011 by Vitaly Puzrin <http://fontello.com/> */
/*! JS Signals <http://millermedeiros.github.com/js-signals/>  */
/*! tween.js https://github.com/CreateJS/TweenJS  */
/*! easel.js https://github.com/CreateJS/EaselJS  */

(function() {
  !function(root, factory) {
    "function" == typeof define && define.amd ? define([ "tt.common", "tt.timeline" ], factory) : factory(root.tt.common, root.tt.timeline);
  }(this, function(common, timeline) {
    var A, COM, CONFIG, CondensedTickDateRendererConfig, Constants, CoreFunctions, D, DD, DMYY, DMYYYY, E, EDMYY, EE, EEDMYY, EEDMYYYY, EEE, EEEDMYYYY, EEEE, EEEEDMMMMMYYYY, EEEEDMMMMYYYY, EEEEDMMMYYYY, H, HH, J, JJ, Jh, JhNm, JhNmSs, JhNmSsQms, K, KK, L, LL, LP, M, MM, MMM, MMMM, MMMMM, MMMMMYYYY, MMMMYYYY, MMMYYYY, N, NN, PAR, Q, QQQ, RP, S, SP, SS, STR, T, TF, TS, TT, TTT, TTTYYYY, TTYYYY, TYYYY, TimelineLocale, TimelineLocaleManager, W, WW, WWW, WWWYYYY, WWYYYY, WYYYY, X, XX, XXX, XXXYYYY, XXYYYY, XYYYY, YY, YYYY, YYYY_W, f, formatTokenFunctions, nouns, s, week, _;
    CoreFunctions = common.CoreFunctions, _ = common._;
    TimelineLocaleManager = timeline.TimelineLocaleManager, TimelineLocale = timeline.TimelineLocale, 
    Constants = timeline.Constants, CondensedTickDateRendererConfig = timeline.CondensedTickDateRendererConfig;
    CONFIG = CondensedTickDateRendererConfig.CONFIG;
    nouns = {
      months: [ "janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre" ],
      monthsShort: [ "janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc." ],
      monthsMin: [ "Ja", "Fé", "Ma", "Av", "Ma", "Ju", "Ju", "Ao", "Se", "Oc", "No", "Dé" ],
      weekdays: [ "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi" ],
      weekdaysShort: [ "dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam." ],
      weekdaysAlmostMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ],
      weekdaysMin: [ "D", "L", "M", "M", "J", "V", "S" ],
      week: "semaine n°",
      weekShort: "sem. n°",
      weekMin: "S",
      halfYear: "semestre n°",
      halfYearShort: "sem. n°",
      halfYearMin: "S",
      quarterYear: "trimestre n°",
      quarterYearShort: "tri. n°",
      quarterYearMin: "T",
      timeOfDay: [ "am", "pm" ]
    };
    week = {
      dow: 1,
      doy: 4
    };
    formatTokenFunctions = TimelineLocale.formatTokenFunctions;
    TF = formatTokenFunctions({
      nouns: nouns,
      week: week
    });
    STR = TF.STR, YYYY = TF.YYYY, YY = TF.YY, TTT = TF.TTT, TT = TF.TT, T = TF.T, XXX = TF.XXX, 
    XX = TF.XX, X = TF.X, MMMMM = TF.MMMMM, MMMM = TF.MMMM, MMM = TF.MMM, MM = TF.MM, 
    M = TF.M, WWW = TF.WWW, WW = TF.WW, W = TF.W, DD = TF.DD, D = TF.D, EEEE = TF.EEEE, 
    EEE = TF.EEE, EE = TF.EE, E = TF.E, A = TF.A, HH = TF.HH, H = TF.H, JJ = TF.JJ, 
    J = TF.J, KK = TF.KK, K = TF.K, LL = TF.LL, L = TF.L, NN = TF.NN, N = TF.N, SS = TF.SS, 
    S = TF.S, QQQ = TF.QQQ, Q = TF.Q;
    SP = STR(" ");
    COM = STR(", ");
    LP = STR("(");
    RP = STR(")");
    PAR = function(FORMAT) {
      return [ SP, LP, FORMAT, RP ];
    };
    MMMMMYYYY = [ MMMMM, SP, YYYY ];
    MMMMYYYY = [ MMMM, SP, YYYY ];
    MMMYYYY = [ MMM, SP, YYYY ];
    TTTYYYY = [ TTT, COM, YYYY ];
    TTYYYY = [ TT, COM, YYYY ];
    TYYYY = [ T, COM, YYYY ];
    XXXYYYY = [ XXX, COM, YYYY ];
    XXYYYY = [ XX, COM, YYYY ];
    XYYYY = [ X, COM, YYYY ];
    YYYY_W = _.partialRight(YYYY, !0);
    DMYYYY = [ D, STR("/"), M, STR("/"), YYYY ];
    DMYY = [ D, STR("/"), M, STR("/"), YY ];
    WWWYYYY = [ WWW, COM, YYYY_W ];
    WWYYYY = [ WW, COM, YYYY_W ];
    WYYYY = [ W, COM, YYYY_W ];
    EEEEDMMMMMYYYY = [ EEEE, SP, D, SP, MMMMMYYYY ];
    EEEEDMMMMYYYY = [ EEEE, SP, D, SP, MMMMYYYY ];
    EEEEDMMMYYYY = [ EEEE, SP, D, SP, MMMYYYY ];
    EEEDMYYYY = [ EEE, SP, DMYYYY ];
    EEDMYYYY = [ EE, SP, DMYYYY ];
    EEDMYY = [ EE, SP, DMYY ];
    EDMYY = [ E, SP, DMYY ];
    Jh = [ COM, J, STR("h") ];
    JhNm = [ Jh, N, STR("m") ];
    JhNmSs = [ JhNm, S, STR("s") ];
    JhNmSsQms = [ JhNmSs, Q, STR("ms") ];
    TS = timeline.TimeScale;
    f = [];
    f[TS.CENTURY_D] = [ CONFIG(YYYY) ];
    f[TS.HALF_CENTURY_D] = f[TS.CENTURY_D];
    f[TS.QUARTER_OF_A_CENTURY_D] = f[TS.CENTURY_D];
    f[TS.DECADE_D] = f[TS.CENTURY_D];
    f[TS.QUINQUENNIUM_D] = f[TS.CENTURY_D];
    f[TS.YEAR_D] = f[TS.CENTURY_D];
    f[TS.HALF_YEAR_D] = [ CONFIG(TTTYYYY), CONFIG(TTYYYY), CONFIG(TYYYY) ];
    f[TS.QUARTER_OF_A_YEAR_D] = [ CONFIG(XXXYYYY), CONFIG(XXYYYY), CONFIG(XYYYY) ];
    /*
    f[TS.MONTH_D]                 = [
      {month: MMMMM, year: YYYY}
      {month: MMMM, year: YYYY}
      {month: MMM, year: YYYY}
    ]
     */
    f[TS.MONTH_D] = [ CONFIG(MMMMMYYYY), CONFIG(MMMMYYYY), CONFIG(MMMYYYY) ];
    f[TS.WEEK_D] = [ CONFIG(EEEEDMMMMMYYYY, PAR(WWW)), CONFIG(EEEEDMMMMYYYY, PAR(WWW)), CONFIG(EEEEDMMMYYYY, PAR(WWW)), CONFIG(EEEDMYYYY, PAR(WW)), CONFIG(EEDMYYYY, PAR(WW)), CONFIG(EEDMYY, PAR(WW)), CONFIG(EDMYY, PAR(W)), CONFIG(DMYY, PAR(W)) ];
    f[TS.DATE_D] = [ CONFIG(EEEEDMMMMMYYYY), CONFIG(EEEEDMMMMYYYY), CONFIG(EEEEDMMMYYYY), CONFIG(EEEDMYYYY), CONFIG(EEDMYYYY), CONFIG(EEDMYY), CONFIG(EDMYY), CONFIG(DMYY) ];
    f[TS.MORNING_AFTERNOON_D] = [ CONFIG(EEEEDMMMMMYYYY, Jh), CONFIG(EEEEDMMMMYYYY, Jh), CONFIG(EEEEDMMMYYYY, Jh), CONFIG(EEEDMYYYY, Jh), CONFIG(EEDMYYYY, Jh), CONFIG(EEDMYY, Jh), CONFIG(EDMYY, Jh), CONFIG(DMYY, Jh) ];
    f[TS.SIXTH_OF_A_DAY_D] = f[TS.MORNING_AFTERNOON_D];
    f[TS.TWELFTH_OF_A_DAY_D] = f[TS.MORNING_AFTERNOON_D];
    f[TS.HOUR_D] = f[TS.MORNING_AFTERNOON_D];
    f[TS.QUARTER_OF_AN_HOUR_D] = [ CONFIG(EEEEDMMMMMYYYY, JhNm), CONFIG(EEEEDMMMMYYYY, JhNm), CONFIG(EEEEDMMMYYYY, JhNm), CONFIG(EEEDMYYYY, JhNm), CONFIG(EEDMYYYY, JhNm), CONFIG(EEDMYY, JhNm), CONFIG(EDMYY, JhNm), CONFIG(DMYY, JhNm) ];
    f[TS.SIXTH_OF_AN_HOUR_D] = f[TS.QUARTER_OF_AN_HOUR_D];
    f[TS.TWELFTH_OF_AN_HOUR_D] = f[TS.QUARTER_OF_AN_HOUR_D];
    f[TS.MINUTE_D] = f[TS.QUARTER_OF_AN_HOUR_D];
    f[TS.QUARTER_OF_MINUTE_D] = [ CONFIG(EEEEDMMMMMYYYY, JhNmSs), CONFIG(EEEEDMMMMYYYY, JhNmSs), CONFIG(EEEEDMMMYYYY, JhNmSs), CONFIG(EEEDMYYYY, JhNmSs), CONFIG(EEDMYYYY, JhNmSs), CONFIG(EEDMYY, JhNmSs), CONFIG(EDMYY, JhNmSs), CONFIG(DMYY, JhNmSs) ];
    f[TS.SIXTH_OF_A_MINUTE_D] = f[TS.QUARTER_OF_MINUTE_D];
    f[TS.TWELFTH_OF_A_MINUTE_D] = f[TS.QUARTER_OF_MINUTE_D];
    f[TS.SECOND_D] = f[TS.QUARTER_OF_MINUTE_D];
    f[TS.HALF_OF_SECOND_D] = [ CONFIG(EEEEDMMMMMYYYY, JhNmSsQms), CONFIG(EEEEDMMMMYYYY, JhNmSsQms), CONFIG(EEEEDMMMYYYY, JhNmSsQms), CONFIG(EEEDMYYYY, JhNmSsQms), CONFIG(EEDMYYYY, JhNmSsQms), CONFIG(EEDMYY, JhNmSsQms), CONFIG(EDMYY, JhNmSsQms), CONFIG(DMYY, JhNmSsQms) ];
    f[TS.TENTH_OF_A_SECOND_D] = f[TS.HALF_OF_SECOND_D];
    f[TS.TWENTIETH_OF_A_SECOND_D] = f[TS.HALF_OF_SECOND_D];
    s = [];
    s[TS.CENTURY_D] = [ CONFIG(YY) ];
    s[TS.HALF_CENTURY_D] = s[TS.CENTURY_D];
    s[TS.QUARTER_OF_A_CENTURY_D] = s[TS.CENTURY_D];
    s[TS.DECADE_D] = s[TS.CENTURY_D];
    s[TS.QUINQUENNIUM_D] = s[TS.CENTURY_D];
    s[TS.YEAR_D] = s[TS.CENTURY_D];
    s[TS.HALF_YEAR_D] = [ CONFIG(TTT), CONFIG(TT), CONFIG(T) ];
    s[TS.QUARTER_OF_A_YEAR_D] = [ CONFIG(XXX), CONFIG(XX), CONFIG(X) ];
    s[TS.MONTH_D] = [ CONFIG(MMMMM), CONFIG(MMMM), CONFIG(MMM), CONFIG(MM), CONFIG(M) ];
    s[TS.WEEK_D] = [ CONFIG(WWW), CONFIG(WW), CONFIG(W) ];
    s[TS.DATE_D] = [ CONFIG(EEEE, SP, D), CONFIG(EEE, SP, D), CONFIG(EE, SP, D), CONFIG(E, SP, D), CONFIG(E) ];
    s[TS.MORNING_AFTERNOON_D] = [ CONFIG(J, STR(" heures")), CONFIG(J, STR("h")) ];
    s[TS.SIXTH_OF_A_DAY_D] = s[TS.MORNING_AFTERNOON_D];
    s[TS.TWELFTH_OF_A_DAY_D] = s[TS.MORNING_AFTERNOON_D];
    s[TS.HOUR_D] = s[TS.MORNING_AFTERNOON_D];
    s[TS.QUARTER_OF_AN_HOUR_D] = [ CONFIG(N, STR(" minutes")), CONFIG(N, STR(" min.")), CONFIG(N, STR("m")) ];
    s[TS.SIXTH_OF_AN_HOUR_D] = s[TS.QUARTER_OF_AN_HOUR_D];
    s[TS.TWELFTH_OF_AN_HOUR_D] = s[TS.QUARTER_OF_AN_HOUR_D];
    s[TS.MINUTE_D] = s[TS.QUARTER_OF_AN_HOUR_D];
    s[TS.QUARTER_OF_MINUTE_D] = [ CONFIG(S, STR(" secondes")), CONFIG(S, STR(" sec.")), CONFIG(S, STR("s")) ];
    s[TS.SIXTH_OF_A_MINUTE_D] = s[TS.QUARTER_OF_MINUTE_D];
    s[TS.TWELFTH_OF_A_MINUTE_D] = s[TS.QUARTER_OF_MINUTE_D];
    s[TS.SECOND_D] = s[TS.QUARTER_OF_MINUTE_D];
    s[TS.HALF_OF_SECOND_D] = [ CONFIG(Q, STR(" millisecondes")), CONFIG(Q, STR("ms")) ];
    s[TS.TENTH_OF_A_SECOND_D] = s[TS.HALF_OF_SECOND_D];
    s[TS.TWENTIETH_OF_A_SECOND_D] = s[TS.HALF_OF_SECOND_D];
    return TimelineLocaleManager.defineLocale("fr-fr-condensed", {
      renderingType: Constants.RENDERING_TYPE_CONDENSED,
      nouns: nouns,
      week: week,
      typicalDate: new Date(2e3, 10, 26, 23, 59, 59, 999),
      firstRowRendererConfigs: f,
      secondRowRendererConfigs: s
    });
  });
}).call(this);
(function() {
  !function(root, factory) {
    "function" == typeof define && define.amd ? define([ "tt.common", "tt.ganttchart" ], factory) : factory(root.tt.common, root.tt.ganttchart);
  }(this, function(common, ganttchart) {
    var CoreFunctions, GanttChartLocaleManager;
    CoreFunctions = common.CoreFunctions;
    GanttChartLocaleManager = ganttchart.GanttChartLocaleManager;
    return GanttChartLocaleManager.defineLocale("fr-fr", "fr-fr-condensed", {
      menu: "Menu",
      zoomIn: "Zoom avant",
      zoomOut: "Zoom arrière",
      verticalZoomIn: "Zoom vertical avant",
      verticalZoomOut: "Zoom vertical arrière",
      configuration: "Configuration",
      configurationPanelTitle: " Configuration",
      displayToday: "Afficher la date d'aujourd'hui.",
      displayStart: "Afficher la date du début du projet.",
      displayFinish: "Afficher la date de fin du projet.",
      language: "Langage",
      theme: "Theme",
      themeChooser: " Choix du thème",
      language: " Choix du langage",
      about: "À propos de Timetraveljs Gantt Reader",
      "indigo-pink": "Indigo / Rose",
      "grey-red": "Gris / Rouge",
      "bluegrey-lightblue": "Gris bleu / Bleu clair",
      "cyan-orange": "Cyan / Orange",
      "teal-yellow": "Vert de gris / Jaune",
      "brown-cyan": "Marron / Cyan",
      "deeppurple-purple": "Violet foncé / Violet",
      "deeporange-cyan": "Orange foncé / Cyan",
      "blue-yellow": "Bleu / Jaune"
    });
  });
}).call(this);