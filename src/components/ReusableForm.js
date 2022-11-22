import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Bean Name' />
        <input
          type='text'
          name='origin'
          placeholder='Delivered from' />
        <input
          type='text'
          name='roast'
          placeholder='Coffee Roast type' />
        <input
          type='number'
          name='price'
          placeholder='Price per LB' />
        <input
          type='number'
          name='poundsLeft'
          placeholder='LBs remaining in sack' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;