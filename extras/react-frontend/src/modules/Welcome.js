var React = require("react/lib/reactWithAddons");

import SignUp from "./SignUp";
export default  React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Sign up Now</h1>

        <SignUp />
      </div>
    );
  }
});
