const defaultItem = {
  text: null,
  rarity: null,
  name: null,
  type: null
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

  item.rarity = block1[0];
  item.name = block1[1];
  item.type = block1[2];

  console.log(item);

  return item;
}

module.exports = parseItem;
