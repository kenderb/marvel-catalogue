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
  margin: 0.5em;
  width: 10em;
  border-radius: 1em;
  padding: 1em;
`;

export const HeroWrapper = styled.div`
  background-color: var(--primary-color);
  position:fixed;
 
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainWrapper = styled.main`
  display: flex
`;
