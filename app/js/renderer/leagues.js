setTitle(i18n.__("Leagues"));

const $leagues = createElement("div");

const league = store.get("league");
const leagues = store.get("leagues");

leagues.forEach(item => {
  const $div = createElement("div");
  const $label = createElement("label");
  const $input = createElement("input");

  $div.setAttribute("class", "flex my-1");

  $label.setAttribute("for", item.id);
  $label.innerText = item.text;

  if (league === item.id) {
    $input.setAttribute("checked", "checked");
  }

  $input.setAttribute("id", item.id);
  $input.setAttribute("name", "leagues");
  $input.setAttribute("type", "radio");

  $div.appendChild($input);
  $div.appendChild($label);

  $leagues.appendChild($div);
});

setBodyElement($leagues);
