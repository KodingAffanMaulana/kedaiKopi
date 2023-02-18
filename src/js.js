const text = document.querySelector("#text");
const messages = [
  "Hello!",
  "How are you?",
  "This is JavaScript",
  "Thanks for visiting",
  "Have a great day!"
];
let i = 0;
setInterval(function() {
  text.innerHTML = messages[i];
  i = (i + 1) % messages.length;
}, 2000);