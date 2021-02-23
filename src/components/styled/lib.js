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
`;

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 5em 1fr;
  grid-template-rows: 40px  1fr 1fr;
  grid-template-areas:
  "sideBar filterInput"
  "sideBar comicList";
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
  
`;

export const FilterSelect = styled.select`
  position: sticky;
  top: 58px;
`;

export const CharacterListWrapper = styled.div`
  grid-area: comicList;
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
