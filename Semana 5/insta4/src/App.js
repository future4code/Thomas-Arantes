import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: <img src = 'https://picsum.photos/50/51'/>,
        fotoPost: <img src = 'https://picsum.photos/200/151'/>
      },
      {
        nomeUsuario: 'Caio',
        fotoUsuario: <img src = 'https://picsum.photos/50/52'/>,
        fotoPost: <img src = 'https://picsum.photos/200/152'/>
      },
      {
        nomeUsuario: 'Laís',
        fotoUsuario: <img src = 'https://picsum.photos/50/53'/>,
        fotoPost: <img src = 'https://picsum.photos/200/153'/>
      }
    ],
    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };
    const novosPosts = [...this.state.posts, novoPost]
    this.setState({posts: novosPosts})
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
      const listaDePosts = this.state.posts.map((post) => {
        return (
          <div className = "post-container">
            <p className = "post-header">{post.nomeUsuario}</p>
            <p className = "user-photo">{post.fotoUsuario}</p>
            <p className = "post-photo">{post.fotoPost}</p>
          </div>
        );
      });
      return(
      <div className={'app-container'}>
        <div>
          {listaDePosts}
        </div>
        <div>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Link da Foto de Perfil"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Link da Foto para o post"}
          />
          <button onClick={this.adicionaPost}>Postar</button>
        </div>
      </div>
      );
  }
}

export default App;
