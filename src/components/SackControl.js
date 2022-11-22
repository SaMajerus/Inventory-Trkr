import React from 'react';
import NewSackForm from './NewSackForm';
import EditSackForm from './EditSackForm';
import SackList from './SackList';
import SackDetail from './SackDetail'; 

class SackControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSackList: [],
      selectedSack: null,
      editing: false/*, 
      editContents: false*/
    };  
  }

  /* Handles mouse-click events. */
  handleClick = () => {  
    if (this.state.selectedSack != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSack: null,
        editing: false/*, 
        editContents: false*/
      });   {/* This first conditional enables the Method to handle returning to the Queue from the Sack Detail page (and/or a component which is accessed via the Details page, like the Edit form). */} 
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  /* Handles the form submission process (for adding a new sack to the list). */
  handleAddingNewSackToList = (newSack) => {   
    const newMainSackList = this.state.mainSackList.concat(newSack);
    this.setState({mainSackList: newMainSackList,
                  formVisibleOnPage: false });
  }

  /* Handles selection of a sack with a given ID. */
  handleChangingSelectedSack = (id) => {
    const selectedSack = this.state.mainSackList.filter(sack => sack.id === id)[0];
    this.setState({selectedSack: selectedSack});
  }

  /* Handles deletion of a given sack. */
  handleDeletingSack = (id) => {
    const newMainSackList = this.state.mainSackList.filter(sack => sack.id !== id);
    this.setState({
      mainSackList: newMainSackList,
      selectedSack: null
    });
  }

  /* Handles showing the Edit form for a given sack. */ 
  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  /* This method allows a given sack to be Updated/Edited using the Edit form. */
  handleEditingSackInList = (sackToEdit) => {
    const editedMainSackList = this.state.mainSackList
      .filter(sack => sack.id !== this.state.selectedSack.id)
      .concat(sackToEdit);
    this.setState({
        mainSackList: editedMainSackList,
        editing: false,
        selectedSack: null, 
        editContents: false
      });
  }

  /* Handles accessing the Edit form for a given sack (in order to decrement contents' value by 1). */ 
  // handleSaleClick = () => {
  //   console.log("handleSaleClick reached!");
  //   this.setState({editing: true, editContents: true});
  // }

  /* This method decrements a given Sack's 'poundsLeft' prop by 1 (via the Edit form). */
  // handleSaleOfBeansInSack = (beansLeft) => {
  //   const editedMainSackList = this.state.mainSackList
  //     .filter(sack => sack.id !== this.state.selectedSack.id)
  //     .concat(beansLeft);
  //   this.setState({
  //       mainSackList: editedMainSackList,
  //       editing: false,
  //       selectedSack: null, 
  //       editContents: false
  //     });
  // }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    
    if (this.state.editing ) {      
      currentlyVisibleState = <EditSackForm sack = {this.state.selectedSack} onEditSack = {this.handleEditingSackInList} />  //Passes methods down to 'EditSackForm' component as Props. 
      buttonText = "Return to Sack List";
    } else if (this.state.selectedSack != null) {
      currentlyVisibleState = 
      <SackDetail 
        sack = {this.state.selectedSack} 
        onClickingDelete = {this.handleDeletingSack} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Sack List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSackForm onNewSackCreation={this.handleAddingNewSackToList}  />;
      buttonText = "Return to Sack List";
    } else {
      currentlyVisibleState = <SackList sackList={this.state.mainSackList} onSackSelection={this.handleChangingSelectedSack} />;
      // Because a User will actually be clicking on the sack in the Sack component, we will need to pass our new 'handleChangingSelectedSack' method as a Prop.
      buttonText = "Add Sack";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
      </React.Fragment>
    );
  }

}

export default SackControl;
