// Hello
$('.nav-item').on('click', function() {
 $('.navbar-toggler').addClass('collapsed')
 $('.navbar-collapse').removeClass('show')
});

// Navigation bar Scrolling
window.onscroll = function() {
 navbarScroll()
};

function navbarScroll() {
 if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  document.getElementById("navbar").className = "container-fluid scrolled";
 } else {
  document.getElementById("navbar").className = "container-fluid unscrolled";
 }
}
$(window).scroll(function() {
 var windscroll = $(window).scrollTop();
 if (windscroll >= 100) {
  // $('nav').addClass('fixed');
  $('.wrapper section').each(function(i) {
   if ($(this).position().top <= windscroll - 20) {
    $('nav a.active').removeClass('active');
    $('nav a').eq(i).addClass('active');
   }
  });

 } else {

  $('nav').removeClass('fixed');
  $('nav a.active').removeClass('active');
  $('nav a:first').addClass('active');
 }

}).scroll();


// modal    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

function btn2() {
 modal.style.display = "block";
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
 modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
 modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
 if (event.target == modal) {
  modal.style.display = "none";
 };
};
