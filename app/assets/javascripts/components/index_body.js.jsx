var IndexBody = React.createClass({
  propTypes: {
    searchUrl: React.PropTypes.string,
    authToken: React.PropTypes.string,
    searchInput: React.PropTypes.string,
    searchResult: React.PropTypes.array,
    headerNeeded: React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      authToken: '',
      searchUrl: '',
      searchInput: '',
      searchResult: [],
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

    searchBar.style.marginBottom = "50px";
  },
  showSrchResList: function () {
    if (!this.props.headerNeeded) {
      return <SrchResList ref="srchResList" searchResult={this.props.searchResult}/>
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
        {this.showSrchResList()}
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

var SrchResList = React.createClass({
  propTypes: {
    searchResult: React.PropTypes.array
  },
  getDefaultProps: function() {
    return {
      searchResult: []
    };
  },
  getInitialState: function() {
    return {
      pageSize: 20,
      pages: 1,
      results: [],
      currentPage: 1
    };
  },
  handlePagination: function (event) {
    var nextPage = event.target.name;
    if (nextPage !== this.state.currentPage) {
      $(".pagination-"+this.state.currentPage).removeClass("active");
      $(".pagination-"+nextPage).addClass("active");
      this.setState({
        currentPage: nextPage
      });
    }
  },
  paginationItems: function () {
    var items = [];
    if (this.state.pages > 1) {
      for (var i = 1; i <= this.state.pages; i++) {
        items.push(<li key={i} className={"pagination-"+i}><a name={i} onClick={this.handlePagination}>{i}</a></li>);
      }
    }
    return items;
  },
  firstElemNum: function () {
    return this.state.pageSize * (this.state.currentPage - 1) + 1;
  },
  lastElemNum: function () {
    return Math.min(this.state.pageSize * this.state.currentPage, this.state.results.length);
  },
  footerMessage: function () {
    return this.firstElemNum() + "-" + this.lastElemNum() + " out of total " + this.state.results.length + " items";
  },
  eachItem: function (item, i) {
    return <li key={i} className="list-group-item">{item}</li>
  },
  componentWillMount: function() {
    var pageNum = Math.ceil(this.props.searchResult.length / this.state.pageSize);
    this.setState({
      results: this.props.searchResult,
      pages: pageNum
    });
  },
  componentDidMount: function() {
    if (this.state.pages > 1) {
      $(".pagination-1").addClass("active");
    }
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-2">
            <ul className="pagination">
              {this.paginationItems()}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div ref="results" className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    Search Results
                  </h4>
                </div>
                <div className="panel-body">
                  <ul className="list-group">
                    {this.state.results.slice(this.firstElemNum() - 1, this.lastElemNum()).map(this.eachItem)}
                  </ul>
                  <div className="panel-footer">{this.footerMessage()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-2">
            <ul className="pagination">
              {this.paginationItems()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
