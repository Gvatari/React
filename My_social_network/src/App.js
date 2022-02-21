import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/ButtonNavbar/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/ButtonNavbar/News/News';
import Music from './components/ButtonNavbar/Music/Music';
import Settings from './components/ButtonNavbar/Settings/Settings';


const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<Dialogs store={props.store} />} />
          <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
