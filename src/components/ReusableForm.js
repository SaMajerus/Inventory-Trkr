import React from "react";
import {useState} from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  //Hooks
  const [name, setName] = useState(props.currSack ? props.currSack.name : null);
  const [origin, setOrigin] = useState(props.currSack ? props.currSack.origin : null);
  const [roast, setRoast] = useState(props.currSack ? props.currSack.roast : null);
  const [price, setPrice] = useState(props.currSack ? props.currSack.price : null);
  const [poundsLeft, setPoundsLeft] = useState(props.currSack ? props.currSack.poundsLeft : null);

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)} 
          placeholder='Bean Name' />
        <input
          type='text'
          name='origin'
          value={origin}
          onChange={(e) => setOrigin(e.target.value)} 
          placeholder='Delivered from' />
        <input
          type='text'
          name='roast'
          value={roast}
          onChange={(e) => setRoast(e.target.value)}
          placeholder='Coffee Roast type' />
        <input
          type='number'
          name='price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder='Price per LB' />
        <input
          type='number'
          name='poundsLeft'
          value={poundsLeft}
          onChange={(e) => setPoundsLeft(e.target.value)}
          placeholder='LBs remaining in sack' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  currSack: PropTypes.object,   //For 'EditSackForm'
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;