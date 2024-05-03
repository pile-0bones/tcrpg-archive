let i;

function showTownText(townName) {
  // Declare all variables
  let tabcontent, selected;
  selected = document.getElementById(townName);

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("town-text");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the current tab, and scroll it into view
  selected.style.display = "block";
  selected.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


const bbSessionsButton = document.querySelector("#bb-sessions-button");
const bbSessions = document.querySelector("#bb-sessions");
const pashSessionsButton = document.querySelector("#pash-sessions-button");
const pashSessions = document.querySelector("#pash-sessions");
const ntSessionsButton = document.querySelector("#nt-sessions-button");
const ntSessions = document.querySelector("#nt-sessions");

function expandText(x, y) {
  x.classList.toggle("open");
  y.classList.toggle("open");
}

bbSessionsButton.onclick = function () {expandText(bbSessionsButton, bbSessions)};
pashSessionsButton.onclick = function () {expandText(pashSessionsButton, pashSessions)};
ntSessionsButton.onclick = function () {expandText(ntSessionsButton, ntSessions)};

function showSession(sessionId) {
  let sessioncontent, selected;
  selected = document.getElementById(sessionId);
  sessioncontent = document.getElementsByClassName("session-text");
  
  for (i = 0; i < sessioncontent.length; i++) {
    sessioncontent[i].style.display = "none";
  }
  
  selected.style.display = "block";
}

function showLore(loreId) {
  let lorecontent, selected;
  selected = document.getElementById(loreId);
  sessioncontent = document.getElementsByClassName("lore-content");
  
  for (i = 0; i < sessioncontent.length; i++) {
    sessioncontent[i].style.display = "none";
  }
  
  selected.style.display = "block";
}