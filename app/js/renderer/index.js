const { remote, shell } = require("electron");
const core = remote.require("./core");
const win = remote.getCurrentWindow();
const elements = getAllElementById();

const store = core.store;
const i18n = core.i18n;

function getAllElementById() {
  const refs = {};

  document.querySelectorAll("[id]").forEach(element => {
    refs[element.id] = element;
  });

  return refs;
}

function setTitle(title) {
  elements.title.innerText = title;
}

function clearBody() {
  elements.body.innerText = "";
}

function setBodyText(text) {
  elements.body.innerText = text;
}

function setBodyHTML(html) {
  elements.body.innerHTML = html;
}

function appendBodyElement(element) {
  elements.body.appendChild(element);
}

function setBodyElement(element) {
  clearBody();
  appendBodyElement(element);
}

function createElement(name) {
  const $e = document.createElement(name);
  return $e;
}

function createLink(url, text = null) {
  const $a = createElement("a");
  $a.addEventListener("click", event => {
    event.preventDefault();
    shell.openExternal(url);
  });
  $a.innerText = text || url;
  return $a;
}

elements.close.addEventListener("click", () => {
  win.hide();
});
