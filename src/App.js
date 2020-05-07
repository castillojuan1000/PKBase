import React from 'react';
import AddContent from './components/AddContent/AddContent'
import PersistantDrawer from './components/MainContent/Drawer'

import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App" >
      <Switch>
        <Route path='/' component={PersistantDrawer} />
        <Route path='/addcontent' component={AddContent} />
      </Switch>

    </div>
  );
}

export default App;