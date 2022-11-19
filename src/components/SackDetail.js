import React from "react";
import PropTypes from "prop-types";

function SackDetail(props){
  const { sack, onClickingDelete } = props; //new code

  return (
    <React.Fragment>
      <h1>Sack Detail</h1>
      <h3>{sack.name} - {sack.origin}</h3>
      <p>Roast:  {sack.roast}</p>
        <p><strong>Price (per LB):  {sack.price}</strong></p>
        <p><em>LBs remaining:  {sack.poundsLeft}</em></p>
      <button onClick={ props.onClickingEdit }>Update Sack</button>
      <button onClick={()=> props.onClickingDelete(sack.id) }>Remove Empty Sack</button>
      <hr/>
    </React.Fragment>
  );
}

SackDetail.propTypes = {
  sack: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func // new code
};

export default SackDetail;