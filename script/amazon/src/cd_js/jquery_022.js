!function(e){jQuery.fn.unobtrusivefocus=function(n){var o=jQuery.extend({toFocus:"",enabled:!0},n);return this.each(function(){var n=window.bowser._detect("undefined"!=typeof navigator?navigator.userAgent:"");!n.ios&&(o.enabled||"undefined"!=typeof enableUnobtrusiveFocus&&enableUnobtrusiveFocus)&&""!=o.toFocus&&e(o.toFocus).focus()})}}(jQuery,window.bowser),$.ccfregistry.pluginReady("unobtrusivefocus");