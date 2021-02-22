import styled from 'styled-components';

export const Header = styled.nav`
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
  margin: 0.1em;
  width: 7.5em;
  border-radius: 1em;
  padding: 0.5em;
`;

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 7em 1fr;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterSelect = styled.select`
  position: sticky;
  top: 58px;
`;
