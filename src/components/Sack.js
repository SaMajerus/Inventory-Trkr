import React from "react";
import PropTypes from "prop-types";

function Sack(props){

  // Prevents value of 'poundsLeft' from being decremented to a value less than 0.
  function isSackEmpty(){
    if(props.poundsLeft > 0){
      props.onClickingDecrement({name: props.name, origin: props.origin, roast: props.roast, price: props.price, poundsLeft: props.poundsLeft-1, id: props.id}); 
    }
  }
  
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSackClicked(props.id)}>
        <h3>{props.name} - {props.origin}</h3>
        <p>Roast:  {props.roast}</p>
        <p><strong>Price (per LB):  {props.price}</strong></p>
        <p><em>LBs remaining:  {props.poundsLeft}</em></p>
        <hr/>
      </div>
      <button onClick={()=> isSackEmpty() }>Sell 1 Pound</button>
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
  whenSackClicked: PropTypes.func, 
  onClickingDecrement: PropTypes.func
};  

export default Sack;
