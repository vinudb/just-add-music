import React from 'react';
import 'normalize.css';
import './App.scss';
import MusicList from './components/MusicList';

function App() {
  return (
    <div className="App content-container">
      <h2 className="title">Just Add Music</h2>
      <MusicList />
    </div>
  );
}

export default App;
