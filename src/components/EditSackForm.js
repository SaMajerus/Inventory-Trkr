import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditSackForm(props){
  const { sack } = props;

  /* The following function "captures Form values and triggers the 'handleEditingSackInList' method in 'SackControl'. ...", (Lsn 38, ''Behavior #2'' -> ''Add Event Handler in 'EditSackForm' Along with Function to Capture Form Values''). */
  function handleEditSackFormSubmission(event) {
    event.preventDefault();
    props.onEditSack({name: event.target.name.value, origin: event.target.origin.value, roast: event.target.roast.value, price: event.target.price.value, poundsLeft: event.target.poundsLeft.value, id: sack.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditSackFormSubmission}  
        buttonText="Update Sack" />
    </React.Fragment>
  );
}

EditSackForm.propTypes = {
  sack: PropTypes.object,
  onEditSack: PropTypes.func
};

export default EditSackForm;