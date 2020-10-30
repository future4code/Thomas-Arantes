import React from 'react';
import './App.css';
import AddPlaylistInput from './components/AddPlaylistInput';
import AddSongs from './components/addSongs';
import AllPlaylists from './components/AllPlaylists';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <AddPlaylistInput />
        <AllPlaylists />
      </div>
  );
  }
}

export default App;
