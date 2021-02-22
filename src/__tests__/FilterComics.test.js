import { create } from 'react-test-renderer';
import FilterComics from '../components/FilterComics';

test('FilterComics renders correctly', () => {
  const tree = create(<FilterComics />).toJSON();
  expect(tree).toMatchSnapshot();
});
