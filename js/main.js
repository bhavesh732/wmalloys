function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,fr,zh-TW,zh-CN",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}

window.onscroll = function () {
  hidefunction();
};

var nav = document.getElementById("nav");
var prevScrollpos = window.pageYOffset;

function hidefunction() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
    nav.style.transition = "0.5s";
  } else {
    nav.style.top = "-100px";
    nav.style.transition = "0.5s";
  }
  prevScrollpos = currentScrollPos;
}

function sendEmail() {
  var name = $("[name='name']").val();
  var company = $("[name='company']").val();
  var designation = $("[name='designation']").val();
  var email = $("[name='email']").val();
  var phone = $("[name='phone']").val();
  var subject = $("[name='subject']").val();
  var body = $("[name='body']").val();

  Email.send({
    // Host: "smtp.gmail.com",
    // Username: "mansunny282@gmail.com",
    // Password: "billionaire19",
    // To: "bhaveshkhivesra@gmail.com",
    // From: "mansunny282@gmail.com",
    Host: "smtp.elasticemail.com",
    Username: "marketing@wmalloys.com",
    Password: "5E4917F08A1A228C39235D6B287700F6AF9B",
    To: "bhaveshkhivesra@gmail.com, sidd@wmalloys.com",
    From: "mansunny282@gmail.com",
    Subject: subject,
    Body: `${body}, Name: ${name},\nCompany: ${company}, \nDesignation: ${designation}, \nEmail: ${email}, \nPhone: ${phone},`,
  }).then(() =>
    alert(
      "Thank you for your interest, one of our experts will contact you soon."
    )
  );
}
