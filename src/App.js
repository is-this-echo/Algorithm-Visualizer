import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import PathfindingVisualizer from './Pathfinder/Pathfinder';
import NavBar from './NavBar';
import { Route, Switch, BrowserRouter } from  'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar />
        <Switch>
          <Route exact path = '/' component={PathfindingVisualizer} />
          <Route exact path = '/sortingvisualizer' component={SortingVisualizer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
