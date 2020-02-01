const defaultItem = {
  text: null,
  rarity: null,
  name: null,
  type: null,
  baseType: null
};

function splitItemText(text) {
  return text.trim().split(/\r\n--------\r\n/);
}

function splitItemBlock(block) {
  return block.trim().split(/\r\n/);
}

function parseItem(text) {
  const blocks = splitItemText(text);
  const item = { ...defaultItem, text };

  // [block #1]
  // - item rarity
  // - item name
  // - item type
  const block1 = splitItemBlock(blocks[0]);
  const rarity = block1[0].split(":");

  item.rarity = rarity[1].trim();
  item.name = block1[1];
  item.type = block1[2];

  if (!item.type) {
    const type = item.name.split(" ");
    item.type = type[0];
  }

  const baseType = item.type.split(" ");
  item.baseType = baseType[0].trim();

  console.log(item);

  return item;
}

module.exports = parseItem;
