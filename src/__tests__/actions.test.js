import {
  fetchComicsSuccess, fetchComicsLoading,
  fetchComicsError, filterByCreatorSuccess,
} from '../actions/actionTypes';

describe('Action Types for Comics', () => {
  it('fetchComicsSuccess return the right action type', () => {
    const action = fetchComicsSuccess();
    expect(action.type).toStrictEqual('FETCH_COMICS');
  });
  it('fetchComicsSuccess return the right action type', () => {
    const action = fetchComicsSuccess();
    expect(action.type).not.toBe('');
  });
  it('fetchComicsLoading return the right action type', () => {
    const action = fetchComicsLoading();
    expect(action.type).toStrictEqual('LOADING_COMICS');
  });
  it('fetchComicsLoading return the right action type', () => {
    const action = fetchComicsLoading();
    expect(action.type).not.toBe('');
  });
  it('fetchComicsError return the right action payload', () => {
    const action = fetchComicsError();
    expect(action.type).toStrictEqual('ERROR_COMICS');
  });
  it('fetchComicsError return the right action payload', () => {
    const action = fetchComicsError();
    expect(action.type).not.toBe('');
  });
  it('filterByCreatorSuccess return the right action payload', () => {
    const action = filterByCreatorSuccess('comic one');
    expect(action.type).toStrictEqual('FILTER_COMICS');
  });
  it('filterByCreatorSuccess return the right action payload', () => {
    const action = filterByCreatorSuccess('comic one');
    expect(action.type).not.toBe('');
  });
});
