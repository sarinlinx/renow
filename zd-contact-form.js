<div class="section-cf">
  <form id="gform" name="articleform" class="section-cf__form"  action="https://script.google.com/macros/s/AKfycbwMO6118FKj5Bfj-nhATyL6W8rXUyTsTaZtdcDv-d1iwBIJqxM/exec" method="post">
    <div class="section-cf__btns js-cf-btns">
      <p>Did this article answer your questions?</p>
      <button class="btn btn--cf-yes js-cf-btn" data-response="YES">Yes</button>
      <button class="btn btn--cf-no js-cf-btn" data-response="NO">No</button>
    </div>

    <div class="js-cf-loadmsg hidden">
      <p class="section-cf__p">Sending feedback...</p>
    </div>

    <div class="section-cf__comments hidden js-cf-comments">
      This form is only for article feedback. If you require assistance, please <a class="section-cf__link" href="https://help.dreamhost.com/hc/en-us/articles/218084068-Contacting-support-overview">contact support</a>.
      <br>
      How can we improve this page?
      <input type="hidden" id="cf-vote" name="Was_Article_Helpful">
      <input type="hidden" id="cf-article" name="articleURL">
      <input type="hidden" id="cf-check" name="check">
      <textarea class="section-cf__textbox" id="cf-textbox" name="message" cols="75" maxlength="500" placeholder="Max 500 characters"></textarea>

      <input class="js-cf-submit" type="submit" value="Submit">
    </div>
  </form>

  <div class="js-cf-tymsg hidden">
    <h2>Thank you for your feedback!</h2>
  </div>
  <div class="js-cf-nomsg hidden">
    <p>We'll use it to improve the Knowledge Base.</p>
		<form id="help_form" class="section-cf__form"  action="https://script.google.com/macros/s/AKfycbwMO6118FKj5Bfj-nhATyL6W8rXUyTsTaZtdcDv-d1iwBIJqxM/exec" method="post">
      <input type="hidden" id="cf-link-article" name="articleURL">
      <input type="hidden" id="cf-link" name="cust_link_option" />
    <p>If you still require assistance, and you're an existing DreamHost customer, please <a target="_blank" class="js-cf-help-link section-cf__link" href="/hc/en-us/articles/218084068-Contacting-support-overview" data-type="Customer_needs_support">contact support</a>.</p>
    <p>If you're not a customer yet, please contact our <a class="js-cf-help-link section-cf__link" href="//www.dreamhost.com/support/#support-form" target="_blank" data-type="Non-Customer_needs_support">sales team</a> for further assistance.</p>
    </form>

  </div>
</div>
