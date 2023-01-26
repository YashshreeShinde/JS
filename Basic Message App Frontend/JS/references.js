const name = document.querySelector("#name-input");
const loginButton = document.querySelector(".loginButton");
const mainWindow = document.querySelector(".main-window");
const login = document.querySelector(".login");
const modal_container=document.querySelector(".modal-container")
const modal_text=document.querySelector(".modal-text")
const users=document.querySelector(".users");
const chat_input_message=document.querySelector(".chat-input-message")
const chatmessages=document.querySelector(".chatmessages");
const sendBtn=document.querySelector(".sendBtn")
const search_input=document.querySelector(".search-user-input")
const searchBtn=document.querySelector(".search-btn")

const logoutBtn=document.querySelector(".logoutBtn")


export default{
    modal_container,
    modal_text,
    loginButton,
    mainWindow,
    login,
    name,
    users,
    chat_input_message,
    chatmessages,
    sendBtn,
    search_input,
    searchBtn,
    logoutBtn
     
}