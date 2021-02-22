import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ComicDetail from '../containers/ComicDetail';
import NavBar from './NavBar';
import CharacterForm from '../containers/ComicForm';
import CharacterList from '../containers/ComicList';

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <CharacterForm />
        <CharacterList />
      </Route>
      <Route path="/comics/:id" component={ComicDetail} />
    </Switch>
  </Router>
);

export default App;
