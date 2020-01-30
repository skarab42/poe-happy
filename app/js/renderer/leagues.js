setTitle(core.i18n.__("Leagues"));

const $leagues = createElement("div");

core.state.leagues.forEach(league => {
  const $div = createElement("div");
  const $label = createElement("label");
  const $input = createElement("input");

  $div.setAttribute("class", "flex my-1");

  $label.setAttribute("for", league.id);
  $label.innerText = league.text;

  if (core.state.league === league.id) {
    $input.setAttribute("checked", "checked");
  }

  $input.setAttribute("id", league.id);
  $input.setAttribute("name", "leagues");
  $input.setAttribute("type", "radio");

  $div.appendChild($input);
  $div.appendChild($label);

  $leagues.appendChild($div);
});

setBodyElement($leagues);
