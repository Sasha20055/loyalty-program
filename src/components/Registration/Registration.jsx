import React from "react";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  
}

const Registration = (props) => {
  return <div>
    {props.stateTest}
    {props.text}
  </div>
}

export default connect(mapStateToProps)(Registration)