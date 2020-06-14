import React from 'react';

class CowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cow: {
        name: '',
        description: '',
      },
    };
    this.showCow = this.showCow.bind(this);
  }

  showCow(event) {
    const data = event.target.dataset,
      cowName = data.name,
      cowDesc = data.description;
    this.setState({ cow: { name: cowName, description: cowDesc } });
  }

  render() {
    return (
      <section>
        {!this.state.cow ? (
          <></>
        ) : (
          <article>
            <h1>{this.state.cow.name}</h1>
            <p>{this.state.cow.description}</p>
          </article>
        )}
        <article>
          <ol>
            {this.props.cows.map((cow) => {
              return (
                <CowListItem
                  cow={cow}
                  handleClick={this.showCow}
                  key={cow.name}
                />
              );
            })}
          </ol>
        </article>
      </section>
    );
  }
}

function CowListItem({ cow, handleClick }) {
  return (
    <li
      data-name={cow.name}
      data-description={cow.description}
      onClick={handleClick}
    >
      {cow.name}
    </li>
  );
}

export default CowList;
