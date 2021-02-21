/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComicDetail } from '../actions';

const ComicDetail = ({ details, match, fetchComicDetail }) => {
  const { id } = match.params;
  useEffect(() => {
    fetchComicDetail(id);
  }, []);

  if (details.id) {
    const {
      title, pageCount, thumbnail, description,
      stories, characters,
    } = details;

    const createMarkup = () => (
      { __html: description }
    );

    const { items } = stories;
    const { items: characterList } = characters;
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
          <li>
            <b>Description: </b>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </li>
          <li>
            <b>
              Characters:
            </b>
            {' '}
            {characterList ? characterList.map(item => <p key={item.name}>{item.name}</p>) : ''}
          </li>
          <li>
            <b>
              Stories:
            </b>
            {' '}
            {items ? items.map(item => <p key={item.name}>{item.name}</p>) : ''}
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
