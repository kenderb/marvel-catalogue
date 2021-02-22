import React from 'react';
import PropTypes from 'prop-types';
import { FilterSelect } from './styled/lib';

const FilterComics = ({ cretorList, onChangeSelect }) => (
  <FilterSelect onChange={e => onChangeSelect(e)}>
    {['All', ...cretorList].map(creator => (
      <option value={creator} key={creator}>{creator}</option>
    ))}
  </FilterSelect>
);

FilterComics.propTypes = {
  cretorList: PropTypes.instanceOf(Array),
  onChangeSelect: PropTypes.func,
};

FilterComics.defaultProps = {
  cretorList: [],
  onChangeSelect: () => (''),
};

export default FilterComics;
