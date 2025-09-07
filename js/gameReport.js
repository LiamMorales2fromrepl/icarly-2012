
var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function trackKidsGamePlay(urlAlias){
    var site = "icarly";
    var ro={};
    com.mtvi.reporting.Account.name = "viakidsgameplay";
    ro.name = com.mtvi.reporting.Account.name;
    ro.dynamicAccountSelection = false;
    ro.dynamicAccountList = "nickviadev=nick-d.mtvi.com,nick-q.mtvi.com";
    ro.linkInternalFilters = "javascript:,nick.com";
    ro.trackExternalLinks = true;
    ro.trackDownloadLinks = true;
    dispatcher.setAccountVars(ro);
    dispatcher.setAttribute("channel",site);
    dispatcher.setAttribute("hier1",site+"/"+urlAlias);
    dispatcher.setAttribute("hier2","");
    dispatcher.setAttribute("prop1",site+"/"+urlAlias);
    dispatcher.setAttribute("prop2",urlAlias);
    dispatcher.setAttribute("prop3",site);				
    dispatcher.sendCall();
    resetParamsToDefault();
}


}
