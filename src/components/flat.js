 import React from 'react';
import "./flat.css";

class Flat extends React.Component {
  handleClick = ()  => {
    //call parent method selectFlat
    this.props.selectFlat(this.props.flat);
  }
  render() {

    const title = this.props.flat.price
    + this.props.flat.priceCurrency +
    " - " + this.props.flat.name;

    const style = {
      //Template literals ES6
      backgroundImage: `url('${this.props.flat.imageUrl}')` //no keys or hash in JSON background-image = backgroundImage
    };

    return (
      <div className="flat" onClick={this.handleClick}>
        <div className="flat-picture" style={style}></div>
        <div className="flat-title">
          {title}
        </div>
      </div>
    )
  }
}

export default Flat;
