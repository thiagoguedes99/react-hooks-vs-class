import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `Você clicou ${this.state.count} vezes`;
    console.log('efeito só no inicial')
  }

  componentDidUpdate() {
    document.title = `Você clicou ${this.state.count} vezes`;
    console.log('useEfect geral')
  }

  multiplica = (e) => {
    this.setState({count: e.target.value})
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          clicar
        </button>
        <br/>
        <p>valor atual: {this.state.count}</p>

        <br/>
        <input type="text" onChange={(e) => this.multiplica(e)}/> 
      </div>
    );
  }
}

export default App