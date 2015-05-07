var React = require("react/lib/reactWithAddons");
var axios = require('axios');

class SignUp extends React.Component {

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
    var passwordConfirm = this.refs.passwordConfirm.getDOMNode().value;

    axios.post('/v1/users', {
      user: {
        email: email,
        password: password,
        password_confirmation: passwordConfirm
      }
    })
    .then(function (response) {
      console.log("DONE", response);
    })
    .catch(function (response) {
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
        <div className="form-group">
          <label htmlFor="password-confirm">Confirm Password</label>
          <input ref="passwordConfirm" type="password" className="form-control" id="password-confirm" placeholder="Password" />
        </div>


        <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>

        {this.state.error && (
          <p>Bad login information</p>
        )}
      </form>
    );
  }
}

SignUp.contextTypes = {
  router: React.PropTypes.func
};

export default SignUp;
