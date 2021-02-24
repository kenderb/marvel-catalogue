import React from 'react';
import PropTypes from 'prop-types';
import { FilterSelect, FilterWrapper } from './styled/lib';
import ComicList from '../containers/ComicList';

const FilterComics = ({ currentFilter, cretorList, onChangeSelect }) => (
  <>
    <FilterWrapper>
      <b>Filter by creator: </b>
      {' '}
      <FilterSelect onChange={e => onChangeSelect(e)}>
        {['All', ...cretorList].map(creator => (
          <option value={creator} key={creator}>{creator}</option>
        ))}
      </FilterSelect>
    </FilterWrapper>
    <ComicList filter={currentFilter} />
  </>
);

FilterComics.propTypes = {
  cretorList: PropTypes.instanceOf(Array),
  onChangeSelect: PropTypes.func,
  currentFilter: PropTypes.string,
};

FilterComics.defaultProps = {
  cretorList: [],
  onChangeSelect: () => (''),
  currentFilter: '',
};

export default FilterComics;
