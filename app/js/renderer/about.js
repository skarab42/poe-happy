setTitle(core.i18n.__("About"));

const items = [
  { label: core.i18n.__("Version"), value: core.state.app.version },
  { label: core.i18n.__("License"), value: core.state.app.license },
  { label: core.i18n.__("Author"), value: core.state.app.author },
  { label: core.i18n.__("Source"), value: core.state.app.homepage, link: true }
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
