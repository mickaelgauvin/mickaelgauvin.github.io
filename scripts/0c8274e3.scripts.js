(function(){"use strict";var a,b,c,d;b=angular.module("mgApp",["ngAnimate","ngSanitize","ui.router"]),b.constant("_",window._),b.constant("URI",window.URI),b.constant("URITemplate",window.URITemplate),b.constant("moment",window.moment),c={anonyme:!1,pourImpression:!0,pourImpressionOptions:{projetsToExclude:[15e3,22,19,18,17,15,14,13,12,8,9,6,5],formationsToExclude:[1,2]}},a={anonyme:!1,pourImpression:!0,pourImpressionOptions:{projetsToExclude:[18,15,14,12,8,9,5],formationsToExclude:[1,2]}},d={anonyme:!1,pourImpression:!1,pourImpressionOptions:{projetsToExclude:[],formationsToExclude:[]}},b.constant("mg.options",d),b.config(["$stateProvider","$urlRouterProvider",function(a,b){return b.when("/",function(){return"/cv"}).otherwise("/cv"),a.state("cv",{url:"/cv",templateUrl:"views/cv.html",controller:"mg.CVCtrl"}).state("cv2",{url:"/cv2",templateUrl:"views/cv.html",controller:"mg.CVCtrl"})}]),b.run(["$log","$rootScope","$state","$stateParams","$window",function(a,b,c,d,e){return b._=e._,b.$state=c,b.$stateParams=d,b.$on("$stateChangeStart",function(){}),b.$on("$stateChangeSuccess",function(){}),b.$on("$stateNotFound",function(){}),b.$on("$stateChangeError",function(){}),b.$on("$viewContentLoading",function(){})}])}).call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.controller("mg.MainCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.controller("mg.CVCtrl",["$scope","$http","mg.CVService",function(a,b,c){return a.cv=null,c.get().then(function(){return function(b){return a.cv=b.data,b}}(this))}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.factory("mg.CVMappings",["_","moment","$q","mg.CVModels","mg.TermeTechniqueService",function(a,b,c,d,e){var f,g,h,i,j,k;return k=function(a){return b(a,"YYYY-MM-DD")},j=function(b){var c,f;return f=[],b.termesTechniques&&(f=a(b.termesTechniques).map(function(a){var b;return b=new d.TermeTechnique(a),b.__categories=[],a.categories&&(b.__categories=a.categories),b}).valueOf()),c=[],b.categoriesTermeTechnique&&(c=a(b.categoriesTermeTechnique).map(function(b){var c;return c=new d.CategorieTermeTechnique(b),c.termes=a(f).filter(function(b){return a(b.__categories).contains(c.id)?(b.categories.push(c),!0):!1}).valueOf(),c}).valueOf()),a(f).forEach(function(a){return delete a.__categories}),e.setTermesTechniques(f),e.setCategoriesTermeTechnique(c)},h=function(b,c,f){return a.map(f,function(f){var g;return g=new d.Realisation(f),g.projet=c,g.termesTechniques=a.map(f.termesTechniques,function(a){return e.findTermesTechniquesById(b,a)}),g})},g=function(b,c){return a.map(c,function(c){var f;return f=new d.Projet(c),f.termesTechniques=a.map(c.termesTechniques,function(a){return e.findTermesTechniquesById(b,a)}),f.realisations=h(b,f,c.realisations),f})},f=function(b,c){return a.map(c,function(a){var c;return a.debut=k(a.debut),a.fin=k(a.fin),c=new d.ExperienceProfessionnelle(a),c.projets=g(b,a.projets),c})},i=function(b){var c;return c=a.cloneDeep(b),j(c),e.getTermesTechniques().then(function(b){var e,g,h;return c.informationsGenerales.naissance=k(c.informationsGenerales.naissance),g=a.map(c.formations,function(a){return a.debut=k(a.debut),a.fin=k(a.fin),a}),e=f(b,c.experiencesProfessionnelles),h=f(b,c.stagesEtProjetsFinEtude),new d.CV(c.titre,c.informationsGenerales,g,c.resume,c.domainesExpertises,e,h)})},{cvDeserializer:i}}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.factory("mg.TermeTechniqueService",["_","$http","$q",function(a,b,c){var d;return new(d=function(){function b(){this.qTermesTechniques=c.defer(),this.qCategoriesTermeTechnique=c.defer()}return b.prototype.getTermesTechniques=function(){return this.qTermesTechniques.promise},b.prototype.getCategoriesTermeTechnique=function(){return this.qCategoriesTermeTechnique.promise},b.prototype.setTermesTechniques=function(a){return this.qTermesTechniques.resolve(a)},b.prototype.setCategoriesTermeTechnique=function(a){return this.qCategoriesTermeTechnique.resolve(a)},b.prototype.findTermesTechniquesById=function(b,c){return a.find(b,function(a){return a.id===c})},b.prototype.findCategoriesTermeTechniqueById=function(b,c){return a.find(b,function(a){return a.id===c})},b}())}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.factory("mg.CVService",["_","$http","$q","mg.CVMappings",function(a,b,c,d){var e;return new(e=function(){function a(){this.cachedCVResponse=null}return a.prototype.get=function(){var a;return this.cachedCVResponse?c.when(this.cachedCVResponse):(a=c.defer(),b.get("/resources/cv.json").then(function(b){return function(c){return d.cvDeserializer(c.data).then(function(d){return c.data=d,b.cachedCVResponse=c,a.resolve(c)})}}(this)),a.promise)},a}())}])}.call(this),function(){"use strict";var a,b=function(a,b){return function(){return a.apply(b,arguments)}};a=angular.module("mgApp"),a.factory("mg.CVModels",["_","mg.options",function(a,c){var d,e,f,g,h,i,j;return j=function(b){var d,e,f,g;return g=function(b){return{id:b.id,libelle:a.clone(b.libelle)}},d=b(),f={},a.forEach(d,function(b){return a.forEach(b.categories,function(c){return f[c.id]?f[c.id].termes.push(g(b)):f[c.id]={id:c.id,imprimer:c.imprimer,libelle:a.clone(c.libelle),termes:[g(b)]}})}),e=a.values(f),c.pourImpression?a.filter(e,function(a){return a.imprimer}):e},d=function(){function a(a,b,c,d,e,f,g){this.titre=a,this.informationsGenerales=b,this.formations=c,this.resume=d,this.domainesExpertises=e,this.experiencesProfessionnelles=f,this.stagesEtProjetsFinEtude=g}return a}(),f=function(){function a(a){this.debut=a.debut,this.fin=a.fin,this.entreprise=a.entreprise,this.statut=a.statut,this.projets=[]}return a}(),g=function(){function c(a){this.id=a.id,this.nom=a.nom,this.client=a.client,this.descriptionCourte=a.descriptionCourte,this.description=a.description,this.getRootPlusAllDescendentTermesTechniques=b(this.getRootPlusAllDescendentTermesTechniques,this),this.termesTechniques=[],this.realisations=[],this.cachedRootPlusAllDescendentTermesTechniques=null,this.cachedGetTroncCommunRefCategoriesTermesTechniques=null,this.cachedGetAllRefCategoriesTermesTechniques=null}return c.prototype.getRootPlusAllDescendentTermesTechniques=function(){var b;return this.cachedRootPlusAllDescendentTermesTechniques?this.cachedRootPlusAllDescendentTermesTechniques:(this.cachedRootPlusAllDescendentTermesTechniques=[],b={},a.forEach(this.termesTechniques,function(){return function(a){return b[a.id]=a}}(this)),a.forEach(this.realisations,function(){return function(c){return a.forEach(c.termesTechniques,function(a){return b[a.id]=a})}}(this)),this.cachedRootPlusAllDescendentTermesTechniques=a.values(b))},c.prototype.getAllRefCategoriesTermesTechniques=function(){return this.cachedGetAllRefCategoriesTermesTechniques?this.cachedGetAllRefCategoriesTermesTechniques:this.cachedGetAllRefCategoriesTermesTechniques=j(this.getRootPlusAllDescendentTermesTechniques)},c.prototype.getTroncCommunRefCategoriesTermesTechniques=function(){return this.cachedGetTroncCommunRefCategoriesTermesTechniques?this.cachedGetTroncCommunRefCategoriesTermesTechniques:this.cachedGetTroncCommunRefCategoriesTermesTechniques=j(function(a){return function(){return a.termesTechniques}}(this))},c}(),h=function(){function a(a){this.titre=a.titre,this.description=a.description,this.projet=null,this.termesTechniques=[],this.getAllRefCategoriesTermesTechniques=null}return a.prototype.getRefCategoriesTermesTechniques=function(){return this.getAllRefCategoriesTermesTechniques?this.getAllRefCategoriesTermesTechniques:this.getAllRefCategoriesTermesTechniques=j(function(a){return function(){return a.termesTechniques}}(this))},a}(),e=function(){function a(a){this.id=a.id,this.libelle=a.libelle,this.imprimer=a.imprimer,this.termes=[]}return a}(),i=function(){function a(a){this.id=a.id,this.libelle=a.libelle,this.categories=[]}return a}(),{CV:d,ExperienceProfessionnelle:f,Projet:g,Realisation:h,TermeTechnique:i,CategorieTermeTechnique:e}}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.directive("cvComponent",["mg.CVService","mg.options",function(a,b){return{restrict:"E",scope:{cv:"="},link:function(a){return a.options=b,a.hasProjectToDisplay=function(){return console.log("toto"),!1},a.formationFilter=function(a){return b.pourImpression?!_.contains(b.pourImpressionOptions.formationsToExclude,a.id):!0},a.xpFilter=function(a){var c,d;return b.pourImpression?(d=_.map(a.projets,function(a){return a.id}),c=_.difference(d,b.pourImpressionOptions.projetsToExclude),c.length>0):!0}},template:'<div ng-hide="cv" id="chargement">\nChargement du cv.\n</div>\n<div id="cv" ng-show="cv" ng-class="{impression : options.pourImpression}">\n  <div class="row">\n    <div class="col-lg-7 col-md-7">\n      <div class="row">\n        <div class="col-lg-4 col-md-4">\n          <informations-generales-component informations-generales="cv.informationsGenerales"></informations-generales-component>\n        </div>\n        <div ng-hide="options.pourImpression" class="col-lg-8 col-md-8">\n          <h2 class="titre" ng-bind-html="::cv.titre | trustedTrad"></h2>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-lg-7 col-md-7">\n      <h1 class="title">Résumé</h1>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-lg-7 col-md-7">\n      <p class="description resume" ng-bind-html="cv.resume | trustedTrad"></p>\n    </div>\n  </div><div class="row">\n    <div class="col-lg-7 col-md-7">\n      <h1 class="title">Domaines d\'Expertises</h1>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-lg-7 col-md-7">\n      <p class="description expertises" ng-bind-html="cv.domainesExpertises | trustedTrad"></p>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-lg-7 col-md-7">\n      <h1 class="title">Expériences Professionnelles</h1>\n    </div>\n  </div>\n  <div ng-repeat="e in ::cv.experiencesProfessionnelles | filter:xpFilter">\n    <experience-professionnelle-component experience-Professionnelle="e"></experience-professionnelle-component>\n  </div>\n  <div ng-hide="options.pourImpression" class="row">\n    <div class="col-lg-7 col-md-7">\n      <h1 class="title">Stages et Projets de Fin d\'Étude</h1>\n    </div>\n  </div>\n  <div ng-hide="options.pourImpression" ng-repeat="e in ::cv.stagesEtProjetsFinEtude">\n    <experience-professionnelle-component experience-Professionnelle="e"></experience-professionnelle-component>\n  </div>\n  <div class="row">\n    <div class="col-lg-7 col-md-7">\n      <h1 class="title">Formations</h1>\n    </div>\n  </div>\n  <div ng-repeat="f in ::cv.formations | filter:formationFilter">\n    <formation-component formation="f"></formation-component>\n  </div>\n</div>'}}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.directive("experienceProfessionnelleComponent",["mg.CVService","mg.options",function(a,b){return{restrict:"E",scope:{experienceProfessionnelle:"="},link:function(a){return a.projetFilter=function(a){return b.pourImpression?!_.contains(b.pourImpressionOptions.projetsToExclude,a.id):!0}},template:'<div>\n  <div class="row">\n    <div class="col-lg-7 col-md-7">\n        <p class="periode"><span class=\'fa fa-calendar\'/> {{::experienceProfessionnelle.debut | mformat:\'MMMM YYYY\'}} - {{::experienceProfessionnelle.fin | mformat:\'MMMM YYYY\'}}</p>\n        <p class="entreprise" ng-show="experienceProfessionnelle.entreprise" ng-bind-html="::experienceProfessionnelle.entreprise | trustedTrad"></p>\n        <p class="statut" ng-show="experienceProfessionnelle.statut" ng-bind-html="::experienceProfessionnelle.statut | trustedTrad"></p>\n    </div>\n  </div>\n  <div ng-repeat="p in ::experienceProfessionnelle.projets | filter:projetFilter">\n    <projet-component projet="p"></projet-component>\n\n  </div>\n</div>'}}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.directive("projetComponent",["mg.CVService","mg.options",function(a,b){return{restrict:"E",scope:{projet:"="},link:function(a){return a.showRealisations=!1,a.options=b,a.showDescriptionCourte=function(){return b.pourImpression&&a.projet.descriptionCourte},a.mustHideRealisations=function(){var c;return b.pourImpression||0===(null!=(c=a.projet.realisations)?c.length:void 0)}},template:'<div>\n  <div class="row">\n    <div class="col-lg-7 col-md-7">\n      <h2 class="subtitle" ng-bind-html="::projet.nom | trustedTrad"></h2>&nbsp;&nbsp;&nbsp;&nbsp;\n      <p class="client" ng-show="projet.client" ng-bind-html="::projet.client | trustedTrad"></p>\n      <p class="description">\n        <span ng-show="showDescriptionCourte()" ng-bind-html="::projet.descriptionCourte | trustedTrad"></span>\n        <span ng-show="!showDescriptionCourte()" ng-bind-html="::projet.description | trustedTrad"></span>\n      </p>\n      <div ng-hide="showRealisations" class="row animate-slide all-ref-cat-row">\n        <div ng-show="options.pourImpression" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n          <p  class="ref-categories-pour-impression">\n            <strong>—</strong>&nbsp;&nbsp;\n            <ref-categorie-termes-techniques-pour-impression-component\n                ng-repeat="refCat in ::projet.getAllRefCategoriesTermesTechniques()"\n                ref-categorie-termes-techniques="refCat">\n            </ref-categorie-termes-techniques-pour-impression--component>\n          </p>\n        </div>\n        <div ng-hide="options.pourImpression" class="col-lg-8 col-md-8 col-sm-8 col-xs-8">\n          <p  class="ref-categories">\n            <ref-categorie-termes-techniques-component\n                ng-repeat="refCat in ::projet.getAllRefCategoriesTermesTechniques()"\n                ref-categorie-termes-techniques="refCat">\n            </ref-categorie-termes-techniques-component>\n          </p>\n        </div>\n        <div ng-hide="mustHideRealisations()" class="col-lg-4 col-md-4 col-sm-4 col-xs-4">\n          <button type="button" class="btn btn-default afficher-details-btn" ng-click="showRealisations = true" title="Afficher le détail des réalisations"><span class="fa fa-chevron-down" ></span><span class="afficher-details"> Détail des réalisations</span></button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div ng-hide="!showRealisations" class="animate-slide">\n    <h3 class="subsubtitle"><button ng-show="showRealisations" type="button" class="btn btn-default masquer-details" ng-click="showRealisations = false"><span class="fa fa-chevron-up" title="Masquer le détail des réalisations"></span></button><span class="realisations">Réalisations:</span></h3>\n\n    <div class="row">\n      <div ng-show="projet.getTroncCommunRefCategoriesTermesTechniques().length > 0" class="col-lg-5 col-lg-offset-7 col-md-5 col-md-offset-7">\n        <p class="ref-categories">\n          <span class="tronc-commun"><strong>Tronc commun</strong></span>\n          <ref-categorie-termes-techniques-component\n              ng-repeat="refCat in ::projet.getTroncCommunRefCategoriesTermesTechniques()"\n              ref-categorie-termes-techniques="refCat">\n          </ref-categorie-termes-techniques-component>\n        </p>\n      </div>\n    </div>\n\n    <div ng-repeat="r in ::projet.realisations">\n      <realisation-component realisation="r"></realisation-component>\n    </div>\n  </div>\n\n\n\n</div>'}}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.directive("formationComponent",["mg.CVService","mg.options",function(a,b){return{restrict:"E",scope:{formation:"="},link:function(a){return a.options=b},template:'<div class="row">\n  <div class="col-lg-7 col-md-7">\n    <p class="periode"><span class=\'fa fa-calendar\'/> {{::formation.debut | mformat:\'MMMM YYYY\'}} - {{::formation.fin | mformat:\'MMMM YYYY\'}}</p>\n    <h2 class="subtitle" ng-bind-html="::formation.cursus | trustedTrad"></h2>\n    <p ng-hide="options.pourImpression" class="description" ng-bind-html="::formation.description | trustedTrad"></p>\n    <p class="mention" ng-bind-html="::formation.diplome | trustedTrad"></p>\n  </div>\n\n</div>'}}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.directive("informationsGeneralesComponent",["moment","mg.CVService","mg.options",function(a,b,c){return{restrict:"E",scope:{informationsGenerales:"="},link:function(b){return b.options=c,b.age=function(){return b.informationsGenerales?a().diff(b.informationsGenerales.naissance,"years")+"ans":""}},template:'<p class="informations-generales" ng-if="!options.anonyme">\n    <span class="nom-prenom">{{::informationsGenerales.prenom}} {{::informationsGenerales.nom}}</span><br />\n    <span class="nom-prenom" ng-show="options.pourImpression">Ingénieur Conseil en Systèmes et Logiciels Informatiques</span><br ng-show="options.pourImpression"/>\n    <span>{{age()}} </span><br />\n    <span>{{informationsGenerales.adresse | trustedTrad}} </span><br />\n    <span>{{informationsGenerales.codePostal | trustedTrad}} {{informationsGenerales.ville | trustedTrad}} </span><br />\n    <span>{{informationsGenerales.telephones.mobile | trustedTrad}} </span><br />\n    <span>{{informationsGenerales.email | trustedTrad}} </span><br />\n    <span ng-show="options.pourImpression">{{informationsGenerales.siteWeb | trustedTrad}} </span><br ng-show="options.pourImpression"/>\n    <span ng-repeat="a in ::informationsGenerales.autres" >{{a | trustedTrad}}</span>\n</p>\n<p class="informations-generales" ng-if="options.anonyme">\n    <span class="nom-prenom" ng-show="options.pourImpression">Ingénieur Conseil en Systèmes et Logiciels Informatiques</span><br ng-show="options.pourImpression"/>\n</p>'}}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.directive("realisationComponent",["mg.CVService",function(){return{restrict:"E",scope:{realisation:"="},link:function(){},template:'<div class="row">\n  <div class="col-lg-7 col-md-7">\n\n    <div class="realisation">\n      <h4 class="realisation-titre" ng-show="realisation.titre" ng-bind-html="::realisation.titre | trustedTrad">\n      </h4>\n      <p class="realisation-description" ng-bind-html="::realisation.description | trustedTrad">\n      </p>\n    </div>\n  </div>\n  <div class="col-lg-5 col-md-5">\n    <p class="ref-categories-realisation" >\n      <ref-categorie-termes-techniques-component\n          ng-repeat="refCat in ::realisation.getRefCategoriesTermesTechniques()"\n          ref-categorie-termes-techniques="refCat">\n      </ref-categorie-termes-techniques-component>\n    </p>\n  </div>\n</div>'}}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.directive("refCategorieTermesTechniquesComponent",["mg.CVService",function(){return{restrict:"E",scope:{refCategorieTermesTechniques:"="},link:function(){},template:'<p class="ref-categorie">\n\n     <span class="titre-categorie">{{::refCategorieTermesTechniques.libelle | trustedTrad}}: </span><span ng-repeat="t in ::refCategorieTermesTechniques.termes">{{::t.libelle | trustedTrad}}{{$last ? \'.\' : \', \'}} </span>\n\n\n\n</p>'}}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.directive("refCategorieTermesTechniquesPourImpressionComponent",["mg.CVService",function(){return{restrict:"E",scope:{refCategorieTermesTechniques:"="},link:function(){},template:"<span class=\"titre-categorie\">{{::refCategorieTermesTechniques.libelle | trustedTrad}}: </span><span ng-repeat=\"t in ::refCategorieTermesTechniques.termes\">{{::t.libelle | trustedTrad}}{{$last ? '.' : ', '}}</span>&nbsp;&nbsp;<strong>—</strong>&nbsp;&nbsp;"}}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.filter("trad",["_","mg.CVService",function(a){return function(b){return b?a.isObject(b)?b.fr:a.isString(b)?b:b:""}}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.filter("mformat",["_","mg.CVService",function(){return function(a,b){return a?a.format(b?b:"LL"):void 0}}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.filter("th",["_","$sce","mg.CVService",function(a,b){return function(a){return a?b.trustAsHtml(a):""}}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.filter("trustedTrad",["_","mg.CVService","tradFilter","thFilter",function(a,b,c,d){return a.compose(d,c)}])}.call(this),function(){"use strict";var a;a=angular.module("mgApp"),a.animation(".animate-slide",["mg.CVService",function(){return{enter:function(){},leave:function(){},move:function(){},beforeAddClass:function(a,b,c){"ng-hide"===b&&(a.fadeOut({queue:!1,duration:400}),a.slideUp(400,function(){return c()}))},addClass:function(a,b,c){"ng-hide"===b&&c()},beforeRemoveClass:function(a,b,c){"ng-hide"===b&&(a.hide(),c())},removeClass:function(a,b,c){"ng-hide"===b&&(a.fadeIn({queue:!1,duration:400}),a.slideDown(400,function(){return c()}))}}}])}.call(this),function(a){"function"==typeof define&&define.amd?define(["moment"],a):"object"==typeof exports?module.exports=a(require("../moment")):a(window.moment)}(function(a){return a.lang("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(a){return a+(1===a?"er":"")},week:{dow:1,doy:4}})});