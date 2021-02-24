import { create } from 'react-test-renderer';
import Error from '../components/Error';

test('Error renders correctly', () => {
  const tree = create(<Error />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Error is not a string', () => {
  const tree = create(<Error />).toJSON();
  expect(tree).not.toBe(typeof String);
});
