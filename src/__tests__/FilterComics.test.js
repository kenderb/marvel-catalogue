import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers';
import FilterComics from '../components/FilterComics';

test('FilterComics renders correctly', () => {
  const store = createStore(combineReducers, applyMiddleware(thunk));
  const tree = create(
    <Provider store={store}>
      <FilterComics />
    </Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
