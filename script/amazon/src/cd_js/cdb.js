!function(){function e(){this._url="/cp/log/kpi"}function t(){}e.prototype.log=function(e,t){var n=JSON.stringify(t);(new Image).src=this._url+"?type="+encodeURIComponent(e)+"&url="+encodeURIComponent(document.location.href)+"&user_agent="+encodeURIComponent(navigator.userAgent)+"&value="+encodeURIComponent(n)},t._getData=function(){if(window.performance){for(var e=window.performance,t=e.timing,n=this.getPerformanceObjectKeys(t),r={},o=(t.navigationStart||0,0),a=n.length;a>o;o++){var i=t[n[o]];i&&(r[n[o]]={time:i})}return r}},t.measureClientPerformance=function(){var e=this._getData();if(e){for(var t={},n=(e.navigationStart||0,0),r=this.eventsOrder.length;r>n;n++){var o=this.eventsOrder[n];if(e.hasOwnProperty(o)){var a,i=(e[o],o.indexOf("Start")),d=i>1,c=!1;if(d){var s=o.substr(0,i);c=this.eventsOrder.indexOf(s+"End")>-1&&e.hasOwnProperty(s+"End"),c&&(a=s)}d&&c&&(t[a]=e[a+"End"].time-e[a+"Start"].time),t[o]=e[o].time>0?e[o].time-e[this.eventsOrder[0]].time:0}}return t}},t.getPerformanceObjectKeys=function(e){var t=Object.keys(e);return t.length?t:Object.keys(Object.getPrototypeOf(e))},t.eventsOrder=["navigationStart","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","secureConnectionStart","connectEnd","requestStart","responseStart","responseEnd","unloadEventStart","unloadEventEnd","domLoading","domInteractive","msFirstPaint","domContentLoadedEventStart","domContentLoadedEventEnd","domContentLoaded","domComplete","loadEventStart","loadEventEnd"];var n=t.measureClientPerformance();n&&(new e).log("ClientPerformance",n),window.cdb=window.cdb||{},window.cdb.kpi=window.cdb.kpi||{},window.cdb.kpi.KPILogger=e,window.cdb.kpi.PerformanceProfiler=t}();