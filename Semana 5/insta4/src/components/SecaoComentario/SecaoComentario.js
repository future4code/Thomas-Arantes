import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		inputComentText: ""
	}

	onChangeComentario =(event) => {
		this.setState({inputComentText: event.target.value})
		console.log(event.target.value)
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.inputComentText}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
