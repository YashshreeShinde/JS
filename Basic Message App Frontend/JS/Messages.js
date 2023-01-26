import references from "./references.js";
import { currentUser } from "./Login.js";
import { messages } from "./data.js";
import { multipleUsersArray } from "./Users.js";

let recieverName = "";

let recieverMessages = [];
let senderMessages = [];
function setRecieverName(name) {
  console.log(multipleUsersArray);
  recieverName = name;
}

function sendMessage() {
  //Add post request to send the data
    references.sendBtn.addEventListener("click", (e) => {
    const message = references.chat_input_message.value;
    const messageTextElement = `<div class="sender-message"><span class="senderText">${message}</span></div>`;
    references.chatmessages.innerHTML += messageTextElement;
  });
}

function getMessages() {
  if (messages[currentUser]) {
    let recievers = messages[currentUser]["reciever"];
    console.log(recievers);
    if (recievers[recieverName]) {
      recieverMessages = recievers[recieverName]["recievedmessages"];
    } else {
      recieverMessages = [];
    }
  }

  if (messages[recieverName]) {
    let recievers = messages[recieverName]["reciever"];
    console.log(recievers);
    if (recievers[currentUser]) {
      senderMessages = recievers[currentUser]["recievedmessages"];
    }
  } else {
    senderMessages = [];
  }

  //sender
  let messageArray1 = [];
  //Add get request to get the messages
  for (let message of senderMessages) {
    const messageTextElement1 = `<div class="sender-message"><span class="senderText">${message}</span></div>`;
    messageArray1.push(messageTextElement1);
  }

  //reciever
  let messageArray2 = [];
  for (let message of recieverMessages) {
    const messageTextElement2 = `<div class="reciever-message"><span class="recieverText">${message}</span></div>`;
    messageArray2.push(messageTextElement2);
  }
  const messagesArray = messageArray1.concat(messageArray2);
  references.chatmessages.innerHTML = messagesArray.join("");
}

export default { sendMessage, getMessages, setRecieverName, sendMessage };
