var IndexBody = React.createClass({
  propTypes: {
    searchUrl: React.PropTypes.string,
    authToken: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      authToken: '',
      searchUrl: ''
    };
  },
  render: function () {
    return (
      <div>
        <h1>Home#index</h1>
        <SearchBar searchUrl={this.props.searchUrl} authToken={this.props.authToken}/>
      </div>
    );
  }
});

var SearchBar = React.createClass({
  propTypes: {
    searchUrl: React.PropTypes.string,
    authToken: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      authToken: '',
      searchUrl: ''
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
  render: function () {
    return (
      <div className="container container-table">
        <div className="row vertical-center-row">
          <div className="col-md-4 col-md-offset-4">
            <form className="form-search" action={this.props.searchUrl} method='post' onSubmit={this.handleSubmit}>
              <input type="hidden" value={this.props.authToken} name="authenticity_token"/>
              <div className="input-group add-on">
                <input type="search" className="form-control" placeholder="Search"
                      name="srch_term" onChange={this.handleSearchInput}/>
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="glyphicon glyphicon-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});
