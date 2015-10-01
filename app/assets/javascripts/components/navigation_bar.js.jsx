var NavigationBar = React.createClass({
  propTypes: {
    websiteName: React.PropTypes.string,
    rootUrl: React.PropTypes.string,
    userImgUrl: React.PropTypes.string,
    signinPath: React.PropTypes.string,
    signoutPath: React.PropTypes.string,
    userId: React.PropTypes.number
  },
  getDefaultProps: function() {
    return {
      websiteName: 'XMFun',
      rootUrl: '',
      userImgUrl: '',
      signinPath: '',
      signoutPath: '',
      userId: -1
    };
  },
  handleUserImg: function () {
    if (this.props.userImgUrl !== '') {
      return <li><img src={this.props.userImgUrl} height="50" width="50"/></li>
    }
  },
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
            <a className="navbar-brand" href={this.props.rootUrl}>{this.props.websiteName}</a>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li className="active"><a href={this.props.rootUrl}>Home</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.handleUserImg()}
              {this.handleLogIn()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
