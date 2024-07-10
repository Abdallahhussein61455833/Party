$(".open-sidebar").click(function () {
  $(".sidebar").animate({ width: "250px" }, 500);
  $(".open-sidebar").animate({ marginLeft: "250px" }, 500);
});

$(".closebtn").click(function () {
  $("#leftmenu").animate({ width: "0px" }, 500);
  $(".open-sidebar").animate({ marginLeft: "0px" }, 500);
});

$(".toggle").click(function () {
  $(".singer-p").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

window.onload = function () {
  countDownToTime("03 august 2024 9:00:00");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}
var maxLength = 100;
$("textarea").keyup(function () {
  var length = $(this).val().length;
  var AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#chars").text("your available character finished");
  } else {
    $("#chars").text(AmountLeft + " Character Remaining");
  }
});

/*scrollmenu*/
$("#leftMenu a").click(function () {
  var sectionId = $(this).attr("href");

  var positionOfSection = $(sectionId).offset().top;

  $("html , body , section").animate({ scrollTop: positionOfSection }, 2000);
});
