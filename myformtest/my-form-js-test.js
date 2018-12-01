$(document).ready(function() {

  // $('#namebox').attr('required', 'required');
  // $('#emailbox').attr('required', 'required');
  // $('#textbox').attr('required', 'required');
  //set form data and submit when YES button is clicked
  $("#SubmitBtn").click(function() {

    //Figure out how to make these fade out
    // $("#noBtn").hide();
    // $("#yesnovote").val("YES");
    $("#wasformsubmitted").val("YES");
    // var pageURL = $(location).attr("href");
    // $("#articleName").val(pageURL);


  });


  //set form data and open form textarea for comments
  /*$("#noBtn").click(function(){
  $("#feedback_question").hide();
  $("#yesSubmitBtn").hide();
  $("#noBtn").hide();
  $(".cust_comments").show(200);
  $("#yesnovote").val("NO");
  var pageURL = $(location).attr("href");
  $("#articleName").val(pageURL);
  $('#textbox').attr('required', 'required');
  });*/
});

// get all data in article contact form and return object
function getFormData() {
  var elements = document.getElementById("gform").elements; // all form elements
  var fields = Object.keys(elements).map(function(k) {
    if (elements[k].name !== undefined) {
      return elements[k].name;
      // special case for Edge's html collection
    } else if (elements[k].length > 0) {
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k) {
    data[k] = elements[k].value;
    if (elements[k].type === "checkbox") {
      data[k] = elements[k].checked;
      // special case for Edge's html collection
    } else if (elements[k].length) {
      for (var i = 0; i < elements[k].length; i++) {
        if (elements[k].item(i).checked) {
          data[k] = elements[k].item(i).value;
        }
      }
    }
  });
  return data;
}

function handleFormSubmit(event) { // handles article form submit withtout any jquery
  event.preventDefault(); // we are submitting via xhr below
  var data = getFormData(); // get the values submitted in the form

  var namecheck = $("#namebox").val();
  var emailcheck = $("#emailbox").val();
  var messagecheck = $("#textbox").val();


  //if (yesnovote.value == "YES") { // if vistor clicked YES button show thank you message
  if (wasformsubmitted.value == "YES" && namecheck && emailcheck && messagecheck) { // if vistor clicked YES button show thank you message
    // if (namecheck) { // if vistor clicked YES button show thank you message
    // $('#namebox').attr('required', 'required');

    var url = event.target.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      document.getElementById('gform').style.display = 'none'; // hide form
      document.getElementById('contact-us-text').style.display = 'none';
      document.getElementById('form-text-message').style.display = 'none';
      document.getElementById('SubmitBtn').style.display = 'none';
      document.getElementById('thankyou_message').style.display = 'block';
      return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
  }
}

function commentsloaded() {
  // bind to the submit event of our form
  var form = document.getElementById('gform');
  form.addEventListener("submit", handleFormSubmit, false);
};
document.addEventListener('DOMContentLoaded', commentsloaded, false);

//invoke function to submit comment form ajax
commentsloaded();
