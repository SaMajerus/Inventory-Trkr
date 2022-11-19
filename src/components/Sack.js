import React from "react";
import PropTypes from "prop-types";

function Sack(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSackClicked(props.id)}>
        { /* We add a div with an onClick function. Don't forget to close out the div below! */}
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Sack.propTypes = {
  names: PropTypes.string,
  type: PropTypes.string,
  poundsLeft: PropTypes.number,
  id: PropTypes.string, 
  whenSackClicked: PropTypes.func 
};

export default Sack;
