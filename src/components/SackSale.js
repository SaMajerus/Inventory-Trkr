import React from "react";
import PropTypes from "prop-types";
// import EditSackForm from "./EditSackForm";

function SackSale(lbsLeft){
  const { sack } = currBeansRem;
  const lbsLeft = 

  /* The following function "captures Form values and triggers the 'handleEditingSackInList' method in 'SackControl'. ...", (Lsn 38, "Behavior #2" -> "Add Event Handler in 'EditSackForm' Along with Function to Capture Form Values"). */
  function handleEditSackFormSubmission(event) {
    event.preventDefault();
    props.onEditSack({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: sack.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditSackFormSubmission} /* new code */ 
        buttonText="Update Sack" />
    </React.Fragment>
  );
}

SackSale.propTypes = {
  sack: PropTypes.object,
  onEditSack: PropTypes.func
};

export default SackSale;