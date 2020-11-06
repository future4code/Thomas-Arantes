import React from 'react';
import './App.css';
import AddPlaylistInput from './components/AddPlaylistInput';
import AllPlaylists from './components/AllPlaylists';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render () {
    return (
      <PageContainer className="App">
        <AddPlaylistInput />
        <AllPlaylists />
      </PageContainer>
  );
  }
}

export default App;
