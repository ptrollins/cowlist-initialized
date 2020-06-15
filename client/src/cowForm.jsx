import React from 'react';

class CowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowName: '',
      cowDesc: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    let value = event.target.value;
    let key = event.target.getAttribute('name');

    this.setState({ [key]: value });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.saveCow({
      name: this.state.cowName,
      description: this.state.cowDesc,
    });
    this.setState({
      cowName: '',
      cowDesc: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label htmlFor="cowName">Name: </label>
        <input
          type="text"
          name="cowName"
          value={this.state.cowName}
          onChange={this.changeHandler}
        />
        <label htmlFor="cowName">Description: </label>
        <textarea
          rows="4"
          name="cowDesc"
          value={this.state.cowDesc}
          onChange={this.changeHandler}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CowForm;
