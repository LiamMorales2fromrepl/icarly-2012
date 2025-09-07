
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

mtvn.btg.Controller.init(); 
mtvn.btg.Controller.sendPageCall( { 
	pageName: 'icarly'+location.pathname, 
	channel: 'icarly', 
	prop4: prop4, 
	prop21: prop21, 
	hier1: 'icarly'+location.pathname,
	hier2: 'icarly'+location.pathname,
	eVar16: 'icarly'+location.pathname
	} );
mtvn.btg.Controller.init(); 
var zone = location.pathname;
if(zone.indexOf(".html")<0){
	if(zone.charAt(zone.length-1)!="/") zone+="/index.html";
	else zone+="index.html";
}
var arr = zone.split("/");
if(arr.length==2){
		if(arr[1]=="index.html")
			zone = "/_hp";
}else if(arr.length==3){
		if(arr[2]=="index.html")zone = "/"+arr[1]+"/_mn";
	}
function gamePlay(){
	mtvn.btg.config.ReportSettings.Omniture["pageName"] = 'icarly'+location.pathname+'-playAgain'; 
	mtvn.btg.Controller.init(); 
	mtvn.btg.Controller.sendPageCall(); 

    	}
/*
	urlAlias: unique page name/identifier
	contentType: game or PDF, or etc.  the content type of material the user is printing	
*/
function printReporting(site,urlAlias,contentType,showID,numberPages){
    try{
        var oldAcct = mtvn.btg.config.ReportSettings.Omniture.account;
        mtvn.btg.config.ReportSettings.Omniture.account = "viakfprint";
        mtvn.btg.Controller.init();
        mtvn.btg.Controller.sendPageCall({
            pageName: site+"-"+contentType+"-"+showID+"-"+urlAlias,
            channel: site,
            hier1: site+"/"+contentType+"/"+showID+"/"+urlAlias,
            hier2: site+"/"+contentType+"/"+showID+"/"+urlAlias,
            prop1: numberPages,
            prop2: site,
            prop3: contentType,
            prop4: showID,
            prop5: urlAlias
        });
        var _printPixel = "http://ad.doubleclick.net/ad/nick.nol/hp_printables;adid=230867644;sz=1x1;ord=123;";
        var DCPrint = document.createElement('img');
        DCPrint.setAttribute('src',_printPixel);
        mtvn.btg.config.ReportSettings.Omniture.account = oldAcct;
        mtvn.btg.Controller.init();
    }catch(e){}
}

// do printReporting for links with title 'print-reporting-1', replacing 1 with number of pages
$(function(){
    var prints = $('a[title^=print-reporting-]');
    prints.each(function(i){
        prints.eq(i).attr('data-title', prints.eq(i).attr('title') );
        prints.eq(i).removeAttr('title');
    });
    prints.click(function(event){
        r = {
            printReporting: true,
            site: 'iCarly',
            showID: 'ica',
            contentType: 'Printable Item',
            numberPages: Math.floor($(this).attr('data-title').split(/reporting-/)[1])
        }
        r.urlAlias = this.id? 
            this.id.replace(/_/g, '-'):
            $('h1').text().toLowerCase().replace(/ /g, '-');
        try{console.log(r)}catch(e){};
        printReporting(r.site, r.urlAlias, r.contentType, r.showID, r.numberPages);
    });
});

}
