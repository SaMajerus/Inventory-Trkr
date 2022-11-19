import React from "react";
import PropTypes from "prop-types";

function SackDetail(props){
  const { sack, onClickingDelete } = props; //new code

  return (
    <React.Fragment>
      <h1>Sack Detail</h1>
      <h3>{sack.location} - {sack.names}</h3>
      <p><em>{sack.issue}</em></p>
      <button onClick={ props.onClickingEdit }>Update Sack</button> { /* new code */ }
      <button onClick={()=> props.onClickingDelete(sack.id) }>Close Sack</button>
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