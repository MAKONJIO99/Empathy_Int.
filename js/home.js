$(document).ready(function () {
  $("#development-image").click(function () {
    $("#development-image").slideDown('1500').hide('1000');
    $("#development").show('1500');
  });
  $("#development").click(function () {
    $("#development").slideUp('1500');
    $("#development-image").slideDown('1500');
  });
});
$(document).ready(function () {
  $("#design-image").click(function () {
    $("#design-image").slideDown('1500').hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function () {
    $("#design").slideUp('1500');
    $("#design-image").slideDown('1500');
  });
});

$(document).ready(function () {
  $("#product-image").click(function () {
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function () {
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });
});

//Home navigation
$(document).ready(function () {
  $(".login").click(function () {
    $(".userlogin").slideDown();
    $(".userlogin").css("border-bottom", "2px solid red");

  })

  $(".login").mouseover(function () {
    $(".sl").css("border", "2px solid orange");
    $(".bl").css("border", "2px solid orange");
  })

  $(".login").mouseout(function () {
    $(".sl").css("border", "2px solid white");
    $(".bl").css("border", "2px solid white");
  })
  $(".sl").mouseover(function () {
    $(".sl").css("border", "2px solid orange");
    $(".bl").css("border", "2px solid white");
  })
  $(".bl").mouseover(function () {
    $(".sl").css("border", "2px solid white");
    $(".bl").css("border", "2px solid orange");
  })
  

})