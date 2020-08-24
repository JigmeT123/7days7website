import React from 'react';
import Homepage from './components/homepage/Homepage';
import VideoLink from './components/vidLink/VideoLink';
import Rules from './components/rulesPage/Rules';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/tutorial' component={VideoLink}></Route>
        <Route exact path='/rules' component={Rules}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
