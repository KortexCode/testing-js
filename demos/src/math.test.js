const { sum, multiply, divide } = require('./math');

test('adds 1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('multiplying', () => {
  const rta = multiply(1, 3);
  expect(rta).toBe(3);
  const rta2 = multiply(2, 3);
  expect(rta2).toBe(6);
});

test('divide', () => {
  const rta = divide(8, 2);
  expect(rta).toBe(4);
  const rta2 = divide(8, 0);
  expect(rta2).toBeNull();
});
