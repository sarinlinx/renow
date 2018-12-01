$(document).ready(function() {
  $("#SubmitBtn").click(function() {
    $("#wasformsubmitted").val("YES");
  });
});

// get all data in contact form and return object
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
    //  console.log(item);//outputs form-submitted name email message
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

  // console.log(data);
  return data;
}

function handleFormSubmit(event) { // handles article form submit without any jquery
  event.preventDefault(); // we are submitting via xhr below
  var data = getFormData(); // get the values submitted in the form

  var namecheck = $("#namebox").val();
  var emailcheck = $("#emailbox").val();
  var messagecheck = $("#textbox").val();

  if (wasformsubmitted.value == "YES" && namecheck && emailcheck && messagecheck) { // if vistor clicked YES button show thank you message
    var url = event.target.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      //Face out form
      // document.getElementById('gform').style.display = 'none'; // hide form
      document.getElementById('gform').style.opacity = 0;
      document.getElementById('gform').style.WebkitTransition = 'opacity 1s';
      document.getElementById('gform').style.MozTransition = 'opacity 1s';

      //Fade out 'Contact us' text
      // document.getElementById('contact-us-text').style.display = 'none';
      document.getElementById('contact-us-text').style.opacity = 0;
      document.getElementById('contact-us-text').style.WebkitTransition = 'opacity 1s';
      document.getElementById('contact-us-text').style.MozTransition = 'opacity 1s';

      //Face out form text message
      // document.getElementById('form-text-message').style.display = 'none';
      document.getElementById('form-text-message').style.opacity = 0;
      document.getElementById('form-text-message').style.WebkitTransition = 'opacity 1s';
      document.getElementById('form-text-message').style.MozTransition = 'opacity 1s';

      //Face out Submit Button
      // document.getElementById('SubmitBtn').style.display = 'none';
      document.getElementById('SubmitBtn').style.opacity = 0;
      document.getElementById('SubmitBtn').style.WebkitTransition = 'opacity 1s';
      document.getElementById('SubmitBtn').style.MozTransition = 'opacity 1s';

      //Face in Thank you message
      // document.getElementById('thankyou_message').style.display = 'block';
      document.getElementById('thankyou_message').style.opacity = 1;
      document.getElementById('thankyou_message').style.WebkitTransition = 'opacity 5s';
      document.getElementById('thankyou_message').style.MozTransition = 'opacity 5s';

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
