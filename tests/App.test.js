import { jsxElement } from '@babel/types';
import App from '../App';

test('tests JSX is returned by App', () => {
  expect(App()).toContain(jsxElement);
});