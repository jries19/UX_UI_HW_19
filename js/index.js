//main button interactions
$(".mainButton").hover(function(){
    $(this).css("background-color", "#98D698");
    }, function(){
    $(this).css("background-color", "#7AAC7A");
  });

  //social media logo interactions
  $(".emailLogo").hover(function(){
    $(this).css("box-shadow", "0 4px 4px 0 rgba(0, 0, 0, 0.2)");
    }, function(){
    $(this).css("box-shadow", "none");
  });

  $(".linkedinLogo").hover(function(){
    $(this).css("box-shadow", "0 4px 4px 0 rgba(0, 0, 0, 0.2)");
    }, function(){
    $(this).css("box-shadow", "none");
  });

  //back to top button interaction
  $(".topButton").on("click", function(){
    $("html, body").animate({scrollTop: 0}, 800);
  });

  //nav link button interactions
  $("li").hover(function(){
    $(this).css("text-decoration", "underline");
    }, function(){
    $(this).css("text-decoration", "none");
  });

  //logo hover interaction
  $(".logoNav").hover(function(){
    $(this).css("color", "#98D698")
    }, function(){
    $(this).css("color", "black");
  });
