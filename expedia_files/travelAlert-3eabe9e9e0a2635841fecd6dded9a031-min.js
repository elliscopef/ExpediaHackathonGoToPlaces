define("travelAlert",["sfAbTest"],function(c){var b=b||{},a=a||{};a.config={alert_url:"/pace/useralert?pageId\x3dhomepage",test_alert_url:"/pace/useralert?pageId\x3dhomepagetestalert",prepend_target:".hero-banner-inner",prepend_target_new:".travel-alert-wrapper"};b.init=function(){a.getAlert()};b.logCloseButton=function(){var a=$("#travelerAlert .btn-close");if(window.dctk)a.on("click",function(){dctk.onReady(function(){dctk.trackEvent({name:"Close Travel Alert",rfrr:"HP.TravelAlert"})})})};b.testAlert=function(){a.config.alert_url=a.config.test_alert_url;this.init()};a.getAlert=function(){var b=this;$.get(a.config.alert_url,function(a){var c="undefined"!==typeof a&&0<$(a).length?!0:!1;c&&b.renderContent(a)})};a.renderContent=function(b){"1"===siteid||"14"===siteid?c.get(14553,!0,function(c){1===c.value?$(a.config.prepend_target_new).prepend(b):$(a.config.prepend_target).prepend(b)}):$(a.config.prepend_target).prepend(b)};return b});var dependencies=["travelAlert","uitk_domReady"];require(dependencies,function(c,b){c.init()});
//# sourceMappingURL=travelAlert.js.map