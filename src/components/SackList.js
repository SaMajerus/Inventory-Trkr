import React from "react";
import Sack from "./Sack";
import PropTypes from "prop-types";

/*
const mainSackList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Child component isn\'t rendering.'
  }
];   */

function SackList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.sackList.sort().map((sack) =>  //Loop thru the list passed down from 'SackControl'. 
        <Sack
          whenSackClicked = { props.onSackSelection }
          onClickingDecrement = { props.editSackContents }
          name={sack.name}
          origin={sack.origin}
          roast={sack.roast}
          price={sack.price}
          poundsLeft={sack.poundsLeft}
          id={sack.id}
          key={sack.id}/>
      )}
    </React.Fragment>
  );
}

//Add propTypes for sackList 
SackList.propTypes = {
  sackList: PropTypes.array, 
  onSackSelection: PropTypes.func, 
  editSackContents: PropTypes.func
};

export default SackList;