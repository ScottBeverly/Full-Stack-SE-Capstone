import React from 'react';
import Classes from '../classes/classes'
import Home from '../home/home'
import Bosses from '../bosses/bosses'
import {Route, Switch} from 'react-router-dom'




function Main() {
  return (
    <div>
      <Switch>
        <Route exact path = '/'  component={Home}/>
        <Route path='/classes'render={props => <Classes/>}/>
        <Route path='/bosses' render={props => <Bosses/>} />   
        </Switch>
    </div>
  );
}

export default Main;