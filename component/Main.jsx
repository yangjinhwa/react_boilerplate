import React from 'react';
import Sub from 'component/Sub';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        hello world!
        <Sub />
      </div>
    )
  }
}

export default Main;