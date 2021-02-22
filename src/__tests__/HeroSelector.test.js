import { create } from 'react-test-renderer';
import HeroSelector from '../components/HeroSelector';

test('HeroSelector renders correctly', () => {
  const tree = create(<HeroSelector />).toJSON();
  expect(tree).toMatchSnapshot();
});
