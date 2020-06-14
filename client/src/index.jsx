import React from 'react';
import ReactDOM from 'react-dom';
import CowList from './cowList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      cow: {
        name: '',
        description: '',
      },
    };
  }

  render() {
    return (
      <>
        <header>
          <h1>Cow List!</h1>
        </header>

        <CowList cows={this.state.cows} />
      </>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
