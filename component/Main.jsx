import React from 'react';
import Sub from 'component/Sub';
import SVG from 'react-svg-inline';
import IconWheel from '../assets/icon/icon_wheel.svg';
import '../scss/sub.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="dv">
        hello world!
        <Sub />
        <SVG
          className="icon_wheel"
          // fill="red"
          svg={IconWheel}
        />
      </div>
    )
  }
}

export default Main;