var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
    /* ratingSubmit.js 
     * copyright Juicyorange, LLC 2009
     * all rights reserved
     */
    
    RatingSubmit = function(args){

        this.submitURL = args.submitURL;
        
        this.submit = function(assetId,rating)
        {
            
            var url = this.submitURL;
            if(url == null || assetId == null || rating == null){
                return false;
            }
    
            url += '/rate/' + assetId + '/' + rating;
            url += '?callback=?';
            // testing code
            // alert('voting for asset: ' + assetId + ' with rating of: ' + rating + '\n' + 'submitting to:' + url);
            $.getJSON(url,function(msg,statusText){
               if(typeof msg == 'object' ){
                   this.submitStatus = true;
                   // testing code
                   // alert('submitted: ' + this.submitStatus + ' voting for asset: ' + assetId + ' with rating of: ' + rating );
               }
            });
        }
    }

    // var pollHost = '';    
    //local 
    // var pollHost = 'https://web.archive.org/web/20140123120551/http://crowsnest/JO/icarly-webdir/polls/test.ajax';
    // for-beta-haml_home.2009-06-19_13-53.haml:
    // var pollHost = 'https://web.archive.org/web/20140123120551/http://beta.polls.icarly.com';
    // for-production-haml_home.2009-06-17_13-26.haml:
    // submitURL : 'https://web.archive.org/web/20140123120551/http://polls.icarly.com'

    // var ratingSubmit = new RatingSubmit({submitURL:pollHost});
    
}

/*
     FILE ARCHIVED ON 12:05:51 Jan 23, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:32:10 Nov 22, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.478
  captures_list: 0.5
  exclusion.robots: 0.063
  exclusion.robots.policy: 0.052
  esindex: 0.008
  cdx.remote: 15.122
  LoadShardBlock: 105.843 (3)
  PetaboxLoader3.datanode: 90.732 (5)
  PetaboxLoader3.resolve: 102.344 (4)
  load_resource: 90.065 (2)
  revisit.resolve: 44.464
*/
