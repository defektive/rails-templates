var React = require("react/lib/reactWithAddons");

import requireAuth from "./RequireAuth";
import auth from "./Auth";

export default requireAuth(class extends React.Component {
  render () {
    var token = auth.getToken();
    return (
      <div>
        <h1>Dashboard</h1>
        <p>You made it!</p>
        <p>{token}</p>
      </div>
    );
  }
});
