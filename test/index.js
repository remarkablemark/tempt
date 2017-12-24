const assert = require('assert');
const cases = require('./cases');
const tempt = require('../index');

describe('tempt', () => {
  describe('when first argument is invalid', () => {
    it('throws TypeError', () => {
      [
        undefined,
        null,
        1337,
        {},
        [],
        () => {},
        new Date(),
      ].forEach(value => assert.throws(() => tempt(value), TypeError));
    });
  });

  cases.forEach(({ template, data, expected }) => {
    describe(`when template='${template}'`, () => {
      describe(`and data=${JSON.stringify(data)}`, () => {
        it(`renders '${expected}'`, () => {
          assert.equal(tempt(template, data), expected);
        });
      });
    });
  });
});
