import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import News from './components/news/News';
import Setting from './components/setting/Setting';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/Friends/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';

function App(props) {
  return (
    <BrowserRouter>
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
          <Route path="/Setting" component={Setting}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
