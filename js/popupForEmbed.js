var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
/* popupForEmbed.js */

function EmbedPopupSetter(url){

    this.url = url;
    
    this._runpopup = function(url,opts,name){
        var name = name || '';
        // height,width,toolbar,location,menubar
        var optstr = null;
        for(var i in opts){
            (optstr) ?
                optstr += ',':
                optstr = '';
            optstr += i+'='+opts[i];
        }
        // alert(optstr);
        window.open(url,name,optstr);
      }
    
    this.popup = function(videoId)
    {
        var url = this.url; 
        url += '?id=' + videoId;
 
        var args = {
            'width':'450',
            'height':'420',
            'menubar':'no',
            'location':'hide',
            'toolbar':'no',
            'status':'no'
        }
    
        this._runpopup(url,args);
      
    }

    // popup funciton
    this.apply = function(linkRef,videoId,name){
        var name = name || '';

        var url = this.url; 
        url += '?id=' + videoId;

        var _runpopup = this._runpopup;

        linkRef.onclick = function(){
            
            var args = {
                'width':'450',
                'height':'366',
                'menubar':'no',
                'location':'hide',
                'toolbar':'no',
                'status':'no'
            }
    
            _runpopup(url,args,name);
            
            return false;
        }
    }
     
}
}

/*
     FILE ARCHIVED ON 17:44:25 Jan 15, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:00:59 Nov 22, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.431
  captures_list: 0.354
  exclusion.robots: 0.043
  exclusion.robots.policy: 0.035
  esindex: 0.007
  cdx.remote: 3.267
  LoadShardBlock: 111.269 (3)
  PetaboxLoader3.datanode: 130.732 (5)
  PetaboxLoader3.resolve: 106.396 (3)
  load_resource: 127.196 (2)
  revisit.resolve: 61.631
*/
