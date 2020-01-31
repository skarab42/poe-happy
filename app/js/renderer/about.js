setTitle(i18n.__("About"));

const app = store.get("app");

const items = [
  { label: i18n.__("Version"), value: app.version },
  { label: i18n.__("License"), value: app.license },
  { label: i18n.__("Author"), value: app.author },
  { label: i18n.__("Source"), value: app.homepage, link: true }
];

items.forEach(item => {
  const $p = createElement("p");
  $p.innerHTML = `${item.label}: `;
  if (item.link) {
    $p.appendChild(createLink(item.value));
  } else {
    $p.innerHTML += item.value;
  }
  appendBodyElement($p);
});
