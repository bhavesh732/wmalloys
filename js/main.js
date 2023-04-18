function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
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

// document.addEventListener("scroll", () => {
//   if (
//     document.body.scrollTop > 100 ||
//     document.documentElement.scrollTop > 100
//   ) {
//     nav.className = " navscroll ";
//   } else {
//     nav.className = "  ";
//   }
// });
