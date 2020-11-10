import React from 'react';
import './App.css';
import axios from 'axios';
import UserListPage from './components/UserListPage/UserLIstPage'
import FormPage from './components/FormPage/FormPage'

class App extends React.Component {
  state = {
    formPage: true
  }


  changePage = () => {
    this.setState({formPage : !this.state.formPage})
  }
  
  render (){

    const currentPage = this.state.formPage ? (<FormPage />) : (<UserListPage />)
    
    return (
      <div className="App">
        
        <div>
          {currentPage}
          <button onClick={this.changePage} > Mudar de Página </button>
        </div> 

      </div>
    );
  }
}

export default App;
