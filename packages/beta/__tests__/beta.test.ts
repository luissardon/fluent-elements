import { Beta } from '../src/beta';

test('beta', () => {
  expect(new Beta('beta')).toBeInstanceOf(Beta);
});
