import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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

    this.getCows = this.getCows.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  getCows() {
    axios
      .get('/api/cows')
      .then(({ data }) => {
        console.log('getcows: ', data);
        this.setState({ cows: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  saveCow(cow) {
    axios
      .post('/api/cows', cow)
      .then((result) => {
        console.log('savecows: ', result);
        this.getCows();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.cows);
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
