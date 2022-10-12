$(".navbar-toggle").on("click", function () {
  $(".navbar-dropdown").toggleClass("dropdown-active");
});

$(".navbar-auth").on("click", function () {
  $(".dropdown-contents").toggleClass("active");
});