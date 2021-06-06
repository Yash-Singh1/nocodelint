const tap = require('tap');
const nocodelint = require('..');

tap.test('empty string gives true', (t) => {
  t.equal(nocodelint(''), true);
  t.end();
});

tap.test('string with contents give false', (t) => {
  t.equal(nocodelint('abc'), false);
  t.equal(nocodelint('other stuff'), false);
  t.end();
});

tap.test('non-string gives false or fails', (t) => {
  t.equal(nocodelint(0), false);
  t.equal(nocodelint([0, {}, null]), false);
  t.equal(nocodelint({}), false);
  t.equal(
    nocodelint({
      a: 5,
      b: 'a value',
    }),
    false
  );
  t.throws(nocodelint, "Cannot read property 'length' of undefined");
  t.throws(() => nocodelint(null), "Cannot read property 'length' of null");
  t.end();
});
