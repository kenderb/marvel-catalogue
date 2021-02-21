import React from 'react';
import PropTypes from 'prop-types';

const ComicDetail = ({ match }) => {
  const { id } = match.params;
  return (
    <div>
      comic with ID:
      {id}
      {' '}
      detail
    </div>
  );
};

ComicDetail.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default ComicDetail;
