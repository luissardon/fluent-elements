import { Usage } from '../src/usage';

test('usage', () => {
  expect(new Usage('usage')).toBeInstanceOf(Usage);
});
