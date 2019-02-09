import React from 'react';
import connect from "react-redux/es/connect/connect";

const Controls = props => {
  const {authorizationToken} = props.authorizationToken;

  if (!authorizationToken) return null;

  return (
    <div className="controls">
      filter
      menu
    </div>
  );
};

const mapStateToProps = (state) => ({authorizationToken: state});

export default connect(mapStateToProps)(Controls);

