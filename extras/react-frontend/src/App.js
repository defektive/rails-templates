var React = require("react/lib/reactWithAddons");
var Router = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = Router;


import Welcome from "./modules/Welcome";
import Dashboard from "./modules/Dashboard";
import Login from "./modules/Login";
import Logout from "./modules/Logout";
import SignUp from "./modules/SignUp";

import auth from "./modules/Auth";
import i18n from "./modules/I18n";
import requireAuth from "./modules/RequireAuth";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      loggedIn: auth.loggedIn()
    };
  }

  setStateOnAuth (loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  }

  componentWillMount () {
    // auth.onChange = this.setStateOnAuth.bind(this);
    // auth.login();
  }

  render () {
    return (
      <div id="app-main">
        <div className="navbar navbar-default">
          <div className="navbar-header">
            <Link className="navbar-brand" to="home">{i18n.name}</Link>
          </div>

          <ul className="nav navbar-nav">
              <li className={this.state.loggedIn ? 'hidden' : ''}><Link to="login">Sign in</Link></li>
              <li className={this.state.loggedIn ? 'hidden' : ''}><Link to="sign_up">Sign up</Link></li>
              <li className={this.state.loggedIn ? '' : 'hidden'}><Link to="logout">Log out</Link></li>
          </ul>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 main">
                <RouteHandler key='home'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Welcome}/>
    <Route name="home" handler={Welcome}/>
    <Route name="login" handler={Login}/>
    <Route name="sign_up" handler={SignUp}/>
    <Route name="logout" handler={Logout}/>
    <Route name="dashboard" handler={Dashboard}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('axon-app'));
});


// var Dispatcher = require('flux').Dispatcher;
// var Q = require('q');
//

//
//
// import Welcome from "./modules/Welcome";
//
// // var AppStore = new Amygdala({
// //     'config': {
// //       'apiUrl': 'http://rest-backend.dev',
// //       'idAttribute': 'url'
// //     },
// //     'schema': {
// //       'users': {
// //         'url': '/users/'
// //       }
// //     }
// //   }
// // );
//
// // Q.all([
// //   AppStore.get("users"),
// // ]).done(makeArgFriendly(setup));
// setup();
//
// function setup(userList) {
//   userList = userList || [];
//
//   var App = React.createClass({
//     render: function() {
//       return (
        // <div id="app-main">
        //   <div className="navbar navbar-default">
        //     <div className="navbar-header">
        //       <a className="navbar-brand" href="./">{i18n.name}</a>
        //     </div>
        //   </div>
        //
        // <div className="container-fluid">
        // <div className="row">
        // <div className="col-sm-3 col-md-2 sidebar">
        //
        // </div>
        // <div className="col-sm-9  col-md-10 main">
        // <Welcome />
        // </div>
        // </div>
        // </div>
        // </div>
//       );
//     }
//   });
//
//   React.render(
//     <App />,
//     document.body
//   );
// }
//
// function makeArgFriendly(fn) {
//   return function (a) {
//     fn.apply(fn, a)
//   }
// }
