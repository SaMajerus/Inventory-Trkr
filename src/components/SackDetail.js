import React from "react";
import PropTypes from "prop-types";

function SackDetail(props){
  const { sack, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h1>Sack Detail</h1>
      <h3>{sack.name} - {sack.origin}</h3>
      <p>Roast: {sack.roast}</p>
      <p>Price per LB (in USD): {sack.price}</p>
      <p><em>Pounds remaining: {sack.poundsLeft}LBs</em></p>
      <button onClick={ props.onClickingEdit }>Update Sack</button>

      {/* if (sack.id.poundsLeft.value === 0) {   //Show 'Remove Empty Sack' button if no beans remain in given Sack.
        <button onClick={()=> props.onClickingDelete(sack.id) }>Remove Empty Sack</button>
      } else {
        <button onClick={()=> props.onClickingDecrement(sack.id) }>Sell 1 Pound</button>
      } */}
      
      <button onClick={()=> onClickingDelete(sack.id) }>Remove Empty Sack</button>
      <hr/>
    </React.Fragment>
  );
}

SackDetail.propTypes = {
  sack: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default SackDetail;