import React from 'react';
import './App.css';
import Home from './components/home';
import Matches from './components/matches';
import logo from './components/imgs/astromatch.png';
import {AppContainer, CardContainer, LogoImg, HeaderContainer} from './components/styles.js'
import CheckIcon from '@material-ui/icons/Check';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const buttonTheme =createMuiTheme({
  palette: {
      type: "dark",
      primary: {
          main: "#6F2B8C"
      },
      secondary: {
          main: "#6F2B8C"
      }
  }
});

class App extends React.Component {
  state = {
    homePage: true,
  }

  pageSelect = () => {
    this.setState({homePage : !this.state.homePage})
    console.log(this.state.homePage)
  }

  render(){
    const renderCorrectScreen = () => {
      if(this.state.homePage === true) {
        return <Home></Home>
      }
      else if(this.state.homePage === false){
        return <Matches></Matches>
      }
    }
    return (
      <AppContainer>
        <CardContainer>
          <HeaderContainer>
            <LogoImg src = {logo} />
            <MuiThemeProvider theme={buttonTheme}>
              <CheckIcon fontSize="large" color = "primary" onClick={this.pageSelect} />
            </MuiThemeProvider>
          </HeaderContainer>
          {renderCorrectScreen()}
        </CardContainer>
      </AppContainer>
    );
  }
}
export default App;
