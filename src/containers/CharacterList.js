import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';

const CharacterList = ({ characters, fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);
  console.log('from the CharacterLists', characters);
  return (<div>Character List</div>);
};

CharacterList.propTypes = {
  characters: PropTypes.instanceOf(Array).isRequired,
  fetchCharacters: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({ characters: state.characters });

export default connect(mapStateToProps, { fetchCharacters })(CharacterList);
