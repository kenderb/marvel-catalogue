import { create } from 'react-test-renderer';
import ComicCard from '../components/Error';

test('ComicCard renders correctly', () => {
  const tree = create(<ComicCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
