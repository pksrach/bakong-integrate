const { sum } = require('./index');

test('adds 1 + 2 to equal 3', () => {
    console.log('Testing sum function');
    expect(sum(1, 2)).toBe(3);
});