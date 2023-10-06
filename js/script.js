$(function() {
  wResize();

  $(window).resize(function(){
    wResize();
  });

  $(".fa-solid.fa-share").on("click", function() {

    $(".article_social, .article_social_sp, .fa-solid.fa-share").toggleClass('active');

    if ($(".article_social_sp").hasClass('active')) {
      wResize();
    }
    else {
      wResize();
    }
  })
});

function wResize() {
  if (window.innerWidth <= 767) {
    if ($(".article_social_sp").hasClass('active')) {
      $(".article_desc").hide();
    }
    else {
      $(".article_desc").show();
    }
  }
  else {
    $(".article_desc").show();
  }
}