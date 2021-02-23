import React from 'react';
import PropTypes from 'prop-types';
import { FilterSelect, FilterWrapper } from './styled/lib';

const FilterComics = ({ cretorList, onChangeSelect }) => (
  <FilterWrapper>
    <b>Filter by creator: </b>
    {' '}
    <FilterSelect onChange={e => onChangeSelect(e)}>
      {['All', ...cretorList].map(creator => (
        <option value={creator} key={creator}>{creator}</option>
      ))}
    </FilterSelect>
  </FilterWrapper>
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
