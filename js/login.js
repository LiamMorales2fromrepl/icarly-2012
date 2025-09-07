
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

// login.js
// added login.onlogin() event -9/2/09 -GV
// fixed enter bug in safari -8/25/09 & 3/16/10 -GV 


if (!window['login']) 
     window['login'] = {}

// The login object manages all data and functions for logging in.

login = { 
  name: 'login',
  id: 'login_modal',
  server: 'https://web.archive.org/web/20130126033449/http://users.icarly.com',
  site_ref: '#site_id',
  button_path: '#loginbutton',
  cookie_name: 'username',
  server_error: '** Oops - sorry we can\'t log you in right now.',
  submit_error: '* check name and password', 
  error1: '1. Check username: must be 3-10 characters, no spaces.\n',
  error2: '2. Check password: must be 3-10 characters, no spaces.\n',
  day_limit: null,
  delay_time: 3000,
  wait_for_response_time: 5000,
  hide_speed: 'fast',
  findpassword_ref: '.findpassword',
  prompt_ref: 'p.forget',
  findpassword_html1: "Enter your username then click <a href='javascript:login.findpassword()'>here</a>",
  findpassword_html2: "Unknown username: please try again then click <a href='javascript:login.findpassword()'>here</a>",
  findpassword_html3: "Answer the question then click <a href='javascript:login.findpassword()'>here</a>", 
  findpassword_html4: "Invalid user name. <a href='javascript:login.findpassword()'>Try again</a>",
  findpassword_html5: "Wrong answer. Forget your <a href='javascript:login.findpassword()'>password?</a>",
  username_ref: 'div#your_name',
  user_praise: 'rocks!'
}

login.show = function() {
  if (!login.form) {
    // if form reference doesn't exist, initialize form
    login.form = document[login.name]
    login.form.reset()
    login.setInstantValidation()
    // select first input, autoselect text when changing focus
    $('#'+login.id + ' input').attr('onFocus', 'this.select()')
    $('#'+login.id + ' input:first').focus().select()
    // hide validation messages
    $('#'+login.id + ' .msg').hide()
  }
  $('#'+login.id).fadeIn()
  $('#' + login.id + ' ' + login.findpassword_ref).hide()
  //prevent pressing enter from submitting form in Safari
  login.form.onsubmit = function() {
    return false;
  }
}
login.hide = function() {
  $('#'+login.id).hide(login.hide_speed)
  login.form.password.value = ''
}  

login.logout = function() {
  delete_cookie(login.cookie_name);
  login.user = null;
  login.button.removeClass('logout');
  $(login.username_ref).hide(login.hide_speed);
}

login.show_user = function() {
  var user = get_cookie(login.cookie_name)
  if (user) {
    $(login.username_ref).html('<p class="name">'+user+'</p>' +
    '<p>'+login.user_praise+'</p>').fadeIn('slow')
    login.user = user;
    login.button.addClass('logout');
  }
}

login.submit = function () {
  // if the form validates use jquery.getJSON to submit form with GET request 
  login.response_flag = false
  if (!login.form) login.form = document[login.name]
  if (login.validate()) {
    var site_id = parseInt($(login.site_ref).text()) || -1
    login.user = login.form.username.value
    var pword = login.form.password.value
    var uri = login.server + '/login/' + site_id + '/' + login.user + '/' + pword
    //alert(login.formToStr(login.id))
    login.request = $.getJSON(uri + '?callback=?' + 
    login.formToStr(login.id), function (data, textStatus) {
      //return false
      login.response_flag = true
      if (typeof data === 'object') {
        if (data.error) {
          //alert(login.submit_error)
          $('#' + login.id + ' .msg').eq(0).text(login.submit_error).show()
          $('#' + login.id + ' .msg').eq(1).show()
          login.form.username.focus()
          // remove submit error message after a few seconds
          setTimeout("$('#'+login.id + ' .msg').eq(0).text('*')", login.delay_time)
        } else {
          //alert('You have successfully logged in!')
          login.success()
        }
      }
    })   
    // alert user if there is no response
    setTimeout(" if (!login.response_flag) login.show_server_error()", login.wait_for_response_time)
  }
}
login.success = function() {
  set_cookie(login.cookie_name, login.user, login.day_limit, '/');
  login.show_user();
  login.hide();
  login.form.reset();
  if (typeof login.onlogin === 'function') {
    login.onlogin();
  }
}
login.show_server_error = function() {
  $('#' + login.id + ' .msg').eq(0).text(login.server_error).show()
  // remove submit error message after a few seconds
  setTimeout("$('#'+login.id + ' .msg').eq(0).text('*')", login.wait_for_response_time*3)
}

login.setInstantValidation = function() {
    // set validation for username
    login.form.username.onkeypress = function() {
      (validation.login(login.form.username.value)) ?
      $('#'+login.id + ' .msg').eq(0).hide(): 
      $('#'+login.id + ' .msg').eq(0).show()
    }
    // set validation for password
    login.form.password.onkeypress = function() {
      (validation.login(login.form.password.value)) ?
      $('#'+login.id + ' .msg').eq(1).hide(): 
      $('#'+login.id + ' .msg').eq(1).show()
    }
    
    // set onkeyup events to match onkeypress events
    login.form.username.onkeyup = login.form.username.onkeypress
    login.form.password.onkeyup = login.form.password.onkeypress
}

login.formToStr = function(parent_id) {
  // put all information in a form into a string for easy submittion
  parent_id = parent_id || 'content'
  var inputs = $('#' + parent_id + ' input')
  var str = ''
  for (var i=0; i<inputs.length-1; i++) {
    var input_type = inputs[i].type
    if (input_type === 'text') {
      var val = escape(inputs[i].value)
      str += '&' + inputs[i].name + '=' + val
    }
  }
  //alert(str)
  return str
}

// make validation object a collection of functions for validating forms
if (!window['validation']) window['validation'] = {} 

validation.string = function(arg) {
  return ((typeof(arg) === 'string') && (arg.length > 0)) 
}
validation.login = function(arg) {
  var MAX_LENGTH = 10
  var MIN_LENGTH = 3
  return ((validation.string(arg)) && 
    (arg.length >= MIN_LENGTH) && 
    (arg.length <= MAX_LENGTH) &&    
    (arg.indexOf(' ') === -1))
}

// validate the entire form before submitting
login.validate = function() {
  var msg = ''
  // return if username & password are valid, alert if anything is wrong
  if (!validation.login(login.form.username.value)) {
    msg += login.error1
    $('#'+login.id + ' .msg').eq(0).show()
  }
  if (!validation.login(login.form.password.value)) {
    msg += login.error2
    $('#'+login.id + ' .msg').eq(1).show()
  }
  if (msg.length > 0) {
    // show validation errors
    alert(msg)
    return false 
  } else {
    return true
  }
}

login.findpassword = function() {
  // talk to server to get question and answer to verify user
  var question_div = $('#' + login.id + ' ' + login.findpassword_ref)
  var password_prompt =  $('#' + login.id + ' ' + login.prompt_ref)
  var question_label = $('#' + login.id + ' ' + login.findpassword_ref + ' label')
  var site_id = parseInt($(login.site_ref).text()) || -1  
  if (!login.findpassword.flag1) {
    // prompt for username
    password_prompt.html(login.findpassword_html1).show()
    login.findpassword.flag1 = true  
  } else if (!login.findpassword.flag2) {
    // check username, show question if username exists
    login.user = login.form.username.value.toLowerCase() 
    if (!validation.login(login.user)) {
      password_prompt.html(login.findpassword_html4)
      $('#'+login.id + ' .msg').eq(0).show()
    } else {
      var uri = login.server + '/forgot_question/'+site_id+'/'+login.user+'?callback=?'
      //alert('get json url: ' + uri)
      $.getJSON(uri, function(data, textStatus) {    
        if ((typeof data === 'object') && (data.question)) {
          //alert('question : ' + data.question)
          login.question = data.question
          question_label.text(login.question)
          password_prompt.html(login.findpassword_html3)
          question_div.slideDown('fast')
          login.findpassword.flag2 = true 
        } else if (typeof data === 'object') {
          password_prompt.html(login.findpassword_html2)
        }
        
      })         
    }     
  } else {
    // check answer, show password if answer correct
    login.answer = login.form.findpassword.value.toLowerCase()

    if (!validation.string(login.answer)) { 
      password_prompt.html(login.findpassword_html5)
      //alert('invalid answer')
    } else {
      var uri = login.server + '/forgot_answer/'+site_id+'/'+login.user+'/'+login.answer+'?callback=?'
      //alert('get json url: ' + uri)
      $.getJSON(uri, function(data, textStatus) {    
        if ((typeof data === 'object') && (data.password)) {
          //alert('password : ' + data.password)
          login.password = data.password
          question_label.text('your password').css('line-height', '21px')
          login.form.findpassword.value = data.password
          password_prompt.html('')
        } else if (typeof data === 'object') {
          login.findpassword.flag2 = login.findpassword.flag1 = false
          password_prompt.html(login.findpassword_html5)
          question_div.hide()
          //alert('an error occured') 
        }        
      }) 
    }     
  }
}

$(function() {
  // fixes pressing enter in safari bug once and for all.
  if (document['login']) {
     document['login'].onsubmit = function() {return false};
  }
  login.button = $(login.button_path);
  login.button.find('a').click(function() {
     if (!login.user) {
         login.show();
     } else {
         login.logout();  
     }
     return false;
  });
  
})

}
