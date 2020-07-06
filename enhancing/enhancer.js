module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return item.enhancement >= 20 ? { ...item } : { ...item, enhancement: item.enhancement + 1 };
}

function fail(item) {
  if(item.enhancement < 15) {
    return { ...item, enhancement: item.enhancement - 5};
  } else if(item.enhancement >= 15 && item.enhancement <= 16) {
    return { ...item, enhancement: item.enhancement - 10};
  } else {
    return { ...item, enhancement: item.enhancement - 1};
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if(item.enhancement === 0) {
    return { ...item };
  } else if(item.enhancement > 0) {
    return { ...item, name: `[+${item.enhancement}] ${item.name}` };
  }
}