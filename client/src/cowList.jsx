import React from 'react';

class CowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addCow() {}

  render() {
    return (
      <section>
        {!this.props.cow ? (
          <></>
        ) : (
          <article>
            <h1>{this.props.cow.name}</h1>
            <p>{this.props.cow.description}</p>
          </article>
        )}
        <article>
          <ul>
            {this.props.cows.map((cow) => {
              return <CowListItem cow={cow} />;
            })}
          </ul>
        </article>
      </section>
    );
  }
}

function CowListItem({ cow }) {
  return (
    <li key={cow.name} value={cow.name}>
      {cow.name}
    </li>
  );
}

export default CowList;
