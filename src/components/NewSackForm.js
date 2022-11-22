import React from "react";
import PropTypes from "prop-types"; 
import { v4 } from 'uuid'; 
import ReusableForm from "./ReusableForm";

function NewSackForm(props){
  function handleNewSackFormSubmission(event) {
    event.preventDefault();
    props.onNewSackCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      roast: event.target.roast.value, 
      price: event.target.price.value, 
      poundsLeft: event.target.poundsLeft.value,
      id: v4()
    });
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewSackFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewSackForm.propTypes = {
  onNewSackCreation: PropTypes.func
};

export default NewSackForm;
