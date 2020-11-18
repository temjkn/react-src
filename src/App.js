import React, { Component } from 'react';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {initializeApp} from './redux/app-reduser'

import './App.css';

import Nav from './components/nav/Nav';
import News from './components/news/News';
import Setting from './components/setting/Setting';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/Friends/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import Preloader from './components/Preloader';
import { compose } from 'redux';

class App extends Component {
  componentDidMount(){
    this.props.initializeApp();
  }
  render(){
    if(!this.props.initialized) {
      return <Preloader/>
    }
    return (
        <div className="app-wraper">
          <HeaderContainer/>
          <Nav/>
          <div className='content'>
            <Route path="/profile/:userId?" render={()=>
              <ProfileContainer />
            }
            />
            <Route path="/dialogs" render = { ()=> 
              <DialogsContainer />
            }
            />
            <Route path="/news" component={News}/>
            <Route path="/users" render = { ()=> 
              <UsersContainer />
            }/>
            <Route path="/setting" component={Setting}/>
            <Route path="/login" render = { ()=> 
              <Login />
            }/>
          </div>
        </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized : state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

// export default compose(
//   withRouter,
//   connect(mapStateToProps,{initializeApp})
//   )(App);
