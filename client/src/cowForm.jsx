import React from 'react';

class CowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowName: '',
    };

    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.descriptionChangeHandler = this.descriptionChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    let cowName = event.target.value;
    console.log(cowName);
    this.setState({ cowName: cowName });
  }

  submitHandler(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="cowname"
          value={this.state.cowName}
          onChange={this.nameChangeHandler}
        />
        <input
          type="textarea"
          name="cowdescription"
          value={this.state.cowDescription}
          onChange={this.descriptionChangeHandler}
        />
        <input type="submit" value="Submit" onSubmit={this.submitHandler} />
      </form>
    );
  }
}

export default CowForm;
