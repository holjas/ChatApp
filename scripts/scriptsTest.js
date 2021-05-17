console.log("testing");
const chatMessages = [
  {
    name: "ms2",
    msg: "That sounds great. I'd be happy with that.",
    delay: 0,
    align: "left",
  },
  {
    name: "ms3",
    msg: "Could you send over some pictures of your dog, please?",
    delay: 3000,
    align: "left",
  },
  {
    name: "ms4",
    msg: "IMAGES HEREE",
    delay: 7000,
    align: "right",
  },
  {
    name: "ms5",
    msg: "Here are a few pictures. She's a happy girl!",
    delay: 3000,
    align: "right",
  },
  {
    name: "ms6",
    msg: "Can you make it?",
    delay: 11000,
    align: "right",
  },
  {
    name: "ms7",
    msg: "She looks so happy! The time we discussed works. How long shall I take her out for?",
    delay: 10000,
    align: "left",
  },
  {
    name: "ms8",
    msg: "PRICE ONE",
    delay: 10000,
    align: "left",
  },
  {
    name: "ms9",
    msg: "Price",
    delay: 10000,
    align: "left",
  },
];
var chatDelay = 0;

function onRowAdded() {
  $(".chat-container").animate({
    scrollTop: $(".chat-container").prop("scrollHeight"),
  });
}
$.each(chatMessages, function (index, obj) {
  chatDelay = chatDelay + 0; //delay changed from 4000
  chatDelay2 = chatDelay + obj.delay;
  chatDelay3 = chatDelay2 + 10;
  scrollDelay = chatDelay;
  chatTimeString = " ";
  msgname = "." + obj.name;
  msginner = ".messageinner-" + obj.name;
  spinner = ".sp-" + obj.name;
  //   if (obj.showTime == true) {
  //     chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
  //   }
  $(".chat-message-list").append(
    "<li class='message-" +
      obj.align +
      " " +
      obj.name +
      "' hidden><div class='sp-" +
      obj.name +
      "'><span class='spinme-" +
      obj.align +
      "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" +
      obj.name +
      "' hidden><span class='message-text'>" +
      obj.msg +
      "</span>" +
      //   chatTimeString +
      "</div></li>"
  );
  $(msgname).delay(chatDelay).fadeIn();
  $(spinner).delay(chatDelay2).hide(1);
  $(msginner).delay(chatDelay3).fadeIn();
  setTimeout(onRowAdded, chatDelay);
  setTimeout(onRowAdded, chatDelay3);
  chatDelay = chatDelay3;
});
