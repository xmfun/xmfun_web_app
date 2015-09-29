var NavigationBar = React.createClass({
  handleLogIn: function () {
    if (this.props.userId > 0) {
      return (
        <li><a href={this.props.signoutPath}><span className="glyphicon glyphicon-log-out"></span>&nbsp;Logout</a></li>
      )
    } else {
      return (
        <li><a href={this.props.signinPath}><span className="glyphicon glyphicon-log-in"></span>&nbsp;Facebook Login</a></li>
      )
    }
  },
  render: function() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href={this.props.rootURL}>{this.props.websiteName}</a>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li className="active"><a href={this.props.rootURL}>Home</a></li>
              <li><a href="#">Page 1</a></li>
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.handleLogIn()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
