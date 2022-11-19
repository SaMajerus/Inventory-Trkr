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
      {props.ticketList.map((ticket) =>  //Loop thru the list passed down from 'SackControl'. 
        <Sack
          whenSackClicked = { props.onSackSelection }
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id}/>
      )}
    </React.Fragment>
  );
}

//Add propTypes for ticketList 
SackList.propTypes = {
  ticketList: PropTypes.array, 
  onSackSelection: PropTypes.func
};

export default SackList;