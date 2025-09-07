
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

$(document).ready(function(){
  
  $(document).trigger('change_header_photo');

  if ( ($('#searchdiv').length > 0) && $.jqm) {
      $('#searchdiv').jqm({modal:true, overlay: 50});
      $('#searchdiv').jqmAddClose('#searchdiv');
  }
  if ($('#search-cont').length > 0) {        
      setUpSearchHandler();
  }      
  if($('.slideshow').length > 0) {
      if(typeof(gallery) != 'undefined'){
          gallery.init();
      }
  }
  if ($('ul#snaps_slideshow li.current img').length > 0) {
      if(typeof(gallery) != 'undefined'){
          gallery.vertCenter( $('ul#snaps_slideshow li.current > img') );
      }
  }
  if ($('#snaps_archives').length > 0)
    photoArchivesInit()

  if ($('#logo').length > 0) {
      var url = "/index.html";  // must keep in var named "url" like this for URL-munging code
      // Compare to "/index.html", "/", and ""
      if (url != window.location.pathname &&
          url.substring(0, url.length - 10) != window.location.pathname &&
          url.substring(0, url.length - 11) != window.location.pathname)
          $('#logo').addClass('not-home');
  }
  if ($('#videos').length > 0){
      setUpVideo();
      setupiVideoRatings();
  }
  
  // home poll code
  if($('#home_poll_wrapper_top').length > 0){
      setupPoll();
  }
  // blog archives
  if (($('#blog_archives').length > 0) && (typeof ALL_BLOGS != 'undefined'))
    setTimeout('if (typeof load_blogs_archive === "function") load_blogs_archive();', 500)
  // webshow ratings
  if($('#video-player-cont').length > 0)
    setupWebshowRatings();
  if( ($('#home_content_container').length > 0) && window.setupPopupForEmbed)
    setupPopupForEmbed();
  
  //flash sniffer
  if (window.flashUpdate) flashUpdate();
      
  // login / registration
  if (window.login) login.show_user();     
  if (window.reg) reg.init();
    
  // textus / ask a question
  if (window.feedback) feedback.init();    

  // ugc    
  if (window.sendmedia && sendmedia.init)
    sendmedia.init();
  if (window.uploadphotos && uploadphotos.init)
    uploadphotos.init();
  if (window.uploadvideos && uploadvideos.init)
    uploadvideos.init();
  if (window.approval && approval.init)
    approval.init();

  //change header photo when clicked
  $('#header_photo').click(function(){
      photo_clone = $(this).clone();
      $('#header').append(photo_clone);
      $(document).trigger('change_header_photo');
      photo_clone.fadeOut(function(){
          $(this).remove();
      });
  });
  
  // open report concern modal window
  $("a.report_concern").click(function(event){
      $('#icarly_modal').remove();
      $.get('/report-concern/', function(html){
          var content = $('#icarly_modal_template').text().replace('{{ content }}', html);
          $('body').append(content);
          $('#icarly_modal').hide().fadeIn();
      });        
      event.preventDefault(); return false;
  });
  $("#icarly_modal a.close").live('click', function(event){
      $('#icarly_modal').fadeOut(function(){
          $('#icarly_modal').remove();
      });
      event.preventDefault(); return false;
  });
  

  // open report concern modal window
  $("a.report_concern").click(function(event){
      $('#icarly_modal').remove();
      $.get('/report-concern/', function(html){
          var content = $('#icarly_modal_template').text().replace('{{ content }}', html);
          $('body').append(content);
          $('#icarly_modal').hide().fadeIn();
      });        
      event.preventDefault(); return false;
  });
  $("#icarly_modal a.close").live('click', function(event){
      $('#icarly_modal').fadeOut(function(){
          $('#icarly_modal').remove();
      });
      event.preventDefault(); return false;
  });    
  
  
  // If you want a page specific code to run on page load,
  // put it in a function named "on_page_ready"
  if (typeof on_page_ready === 'function') on_page_ready();
});
// Forward users to the mobile site, if the browser meets 2 of these requirements:
// 1. has native video suppport
// 2. self identifies as a phone or a mobile device
// 3. doesn't have flash
$.mobile_redirect = {
    path: '/m/',
    cookie: 'i_was_redirected_to_mobile',
    requirements: 2,
    mobile_tests: {
        says_mobile: function() {
            return navigator.userAgent.match(/mobile|phone/i);
        },
        native_video: function() {
            return typeof $('<video>')[0].play == 'function';
        },
        no_flash: function() {
            return parseInt(getFlashVersion(), 10) < 2;
        }
    },
    run_tests: function(options) {
        var results = [];
        $.extend(this, options || {}, true);
        $.each($.mobile_redirect.mobile_tests, function(name, condition) {
            if (condition()) {
                results.push(name);
            }
        });
        return $.mobile_redirect.results = results;
    },
    go: function (options) {
        if (this.run_tests(options || {}).length >= this.requirements) {
            if (!get_cookie(this.cookie)) {
                //for the foreseeable future, bail on Windows Phone.
                if (navigator.userAgent.match(/trident/i)) {
                    return false;
                }
                set_cookie(this.cookie, 1, null, '/');
                location.href = this.path;
            }
        }
    }
};
//try running right away, but also run when page is ready
try {
    $.mobile_redirect.go();
} catch (error) {};
$(function () { 
    try {
        $.mobile_redirect.go();
    } catch (error) {};
});


}
