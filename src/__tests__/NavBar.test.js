import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import NavBar from '../components/NavBar';

test('NavBar renders correctly', () => {
  const tree = create(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
