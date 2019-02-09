import React from 'react';
import {connect} from "react-redux";

const Jogs = props => {
  const {authorizationToken} = props.authorizationToken;

  return authorizationToken ? <div>Jogs list</div> : <p>Access is denied</p>;
};

const mapStateToProps = (state) => ({authorizationToken: state});

export default connect(mapStateToProps, {})(Jogs);
