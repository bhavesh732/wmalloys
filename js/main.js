window.onscroll = function () {
  hidefunction();
};

var nav = document.getElementById("nav");
var prevScrollpos = window.pageYOffset;

function hidefunction() {
  var currentScrollPos = window.pageYOffset;
  console.log('current, previous', currentScrollPos, prevScrollpos)
  console.log(prevScrollpos>currentScrollPos)
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
