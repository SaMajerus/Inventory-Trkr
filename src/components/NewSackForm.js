import React from "react";
import PropTypes from "prop-types"; 
import { v4 } from 'uuid'; 
import ReusableForm from "./ReusableForm";

function NewSackForm(props){
  function handleNewSackFormSubmission(event) {
    event.preventDefault();
    props.onNewSackCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
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