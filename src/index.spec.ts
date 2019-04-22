import hashValue from '.';

const options = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

describe('hashValue method', () => {
  it('return same value every time', () => {
    const result = hashValue('Luke Skywalker', options);

    for (let i = 0; i < 100; i++) {
      expect(result).toEqual('f');
    }
  });
});
