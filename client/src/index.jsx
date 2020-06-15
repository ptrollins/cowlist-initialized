import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import CowForm from './cowForm';
import CowList from './cowList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
    };

    this.getCows = this.getCows.bind(this);
    this.saveCow = this.saveCow.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  getCows() {
    axios
      .get('/api/cows')
      .then(({ data }) => {
        this.setState({ cows: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  saveCow(cow) {
    console.log(cow);
    axios
      .post('/api/cows', cow)
      .then((result) => {
        this.getCows();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <header>
          <h1>Cow List!</h1>
        </header>
        <CowForm saveCow={this.saveCow} />
        <CowList cows={this.state.cows} />
      </>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
