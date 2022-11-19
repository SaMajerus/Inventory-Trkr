import React from "react";
import PropTypes from "prop-types";

function Sack(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSackClicked(props.id)}>
        { /* We add a div with an onClick function. Don't forget to close out the div below! */}
        <h3>{props.name} - {props.origin}</h3>
        <p>Roast:  {props.roast}</p>
        <p><strong>Price (per LB):  {props.price}</strong></p>
        <p><em>LBs remaining:  {props.poundsLeft}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Sack.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number, 
  poundsLeft: PropTypes.number,
  id: PropTypes.string, 
  whenSackClicked: PropTypes.func 
};  

export default Sack;
