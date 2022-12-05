const sum = require('./index');

describe(sum.name, () => {
  it('should add 2 numbers', () => {
    const v1 = 1;
    const v2 = 1;
    const expectedSum = v1 + v2;

    const result = sum(v1, v2);

    expect(result).toBe(expectedSum);
  });
  it('should return 0 if called without parameters', () => {
    const expectedSum = 0;

    const result = sum();

    expect(result).toBe(expectedSum);
  });
});
