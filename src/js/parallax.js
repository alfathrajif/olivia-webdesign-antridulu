$(window).scroll(function () {
  parallax();
});

function parallax() {
  var wScroll = $(window).scrollTop();
  $(".parallax-bg").css("top", wScroll * 0.5 + "px");
  $(".parallax-contents").css("top", wScroll * 0.2 + "px");
}

$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();

  $(".navbar-nav .nav-link").removeClass("active");
  $(this).addClass("active");

  var targetEle = this.hash;
  var $targetEle = $(targetEle);

  targetEle == "#tentang_kami"
    ? $targetEle.css("padding-top", 120 + "px")
    : false;
  targetEle == "#home" || targetEle == "#dashboard"
    ? scrollTop()
    : scrollPosition();

  function scrollPosition() {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $targetEle.position().top,
        },
        900,
        "swing",
        function () {
          window.location.hash = targetEle;
        }
      );
  }

  function scrollTop() {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: 0,
        },
        2000,
        "swing",
        function () {
          window.location.hash = targetEle;
        }
      );
  }
});
