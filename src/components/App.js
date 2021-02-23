import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ComicDetail from '../containers/ComicDetail';
import NavBar from './NavBar';
import CharacterForm from '../containers/ComicForm';
import ComicList from '../containers/ComicList';
import { MainWrapper } from './styled/lib';

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <MainWrapper>
          <CharacterForm />
          <ComicList />
        </MainWrapper>
      </Route>
      <Route path="/comics/:id" component={ComicDetail} />
    </Switch>
  </Router>
);

export default App;
