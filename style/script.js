var multipleCardCarousel = document.querySelector("#testimonial-gallery");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
  var carouselWidth = $("#testimonial-gallery")[0].scrollWidth;
  var cardWidth = $(".testimonial_card").width();
  var scrollPosition = 0;
  $("#testimonial-next").on("click", function () {
    console.log("Prev")
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      $("#testimonial-gallery").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#testimonial-prev").on("click", function () {
    console.log("Next")
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#testimonial-gallery").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}

$(".country-select-field").each(function(){
  $(this).children().first().attr("disabled","disabled");
});