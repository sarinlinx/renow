/*
 * jQuery v1.9.1 included
 */

/*
*Redirects added to fix Google search results
*/
  var oldIds = ["215612917",//FTP overview
                "215613157",//Where do I find FTP credentials
                "216107387",//SFTP
                "214878748",//DomReg pre-sale questions
                "215572407",//DreamPress common questions
                "215571767",//Billing FAQs
                "216139917",//How to re-trust an SSL certificate on a Mac
                "215035928",//Secure email options
                "215769408",//What are DreamHost's nameservers?
                "221993547",//El Capitan
                "215458038",//Viewing your access.log via SFTP
                "214898997",//What version of PHP is my site using?
                "214741498",//Subdomain overview
                "360020291531",//Adding a Comodo cert
                "215036368"];//What is Spam?
  var newIds = ["115000675027",//FTP overview and credentials
                "115000675027",//FTP overview and credentials
                "115000675027",//FTP overview and credentials
                "215864787",//Domain registration FAQs
                "214581728",//DreamPress FAQs
                "215907498",//General billing questions
                "215306748",//Certificate domain mismatch error when connecting to a DreamHost mail server
                "215612887",//Email client protocols and port numbers
                "216385467",//Nameservers overview
                "115002335172",//MacMail
                "216512197",//Viewing access and error logs via SFTP
                "214895287",//How do I view my PHP environment settings?
                "215457827",//How do I add a subdomain
                "215089748",//Adding professional SSL cert
                "214984738"];//Anti-spam overview

  for (var i = 0; i < oldIds.length; i++){
    if (window.location.href.indexOf(oldIds[i]) > -1) {
      window.location.href = 'https://dreamhosthelp.zendesk.com/hc/en-us/articles/' + newIds[i];
    }
  }

/*Zendesk JS code to redirect deleted articles*/
if ( window.location.href.indexOf('articles') > -1 && $(".not-found").length > 0 ) {
 window.location.href = 'https://dreamhosthelp.zendesk.com/hc/en-us/articles/216553068-error-redirect';
}

/*
 * Begin Zendesk Default Code
 */
$(document).ready(function() {



  /*__________________________
  BEGIN SPANISH TRANSLATIONS
  __________________________*/
/* BEGIN LANGUAGE TRANSLATION FOR HEADER DROPDOWN */
  var browserlocale = window.location.href;
  //remove forwards slashes so you can search text
  var noslashurl = browserlocale.replace(/\//g, '');
  console.log(noslashurl);

  //search for a locale string in the url
  //If English is being viewed, displayed English text
  if (noslashurl.indexOf("hcen-us") >= 0) {
    //Update language dropdown in header
    var x = document.getElementsByClassName("lang-displayed");
    x[0].innerHTML = "Change language";
  //If Spanish is being viewed, displayed Spanish text
  } else if (noslashurl.indexOf("hces") >= 0) {
    //Update language dropdown in header
    var x = document.getElementsByClassName("lang-displayed");
    x[0].innerHTML = "Cambiar idioma";
  } else {
  var x = document.getElementsByClassName("lang-displayed");
  x[0].innerHTML = "Change language";}
/* END LANGUAGE TRANSLATION FOR HEADER DROPDOWN */

/* BEGIN SPANISH HOMEPAGE NOTICE */
  /*Notice at top of Spanish homepage that says it is currently being built*/

  /* Create var to store Spanish homepage URL (without slashes) */
  var spanishhomepage = "https:help.dreamhost.comhces"
  /* Create support link text */
  var escontactsupport = "solicítelo aquí.";
  /* Create support link. This link will change when page is updated */
  var essupportlink = escontactsupport.link("https://docs.google.com/forms/d/e/1FAIpQLSeYBNau2BPV09Bom6WZ8G-ALnoojZFiAu7UFsZgVnUwcQyQ-Q/viewform");

  //If on Spanish homepage, display maintenance notice
  if (noslashurl === spanishhomepage) {
    document.getElementById("spanish-notice").style.display = "block";
    document.getElementById("spanish-notice").innerHTML = "Actualmente estamos "
    + "construyendo la base de conocimiento español. "
    + "Si no puede encontrar el artículo que necesita, " + essupportlink;
  }
/* END SPANISH HOMEPAGE NOTICE */
/* END SPANISH TRANSLATION features */
/*________________________
  END SPANISH TRANSLATIONS
  ________________________*/






  // toggle categories and sections on the home page

  $(".category-tree").on("click", "h2 a, h3 a", function() {
    $(this).parent().nextAll().toggle();
    return false;
  });

  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // toggle the share dropdown in communities
  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
  });

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $answerbodyTextarea = $(".answer-body textarea"),
      $answerFormControls = $(".answer-form-controls"),
      $commentContainerTextarea = $(".comment-container textarea"),
      $commentContainerFormControls = $(".comment-form-controls");

  $answerbodyTextarea.one("focus", function() {
    $answerFormControls.show();
  });

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  if ($answerbodyTextarea.val() !== "") {
    $answerFormControls.show();
  }

  // Submit requests filter form in the request list page
  $("#request-status-select, #request-organization-select")
    .on("change", function() {
      search();
    });

  // Submit requests filter form in the request list page
  $("#quick-search").on("keypress", function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }

  // Submit organization form in the request page
  $("#request-organization select").on("change", function() {
    this.form.submit();
  });

});
/*
 * End Zendesk Default Code
 */


/*
 * Begin DreamHost Custom Code
 */


//custom text and behavior for search field
// remove submit search and submit request buttons

var searchText = {
  init: function(settings) {
    searchText.config = {
      searchId: $("#query"),
      searchBtn: $('input[value=Search]'),
      placeholder: "placeholder",
      focus: "onfocus",
      blur: "onblur",
      placeholderVal: "Search Knowledge Base...",
      focusVal: "this.placeholder = ''",
      blurVal: "this.placeholder = 'Search Knowledge Base...'"
    };

    $.extend(searchText.config, settings);

    searchText.setup();
  },

  setup: function() {
    searchText.searchBoxFixes(searchText.config.searchId);
    searchText.removeBtn(searchText.config.searchBtn);
  },

  searchBoxFixes: function(searchBox) {
    searchText.fixPlaceholder(searchBox);
    searchText.fixFocus(searchBox);
    searchText.fixBlur(searchBox);
  },

  fixPlaceholder: function(selector) {
    selector.attr(searchText.config.placeholder, searchText.config.placeholderVal)
  },

  fixFocus: function(selector) {
    selector.attr(searchText.config.focus, searchText.config.focusVal);
  },

  fixBlur: function(selector) {
    selector.attr(searchText.config.blur, searchText.config.blurVal);
  },

  removeBtn: function($element) {
    $element.remove();
  }
}

$(document).ready(searchText.init);


//arrange category boxes on homepage and add icons to each
//note: this setup allows for easier future updates!
//adding more categories/images requires only adding an array to
//appropriate list with cat and image names then uploading the image
var homepage = {
  init: function(settings) {
    homepage.config = {
      tags: ['.category-one', '.category-two', '.category-three'],
      lists: [
        [ //images for category one
          ["Getting Started", "01_getting_started_lb.svg"],
          ["Empezando", "01_getting_started_lb.svg"],//Spanish
          ["General Hosting Topics", "02_general_hosting_topics_lb.svg"],
          ["FAQs","faq_01.svg"],
          ["Account Management / Billing", "03_account_management_billing_lb.svg"],
          ["PHP", "04_php_lb.svg"],
          ["SSL Certificates", "05_ssl_certificates_lb.svg"],
          ["Security / Policies", "06_security_policies_lb.svg"],
          ["Troubleshooting", "07_troubleshooting_lb.svg"],
          ["Solución de problemas", "07_troubleshooting_lb.svg"],//Spanish
          ["Customization", "08_advanced_topics_customization_lb.svg"]

        ],
        [ //images for category two
          ["Dedicated Hosting", "09_dedicated_hosting_lb.svg"],
          ["Domain Registrations", "10_domain_registrations_lb.svg"],
          ["DreamPress", "11_dreampress_lb.svg"],
          ["Email", "12_email_lb.svg"],
          ["Dirección de correo", "12_email_lb.svg"],//Spanish
          ["MySQL Databases", "13_mysql_databases_lb.svg"],
          ["One-Click Installs / 3rd-Party Apps", "14_oci_3partyapps_lb.svg"],
          ["Remixer", "15_remixer_lb.svg"],
          ["Shared Hosting", "16_shared_hosting_lb.svg"],
          ["VPS Hosting", "17_vps_hosting_lb.svg"],
          ["WordPress", "18_wordpress_lb.svg"]
        ],
        [ //images for category three
          ["DreamCompute Cloud Servers", "19_dreamcompute_lb.svg"],
          ["DreamObjects Cloud Storage", "20_dreamobjects_lb.svg"]
        ]
      ]
    };

    $.extend(homepage.config, settings);

    homepage.setup();
  },

  setup: function() {
    //loop over lists array, carry out function for each list
    homepage.config.lists.forEach(function(list) {
      homepage.addImages(list);
    });

    //loop over tags array, carry out function for each tag
    var i = 0;
    homepage.config.tags.forEach(function(tag) {
      homepage.getBoxes($(tag), homepage.config.lists[i]);
      i++;
    });
  },

  addImages: function(listNo) {
    var category = $('.category').find('a').text();
    for(var i = 0; i < listNo.length; i ++) {
      if(category.indexOf(listNo[i][0]) > -1) {
        $('.category a:contains(' + listNo[i][0] + ')').attr("style","background-image: url(https://p6.zdassets.com/hc/theme_assets/808026/200152607/" + listNo[i][1]  + ");");
      }
    }
  },

  getBoxes: function(categoryNo, listofBoxes) {
    for(var i = 0; i < listofBoxes.length; i ++) {
      homepage.arrangeBoxes(categoryNo, listofBoxes[i][0]);
    }
  },

  arrangeBoxes: function(categoryNo, categoryName) {
    var $category = $('.category a:contains(' + categoryName + ')'),
        $categoryBox = $category.parent().parent('.category');
    $categoryBox.appendTo(categoryNo);
  }
}

$(document).ready(homepage.init);

//toggle class for homepage category accordions on mobile
var accord = {

  init: function(settings) {
    accord.config = {
      toggleClass: 'accord-open'
    }

    $.extend(accord.config, settings);
    accord.setup();
  },


  setup: function() {
    $('.category-custom h4').click(function() {
      accord.toggleAccord($(this));
      accord.toggleHeaderStyle($(this));
    });
  },

  //add/remove classes to expand/retract accordions
  toggleAccord: function($selector) {
    if($selector.next('div').hasClass(accord.config.toggleClass)) {
      $selector.removeClass(accord.config.toggleClass);
    } else {
      $('.category-custom h4').removeClass(accord.config.toggleClass);
      $selector.addClass(accord.config.toggleClass);
    }
  },

  //add/remove classes to style accordion headers on clicks
  toggleHeaderStyle: function($selector) {
    if($selector.next('div').hasClass(accord.config.toggleClass)) {
      $('.category-custom div').removeClass(accord.config.toggleClass);
    } else {
      $('.category-custom div').removeClass(accord.config.toggleClass);
      $selector.next('div').addClass(accord.config.toggleClass);
    }
  }
}

$(document).ready(accord.init);


//animate search box and other content
//fade-ins are intended to hide movement/awkward placement of
//elements on load
var ui = {

  init: function(settings) {
    ui.config = {
      search: $('.search-box-inner'),
      content: $('.main-content, .related-articles'),
      footer: $('.support-banner, .bottom')
    }

    $.extend(ui.config, settings);
    ui.setup();
  },

  setup: function() {
    ui.unhide(ui.config.search);
    ui.unhide(ui.config.footer);
    ui.fadeIn(ui.config.content, 500);
  },

  //css animations
  unhide: function($selector) {
    $selector.removeClass('hidden');
  },

  fadeIn: function($selector, duration) {
    $selector.fadeIn(duration);
  }
}

$(document).ready(ui.init);


//show/hide back to top btn on scroll
var topBtn = {
  init: function() {
    $(window).scroll(topBtn.showHide);
  },

  showHide: function() {
    var amountScrolled = 400;
    if ($(window).scrollTop() > amountScrolled) {
      $('.topbtn').fadeIn('slow');
    } else {
      $('.topbtn').fadeOut('slow');
    }
  }
}

$(document).ready(topBtn.init);

//smooth scroll to anchors
var scroll = {
  init: function() {
    var $anchor = $('a[href*="#"]:not([href="#"])');
    $anchor.click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  }
}
$(document).ready(scroll.init);


//create jumpNav on cloud API articles
var jumpNav = {

  init: function() {
    var $anchor = $('.internal', $('ul.simple')),
        $toc = $('.table-of-content'),
        exist = $anchor.length && $toc.length ? true : false;

    if(!(exist)) {
      $('.topbtn').addClass('no-nav');
      return;
    } else {
      jumpNav.build();
    }
  },

  build: function() {
    jumpNav.createNav();
    $(window).scroll(jumpNav.scrollSpy);
    $(window).scroll(jumpNav.sticky);
  },

  createNav: function() {
    jumpNav.createLinks();
    jumpNav.createToggleBtn();
    jumpNav.createCloseBtn();
    jumpNav.addContent();
    jumpNav.desktopStyle();
    jumpNav.mobileStyle();
  },

  createLinks: function() {
    $('<div />', { class: 'cloud-nav', }).insertBefore($('.main-content'));
  },

  createToggleBtn: function() {
    $("<div class='nav-menu'><div class='nav-menu-image'></div></div>").insertBefore($('.header-inner'));
  },

  createCloseBtn: function() {
    $('.cloud-nav').prepend("<div class='cloud-nav-button'><img src='https://p6.zdassets.com/hc/theme_assets/808026/200152607/nav-close-btn.svg' /></div>");
  },

  addContent: function() {
    var $toc = $('.table-of-content'),
        $firstH1 = $('article h1').first().text(),
        //add var for custom toc title
        $altTitle = $('article div.altTitle').first().text(),
        //add custom title variable  and assign altTitle to it if it exists
        $custTitle = $altTitle.length ? $altTitle : $firstH1,
        $navHeader = "<h3>" + $custTitle + "</h3><p>Click Section to Jump</p>";

   $('.cloud-nav').append($toc);
    $toc.prepend($navHeader);
  },

  desktopStyle: function() {
    $('.article-body, .cloud-nav').addClass('desktop-view');
  },

  mobileStyle: function() {
    $('.cloud-nav-button, .nav-menu').click(function() {
      $('.cloud-nav, .nav-menu').toggleClass('menu-toggle');
    });
  },

  sticky: function() {
    var $footerOffset = $('footer').offset();
    var $navHeight = $('.cloud-nav').height();

    if(!($('.cloud-nav').hasClass('menu-toggle'))) {
      if($(this).scrollTop() < 450) {
        $('.cloud-nav')
          .css('top', '')
          .removeClass('scrolled-past');
      } else if($(this).scrollTop() > $footerOffset.top - $navHeight - 300) {
        $('.cloud-nav')
          .css('top', $footerOffset.top - $navHeight - 300)
          .removeClass('scrolled-past');
      } else {
        $('.cloud-nav')
          .css('top', '')
          .addClass('scrolled-past');
      }
    }
  },

  scrollSpy: function() {
    //Scrollspy
    var lastId,
        topMenu = $('.cloud-nav'),
        topMenuHeight = topMenu.outerHeight() + 15,
        menuItems = topMenu.find('a'),
        scrollItems = menuItems.map(function() {
          var item = $($(this).attr("href"));
          if (item.length) {
            return item;
          }
        }),
        fromTop = $(this).scrollTop() + topMenuHeight,
        cur = scrollItems.map(function() {
          if ($(this).offset().top < fromTop) {
            return this;
          }
        });

    // Get the id of the current element
    cur = cur[cur.length - 1];

    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      menuItems.parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  }
}

$(document).ready(jumpNav.init);


//miscellaneous content and page fixes for zendesk pages
var miscFixes = {

  init: function() {
    //add classes to h1 & h2 on dynamic article pages
    miscFixes.addClasses($('article h1'), 'mainheader');
  	miscFixes.addClasses($('article h2'), 'subheader');

    //reset height of all images to scale correctly in mobile
    miscFixes.resetImgHeights();

    //move dynamic sign up button on cloud API article pages
    miscFixes.moveSignUpBtn();

    //style notices with 'admonition' class on article pages
    miscFixes.styleAdmonitionClass();
  },

  addClasses: function($selector, addedClass) {
    $selector.addClass(addedClass);
  },

  resetImgHeights: function() {
    var $images = $('img');
    for(var i = 0; i < $images.length; i ++) {
      $images[i].setAttribute('height', '');
    }
  },

  moveSignUpBtn: function() {
    var $signUpBtn = $('.dream-sign-up');
    if($signUpBtn.length) {
      $signUpBtn.insertAfter('.article-body');
    }
  },

  styleAdmonitionClass: function() {
    $('.admonition').wrap($('<div />', {
      class:'admonition-content',
    }));
  	$('.admonition-content').prepend($('<div />', {
  		class: 'admonition-icon',
  	}));
  }
}

$(document).ready(miscFixes.init);

// append share to reddit button with other social share icons
(function($) {
   appendicon = function() {
      if(!$('.share').length) return;
        var link = '<li><a href="javascript:void();" class="share-reddit"> <img src="//p6.zdassets.com/hc/theme_assets/808026/200152607/icon.reddit.gray.svg" /> </a></li>';
      $('.share').append(link);
   }

})(jQuery);

$(document).ready(appendicon);

$(document).on('click', '.share-reddit', function(e) {
  e.preventDefault();
  var tag = $('.dream-sign-up').length ? '?utm_source=reddit&utm_medium=social&utm_campaign=cloud' : '';
  window.location = '//www.reddit.com/submit?url=' + encodeURIComponent(window.location) + tag;
  return false;
});


// feedback form sent to google sheets
(function(form, $) {
  form.init = function() {
    // load our events
   	form.ui.events();
		form.loadComments();
  }

  // get all the datas and output into readable text
  form.fetchData = function(el) {
    var selector = 'gform';
    if(el) selector = el;

    var elements = document.getElementById(selector).elements; // all form elements
    var fields = Object.keys(elements).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      } else if(elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });
    var data = {};
    fields.forEach(function(k){
      data[k] = elements[k].value;
      if(elements[k].type === "checkbox") {
        data[k] = elements[k].checked;
      // special case for Edge's html collection
      } else if(elements[k].length) {
        for(var i = 0; i < elements[k].length; i++) {
          if(elements[k].item(i).checked) {
            data[k] = elements[k].item(i).value;
          }
        }
      }
    });
    return data;
  }

  // ajax request to send form data
  form.handleSubmit = function(event) {
   	event.preventDefault();

    var data = form.fetchData();

    var url = event.target.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    if ($('#cf-vote').val() == "YES") {
      xhr.onreadystatechange = function() {
        $('.js-cf-loadmsg').hide();
        $('.js-cf-tymsg').show();
      };
    } else { // if visitor clicked NO button show follow up message
      xhr.onreadystatechange = function() {
        $('.js-cf-loadmsg').hide();
        $('.js-cf-tymsg').show();
        $('.js-cf-nomsg').fadeIn(500);
      };
    }
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
  }

  // load all the things
  form.loadComments = function() {
    // bind to the submit event of our form
    var $gform = $('#gform');
    $gform.on('submit', form.handleSubmit);
  }

  form.ui = form.ui || {};

  form.ui.events = function() {
    var pageURL = $(location).attr("href");
    var $btn = $('.js-cf-btn');
    var $submit = $('.js-cf-submit');

    $btn.on('click', function(e) {
      var answer = $(this).data('response');
      $('.js-cf-btns').hide();
      $("#cf-article").val(pageURL);
      $('#cf-vote').val(answer);

      if($(this).data('response') == 'NO') {
        e.preventDefault();
        $(".js-cf-comments").show(200);
        $('#cf-textbox').prop('required', true);
        return;
      }

      $('.js-cf-loadmsg').show();
    });

    $('#gform').on('submit', function(e) {

      //Check if hidden field contains data, if so, change value of
      //#cf-check to 'automatedSpam' so Google script catches it
      var autoSpamCheck = document.getElementById("cf-check").value;

      if (autoSpamCheck.trim() != '') {
        $('#cf-check').val('automatedSpam');
      }
      else if(!$('#cf-textbox').val()) {
        e.preventDefault();
        return;
      }
      $('.js-cf-comments').hide();
      $('.js-cf-loadmsg').show();
    });

    $('.js-cf-help-link').on('click', function() {
      var value = $(this).data('type');
      var pageURL = $(location).attr("href");
      $("#cf-link-article").val(pageURL);
      $('#cf-link').val(value)

      $(this).closest('#help_form').submit();
    });

    $('#help_form').on('submit', function(event) {
      event.preventDefault();
      var data = form.fetchData('help_form');
      var url = event.target.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
      }).join('&')
      xhr.send(encoded);
    });
  }

})(window.form = window.form || {}, jQuery);

$(document).ready(function() {
  // if the page is not an article, kill the script
  if(!$('article').length) return;
  form.init();
});


/*
 * End DreamHost Custom Code
 */
