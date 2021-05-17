const chatApp = {};

const chatAnimation = () => {
  $(window).ready(function () {
    $(".phoneText1").delay(2000).fadeIn(100);
  });
  $(".phoneText1").mouseenter(function () {
    console.log("wok pls");
  });
};

// const speechBubbleAnimation = () => {
//   $(window).ready(function () {
//     loop();
//     setInterval(loop, 2100);
//     function loop() {
//       $(".speechBubble1").fadeOut(300).fadeIn(300).delay(900);
//       $(".speechBubble2").delay(300).fadeOut(300).fadeIn(300);
//       $(".speechBubble3").delay(600).fadeOut(300).fadeIn(300);
//     }
//   });
// };

const addSpeechBubble = () => {
  const bubble = document.createElement("div");
  bubble.className = "speechBubble";
  bubble.innerHTML = `
  <i class="fas fa-circle speechBubble speechBubble1"></i>
  <i class="fas fa-circle speechBubble speechBubble2"></i>
  <i class="fas fa-circle speechBubble speechBubble3"></i>`;
  const myElement = document.querySelector(".phoneText4");
  $(bubble).insertAfter(".phoneText1");
  console.log(bubble);
};

chatApp.init = () => {
  chatAnimation();
  // speechBubbleAnimation();
  addSpeechBubble();
};

chatApp.init();

{
  /* <div class="speechBubble">
<i class="fas fa-circle speechBubble speechBubble1"></i>
<i class="fas fa-circle speechBubble speechBubble2"></i>
<i class="fas fa-circle speechBubble speechBubble3"></i>
</div> */
}
