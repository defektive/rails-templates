var React = require("react/lib/reactWithAddons");
var axios = require('axios');

import auth from "./Auth";

class Login extends React.Component {

  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: false
    };
  }

  handleSubmit (event) {
    event.preventDefault();
    var { router } = this.context;
    var nextPath = router.getCurrentQuery().nextPath;
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;



    axios.post('/v1/login', {
      email: email,
      password: password
    })
    .then(function (response) {
      auth.setLoggedIn(true);

      if (nextPath) {
        router.replaceWith(nextPath);
      } else {
        router.replaceWith('/dashboard');
      }
      console.log("DONE", response);
    })
    .catch(function (response) {
      auth.setLoggedIn(false);
      console.log("ERROR", response);
    });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input ref="email" type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input ref="password" type="password" className="form-control" id="password" placeholder="Password" />
        </div>

        <button type="submit" className="btn btn-primary btn-lg">login</button>

        {this.state.error && (
          <p>Bad login information</p>
        )}
      </form>
    );
  }
}


Login.contextTypes = {
  router: React.PropTypes.func
};

export default Login;
