import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComicDetail } from '../actions';

const ComicDetail = ({ details, match, fetchComicDetail }) => {
  const { id } = match.params;
  useEffect(() => {
    fetchComicDetail(id);
  }, []);

  console.log(details);
  if (details.id) {
    const { title, pageCount, thumbnail } = details;
    const thumbnailSplit = thumbnail.path.split('//');
    thumbnailSplit[0] = 'https://';
    return (
      <div>
        <h1>
          { title }
        </h1>
        <ul>
          <li>
            <img src={`${thumbnailSplit.join('')}.${thumbnail.extension}`} alt="" srcSet="" />
          </li>
          <li>
            Number of pages:
            {' '}
            { pageCount }
          </li>

        </ul>
      </div>
    );
  }
  return <div>Loading..</div>;
};

ComicDetail.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  details: PropTypes.instanceOf(Object).isRequired,
  fetchComicDetail: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ details: state.details });
export default connect(mapStateToProps, { fetchComicDetail })(ComicDetail);
