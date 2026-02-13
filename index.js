$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var container = $(".reset");

  var bgMusic = document.getElementById("bgMusic");
  var yesSound = document.getElementById("yesSound");
  var noSound = document.getElementById("noSound");


  bgMusic.play().catch(() => {
    console.log("Autoplay blocked, click Play Music to start.");
  });

 
  envelope.on("click", function () {
    openEnvelope();
  });

  
  btn_open.on("click", function () {
    openEnvelope();

    try { yesSound.currentTime = 0; yesSound.play(); } catch (e) {}
    $("#clickMe").fadeIn();
  });


  btn_reset.on("click", function () {
    try { noSound.currentTime = 0; noSound.play(); } catch (e) {}

    var containerRect = container[0].getBoundingClientRect();
    var buttonRect = btn_reset[0].getBoundingClientRect();

    var maxX = containerRect.width - buttonRect.width;
    var maxY = containerRect.height - buttonRect.height;

    var randomX = Math.floor(Math.random() * Math.max(0, maxX));
    var randomY = Math.floor(Math.random() * Math.max(0, maxY));

    btn_reset.css({
      position: "absolute",
      left: randomX + "px",
      top: randomY + "px",
    });
  });

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
  }
 
$("#loveGif").on("click", function (e) {
  e.stopPropagation();

  $(".envelope-wrapper").hide();
  $(".reset").hide();
  $(".valentine").hide();
  $(".music-controls").hide();
  $("#clickMe").hide();

  $("#fullscreenGif").fadeIn(800);
  $("#finalMessage").fadeIn(1200);


  try {
    bgMusic.currentTime = 0;
    bgMusic.play();
  } catch (e) {}
});
if (navigator.vibrate) {
  navigator.vibrate(50);
}
});