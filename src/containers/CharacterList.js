import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';
import CharacterCard from '../components/CharacterCard';

const CharacterList = ({ characters, fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  console.log('from the CharacterLists', characters);

  if (characters.length > 0) {
    return (
      <div>
        {characters.map(character => (
          <CharacterCard
            name={character.name}
            thumbnail={character.thumbnail}
            description={character.description}
            key={character.id}
          />
        ))}
      </div>
    );
  }

  return null;
};

CharacterList.propTypes = {

  characters: PropTypes.instanceOf(Array).isRequired,
  fetchCharacters: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({ characters: state.characters });

export default connect(mapStateToProps, { fetchCharacters })(CharacterList);
