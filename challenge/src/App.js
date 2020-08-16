import React from 'react';
import Homepage from './components/homepage/Homepage';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Homepage />
      <Switch>
        {/* <Route exact path='/' component={}></Route> */}
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
