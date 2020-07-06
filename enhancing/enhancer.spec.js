const { succeed, fail, repair, get } = require('./enhancer.js');

const sword = { 
  name: 'Holy Sword',
  durability: 60,
  enhancement: 15,
};

const shield = { 
  name: 'Basic Shield',
  durability: 80,
  enhancement: 20,
};

const armor = { 
  name: 'Shiny Armor',
  durability: 90,
  enhancement: 13,
};

const spear = {
  name: 'Golden Spear',
  durability: 100,
  enhancement: 0,
};

describe('enhancer', () => {
  it('should run tests for the enhancer', () => {
    expect(true).toBe(true);
  });

  // REPAIR---------------
  it('should repair the item and return a new item', () => {
    expect(repair(sword)).toHaveProperty('durability', 100);
  });

  // SUCCESS--------------
  it('should increase the enhancement level on success', () => {
    expect(succeed(sword)).toHaveProperty('enhancement', 16);
  });

  it('should not increase enhancement if it is level 20', () => {
    expect(succeed(shield)).toHaveProperty('enhancement', 20);
  })

  // FAIL-----------------
  it('should decrease enhancement level by 5 on fail if lvl < 15', () => {
    expect(fail(armor)).toHaveProperty('enhancement', 8);
  });

  it('should decrease enhancement level by 10 on fail if lvl >= 15 && lvl <= 16', () => {
    expect(fail(sword)).toHaveProperty('enhancement', 5);
  });

  it('should decrease enhancement level by 1 on fail if lvl > 16', () => {
    expect(fail(shield)).toHaveProperty('enhancement', 19);
  });

  // GET------------------
  it('should return the item with the enhancement level in the name', () => {
    expect(get(sword)).toHaveProperty('name', '[+15] Holy Sword');
    expect(get(shield)).toHaveProperty('name', '[+20] Basic Shield');
    expect(get(armor)).toHaveProperty('name', '[+13] Shiny Armor');
    expect(get(spear)).toHaveProperty('name', 'Golden Spear');
  });
});