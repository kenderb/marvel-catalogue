import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ComicDetail from '../containers/ComicDetail';
import CharacterForm from '../containers/ComicForm';
import CharacterList from '../containers/ComicList';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact>
          <CharacterForm />
          <CharacterList />
        </Route>
        <Route path="/comics/:id" component={ComicDetail} />

      </Switch>
    </div>
  </Router>
);

export default App;
