import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/home';
import ActionItem from './pages/action-item';

class App extends React.Component {
  render() {
    return (
      <>
        <Toaster position="top-right" reverseOrder={false} />
        <Router>
          <Route path="/:id" exact>
            <ActionItem />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Router>
      </>
    );
  }
}

export default App;
