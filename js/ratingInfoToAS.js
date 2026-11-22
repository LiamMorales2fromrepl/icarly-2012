var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
// accepts a csv string of video ids
// splits string by , into videIdsArr array
// grabs ratings for each video in videoIdsArr
// if not found uses 0
// concatenates videoIdsArr and ratings into ratingsCSV string
// formatted as id:rating,id:rating,id:rating...
// -> looks in ALLVIDEOS_AND_RATINGS object and
function ratingsToAS(idCSV){

    // testing         
    // alert(idCSV);

    var ids_arr = idCSV.split(',');

    var ratings_str = '';

    for(var i = 0 ; i < ids_arr.length ; i++)
    {
        if(POLLS_AND_RATINGS.ratings[ids_arr[i]] != undefined)
        {
            if(ratings_str != '')
            {
                ratings_str += ',';
            }
            ratings_str += ids_arr[i] + ':' + POLLS_AND_RATINGS.ratings[ids_arr[i]];
        }
    }

    // testing code
    // alert(ratings_str);
    return ratings_str;
};




function returnRatingsToAS(idCSV)
{
    // testing code
    // alert(ratingsToAS(idCSV));
    return ratingsToAS(idCSV);

}
}

/*
     FILE ARCHIVED ON 17:40:38 Jan 15, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:13:04 Nov 22, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.33
  captures_list: 0.454
  exclusion.robots: 0.06
  exclusion.robots.policy: 0.048
  esindex: 0.007
  cdx.remote: 4.038
  LoadShardBlock: 63.919 (3)
  PetaboxLoader3.datanode: 746.406 (5)
  PetaboxLoader3.resolve: 247.204 (3)
  load_resource: 933.951 (2)
  revisit.resolve: 733.949
*/
