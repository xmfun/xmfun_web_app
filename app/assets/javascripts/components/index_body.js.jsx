var IndexBody = React.createClass({
  propTypes: {
    searchUrl: React.PropTypes.string,
    authToken: React.PropTypes.string,
    searchInput: React.PropTypes.string,
    headerNeeded: React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      authToken: '',
      searchUrl: '',
      searchInput: '',
      headerNeeded: true
    };
  },
  setHeaderStyle: function () {
    var header = this.refs.mainHeader.getDOMNode();
    var searchBar = this.refs.searchBar.getDOMNode();

    if (this.props.headerNeeded) {
      header.style.textAlign = "center";
      header.style.marginTop = "150px";
      header.style.marginBottom = "30px";
    } else {
      $(header).hide();
      searchBar.style.marginTop = "30px";
    }
  },
  componentDidMount: function() {
    this.setHeaderStyle();
  },
  render: function () {
    return (
      <div>
        <div className="container container-table">
          <div className="row vertical-center-row">
            <div className="col-md-4 col-md-offset-4">
              <h1 ref="mainHeader">XMFun</h1>
              <SearchBar ref="searchBar"
                        searchUrl={this.props.searchUrl}
                        authToken={this.props.authToken}
                        searchInput={this.props.searchInput}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var SearchBar = React.createClass({
  propTypes: {
    searchUrl: React.PropTypes.string,
    authToken: React.PropTypes.string,
    searchInput: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      authToken: '',
      searchUrl: '',
      searchInput: ''
    };
  },
  getInitialState: function () {
    return {searchInput: ""};
  },
  handleSearchInput: function (event) {
    this.setState({ searchInput: event.target.value });
  },
  handleSubmit: function (event) {
    console.log(this.state.searchInput);
    console.log(this.props.authToken);
  },
  componentDidMount: function() {
    if (this.props.searchInput.length > 0) {
      this.refs.srchInput.getDOMNode().value = this.props.searchInput;
    }
  },
  render: function () {
    return (
      <form className="form-search" action={this.props.searchUrl} method='post' onSubmit={this.handleSubmit}>
        <input type="hidden" value={this.props.authToken} name="authenticity_token"/>
        <div className="input-group add-on">
          <input ref="srchInput" type="search" className="form-control" placeholder="Search for Xiami music"
                name="srch_term" onChange={this.handleSearchInput}/>
          <div className="input-group-btn">
            <button className="btn btn-default" type="submit">
              <i className="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </div>
      </form>
    );
  }
});
