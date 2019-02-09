import React from 'react';
import './let-me-in.css';
import Bear from "../../components/Bear";
import Button from "../../components/Button";
import {stringify} from "qs";
import axios from "axios";
import {setAuthorizationToken} from '../../actions';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

axios.defaults.baseURL = 'https://jogtracker.herokuapp.com/api/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Accept'] = 'application/json';

class LetMeIn extends React.Component {
  state = {
    redirectToReferrer: false,
    error: null
  };

  componentDidMount() {
    if (this.props.authorizationToken.authorizationToken) {
      this.setState({redirectToReferrer: true});
    }
  }

  handleSetAuthorizationToken = token => this.props.setAuthorizationToken(token);

  handleLogin() {
    this.setState({redirectToReferrer: true});
  }

  handleLoginError() {
    this.setState({error: true});
  }

  login() {
    const postData = stringify({
      uuid: 'hello',
    });

    axios.post('/v1/auth/uuidLogin', postData)
      .then(response => {
        this.setSession(response.data.response);
        this.handleLogin(response.data.response);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          this.handleLoginError(error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };

  setSession(authResult) {
    this.handleSetAuthorizationToken('Bearer ' + authResult.access_token);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + authResult.access_token;
  }

  render() {
    const {redirectToReferrer, error} = this.state;

    if (redirectToReferrer) {
      return <Redirect to='/jogs'/>;
    }

    return (
      <div className="let-me-in">
        <Bear/>
        <Button onHandleClick={() => this.login()}/>
        {error && <p>Error</p>}
      </div>
    );
  };
}

const mapStateToProps = (state) => ({authorizationToken: state});

export default connect(mapStateToProps, {
  setAuthorizationToken
})(LetMeIn);
