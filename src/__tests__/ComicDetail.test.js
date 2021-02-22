import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers';
import ComicDetail from '../containers/ComicDetail';

test('ComicDetail renders correctly', () => {
  const mockObj = { params: 'some params' };
  const store = createStore(combineReducers, applyMiddleware(thunk));
  const tree = create(
    <Provider store={store}>
      <ComicDetail match={mockObj} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
