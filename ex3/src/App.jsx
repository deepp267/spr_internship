import React from 'react';

class ListExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['bhavnagar', 'surat', 'ahmadabad','mahuva','gorakhpur','rajkot','vadodara'] 
    };
  }

  render() {
    return (
      <div>
        <h1>List of citys</h1>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListExample;