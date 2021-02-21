import React from 'react';
import PropTypes from 'prop-types';

const FilterComics = ({ cretorList, onChangeSelect }) => (
  <select onChange={e => onChangeSelect(e)}>
    {['All', ...cretorList].map(creator => (
      <option value={creator} key={creator}>{creator}</option>
    ))}
  </select>
);

FilterComics.propTypes = {
  cretorList: PropTypes.instanceOf(Array).isRequired,
  onChangeSelect: PropTypes.func.isRequired,
};

export default FilterComics;
