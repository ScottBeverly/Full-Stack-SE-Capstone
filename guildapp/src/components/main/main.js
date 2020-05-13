import React,{useState, useEffect}  from 'react';
import Classes from '../classes/classes'
import Home from '../home/home'
import Bosses from '../bosses/bosses'
import Players from '../players/players'
import {Route, Switch} from 'react-router-dom'




function Main(props) {


  return (
    <div>
      <Switch>
        <Route exact path = '/'  component={Home}/>
        <Route path='/classes'render={props => <Classes/>}/>
        <Route path='/bosses' render={props => <Bosses/>} />   
        <Route path='/players' render={props => <Players/>}/>
        </Switch>
    </div>
  );
}

export default Main;