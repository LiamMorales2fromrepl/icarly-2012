var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
//popSend.js

var popSend = {
  asset_url: '',
  asset_type: '',
  asset_caption: '',
  
  popWindow: {},
  url: '/sendtofriend.html',
  name: 'SendToFriend',
  args: {
    'width': '460',
    'height': '480',
    'menubar':'no',
    'location':'hide',
    'toolbar':'no',
    'status':'no'
  }
}

popSend.set = function(location, kind, caption) {
  this.asset_url = location || this.asset_url
  this.asset_type = kind || this.asset_type
  this.asset_caption = caption || this.asset_caption
  this.makeWindow()
  // delay writing data to window until window exists in IE/Windows
  setTimeout("popSend.setAssetData()", 400)
}

popSend.makeWindow = function() {
  var specs = concatObject(this.args, '=', ',')
  this.popWindow = window.open(this.url, this.name, specs)
  popSend.popWindow.focus()
}

popSend.setAssetData = function () {
  popSend.popWindow.focus()
  popSend.popWindow.asset_url = popSend.asset_url || 'https://web.archive.org/web/20140123120600/http://www.icarly/'
  popSend.popWindow.asset_type = popSend.asset_type || 'Test'
  popSend.popWindow.asset_caption = popSend.asset_caption  || 'No caption'
}

// Utils
function concatObject(obj, equals, splitter) {
  equals = equals || '='
  splitter = splitter || ','
  obj = obj || this
  var str = ''
  for (var id in obj) {
      str += id + equals + obj[id] + splitter
  }
  return str.substr(0, str.length-1)
}

// Public API
popSend.setVideo = function(vidId) {
  vidId = vidId || ((typeof(currVid)!='undefined') ? currVid.vid:false) || current_video || -1
  if (vidId == -1) {
    alert('Please select a video before sending it to a friend!')
    return
  }
  this.asset_type = 'Video'
  this.asset_url = '/iVideo/index.html#vid'+vidId
  if ((typeof(video_dictionary) != 'undefined') && video_dictionary[vidId]) {
    var vid_obj = video_dictionary[vidId]
    this.asset_caption = vid_obj.title
    if ((vid_obj.description) && (vid_obj.description.length > 0))
      this.asset_caption += ' - ' + vid_obj.description       
  }
  this.asset_id = vidId
  popSend.set()
}

popSend.setGame = function(gameId) {
  this.asset_type = 'Game'
  var loc = window.location.toString()
  gameId = gameId || loc.substr(loc.indexOf('game')+'game'.length).split('.')[0]
  this.asset_url = '/iPlay/' + location.toString().split('/iPlay/')[1]
  if ((typeof(ALL_GAMES) != 'undefined') && (ALL_GAMES[gameId])) {
    this.asset_caption = ALL_GAMES[gameId].caption
    if ((ALL_GAMES[gameId].description) && (ALL_GAMES[gameId].description.length > 0) &&
    (ALL_GAMES[gameId].caption != ALL_GAMES[gameId].description))
      this.asset_caption += '<br>' + ALL_GAMES[gameId].description
  } else
    this.asset_caption = ''
  this.asset_id = gameId
  popSend.set()
}

popSend.setTrivia = function(gameId) {
  this.asset_type = 'Trivia'
  var loc = window.location.toString()
  gameId = gameId || loc.substr(loc.indexOf('trivia-')+'trivia-'.length).split('.')[0]
  this.asset_url = '/iTrivia/' + location.toString().split('/iTrivia/')[1]
  if ((typeof(ALL_TRIVIA) != 'undefined') && (ALL_TRIVIA[gameId])) {
     
    this.asset_caption = ALL_TRIVIA[gameId].caption
    if ((ALL_TRIVIA[gameId].description) && (ALL_TRIVIA[gameId].description.length > 0) &&
    (ALL_TRIVIA[gameId].caption != ALL_TRIVIA[gameId].description)) {
      this.asset_caption += '<br>' + ALL_TRIVIA[gameId].description
    }
  } else {
    this.asset_caption = ''
  }
  this.asset_id = gameId
  popSend.set()
}
}

/*
     FILE ARCHIVED ON 12:06:00 Jan 23, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:29:30 Nov 22, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.28
  captures_list: 0.424
  exclusion.robots: 0.05
  exclusion.robots.policy: 0.041
  esindex: 0.007
  cdx.remote: 5.562
  LoadShardBlock: 118.149 (3)
  PetaboxLoader3.datanode: 100.499 (5)
  PetaboxLoader3.resolve: 98.065 (4)
  load_resource: 109.004 (2)
  revisit.resolve: 56.074
*/
