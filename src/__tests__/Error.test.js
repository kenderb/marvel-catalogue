import { create } from 'react-test-renderer';
import Error from '../components/Error';

test('Error renders correctly', () => {
  const tree = create(<Error />).toJSON();
  expect(tree).toMatchSnapshot();
});
