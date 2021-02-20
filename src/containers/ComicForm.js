import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComics } from '../actions';

const ComicForm = ({ fetchComics }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSumit = e => {
    e.preventDefault();
    fetchComics(inputValue);
    e.target.reset();
  };
  const handleOnChnage = e => {
    setInputValue(e.target.value);
  };
  return (
    <form onSubmit={e => handleSumit(e)}>
      <input type="text" value={inputValue} onChange={e => handleOnChnage(e)} />
      <button type="submit">Submit</button>
    </form>
  );
};

ComicForm.propTypes = {
  fetchComics: PropTypes.func.isRequired,
};

export default connect(null, { fetchComics })(ComicForm);
