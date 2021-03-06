import styled from 'styled-components';

export const Header = styled.nav`
  z-index: 1;
  position: sticky;
  top: 0; 
`;

export const NavUl = styled.ul`
  background-color: var(--secondary-color);
  padding: 0.5em;
  list-style: none;
  display: flex;
  align-items: center;
  img {
    width: 6em;
  }
`;

export const RigthNavWrapper = styled.li`
  text-transform: uppercase;
  margin-left: auto;
  a {
    font-weight: bold;
    text-decoration: none;
    color: white;
  }
`;

export const HeroButton = styled.button`
  border: solid 1px var(--primary-color);
  margin: 0.5em;
  width: 5em;
  padding: 0.3rem;
  border-radius: 1em;
  box-shadow: 10px 10px 29px -19px rgba(0,0,0,0.75);
  img {
    border-radius: 0.5em;
  }
  @media screen and (min-width: 1024px) {
    width: 7em;
  }
`;

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 5em 1fr;
  grid-template-rows: 60px  1fr 1fr;
  grid-template-areas:
  "sideBar filterInput"
  "sideBar comicList";
  @media screen and (min-width: 1024px) {
    grid-template-columns: 7.5em 1fr;
  }
`;

export const HeroWrapper = styled.div`
  grid-area: sideBar;
  background-color: var(--primary-color);
  position: sticky;
  top: 58px;
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  @media screen and (min-width: 1024px) {
    width: 7em;
  }
  
`;

export const CharacterListWrapper = styled.div`
margin: auto;
  grid-area: comicList;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    div {
      border-radius: 1em;
      margin: 0.7em;
    }
  }
  @media screen and (min-width: 1024px) {
    max-width: 1300px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ComicCardWrapper = styled.div`
  margin: 0.5em 0  0.5em 0;
  margin-top: 1em;
  padding: 0.8em;
  box-shadow: 10px 10px 29px -19px rgba(0,0,0,0.75);
  background-color: var(--gray-color);
  h2 {
    font-size: 1.08em;
    padding: 0.2em;
    text-transform: uppercase;
    margin-bottom: 0.3em;
  }
  img {
    border-radius: 0.8em;
  }
  div {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  a {
    font-size: 1.1em;
    font-weight: bold;
    width: 6em;
    margin-left: auto;
    margin-bottom: 0.4em;
    display: block;
    background-color: var(--primary-color);
    color: white;
    padding: 0.5em;
    text-align: center;
    text-decoration: none;
    border-radius: 0.3em;
  }
`;

export const FilterWrapper = styled.div`
  height: 4em;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  b {
    margin-right: 1em;
    font-size: 1em;
  }
`;

export const FilterSelect = styled.select`
  border-radius: 0.5em;
  border: solid var(--secondary-color) 3px;
  position: sticky;
  top: 58px;
  padding: 0.5em;
  font-size: 0.7em;
  @media screen and (min-width: 768px) {
    font-size: 1em;
  }
`;

export const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 900px;
  background-color: var(--gray-color);
  padding: 1em;
  border-radius: 1em;
  margin: auto;
  margin-top: 0.5em;
  h1 {
    padding: 0 0.5em 0 0.5em;
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
  img {
    border-radius: 1em;
    box-shadow: 10px 10px 29px -19px rgba(0,0,0,0.75);
  }
  ul {
    list-style: none;
    li {
      padding: 0.5em;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 2em;
    grid-template-columns: 30em 1fr;
    div {
      text-align: justify;
    }
    ul {
      margin-top: 2em;
      margin-left: 1em;
    }
  }
`;
