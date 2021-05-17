const chatMessages = [
  {
    name: "ms1",
    msg: "That sounds great. I'd be happy with that.",
    delay: 5000,
    align: "left",
    style: "message-text",
  },
  {
    name: "ms2",
    msg: "Could you send over some pictures of your dog, please?",
    delay: 2000,
    align: "left",
    style: "message-text",
  },
  {
    name: "ms3",
    msg: `
    <div class="phoneUserDogImage">
    <img src="../images/dog-image-1.jpg" class="phoneUserDogImage"/>
    <img src="../images/dog-image-2.jpg" class="phoneUserDogImage"/>
    <img src="../images/dog-image-3.jpg" class="phoneUserDogImage"/>
    </div>
    `,
    delay: 5000,
    align: "right",
    style: "message-text",
  },
  {
    name: "ms4",
    msg: "Here are a few pictures. She's a happy girl!",
    delay: 2000,
    align: "right",
    style: "message-text",
  },
  {
    name: "ms5",
    msg: "Can you make it?",
    delay: 1500,
    align: "right",
    style: "message-text",
  },
  {
    name: "ms6",
    msg: "She looks so happy! The time we discussed works. How long shall I take her out for?",
    delay: 3000,
    align: "left",
    style: "message-text",
  },
  {
    name: "ms7",
    msg: `
    <div>
    <i class="far fa-circle"></i>
    <p>30 minute walk</p>
    </div>
    <div>
    <p>$29</p>
    </div>
    `,
    delay: 3000,
    align: "left",
    style: "priceGradient",
  },
  {
    name: "ms8",
    msg: `
    <div>
    <i class="far fa-circle"></i>
    <p>1 hour walk</p>
    </div>
    <div>
    <p>$49</p>
    </div>
    `,
    delay: 1500,
    align: "left",
    style: "priceGradient",
  },
];
let chatDelay = 0;

function onRowAdded() {
  $(".chatContainer").animate({
    scrollTop: $(".chatContainer").prop("scrollHeight"),
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

  $(".chatMessageList").append(
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
      //   "' hidden><span class='message-text'>" +
      "' hidden><span class='" +
      obj.style +
      "'>" +
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
