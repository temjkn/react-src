import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Profile from './components/profile/Profile';
import News from './components/news/News';
import Setting from './components/setting/Setting';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/Friends/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header/>
        <Nav/>
        <div className='content'>
          <Route path="/profile" render={()=>
            <Profile />
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
          <Route path="/Setting" component={Setting}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
