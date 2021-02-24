/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComicDetail } from '../actions';
import { DetailWrapper } from '../components/styled/lib';

const ComicDetail = ({ details, match, fetchComicDetail }) => {
  const { id } = match.params;
  useEffect(() => {
    fetchComicDetail(id);
  }, [fetchComicDetail]);

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
      <DetailWrapper>
        <div>
          <h1>
            { title }
          </h1>
          <img src={`${thumbnailSplit.join('')}.${thumbnail.extension}`} alt="" srcSet="" />
        </div>
        <ul>
          <li>
            <b>Number of pages: </b>
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
      </DetailWrapper>
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
