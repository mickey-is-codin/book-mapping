import React from 'react';
import '../index.css';

import Background from './Background';

class Build extends React.Component {
  render() {
    return(
      <div>
        <BuildPage/>
        <Background/>
      </div>
    );
  }
}

class BuildPage extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      completedFirstSearch: false,
      userBooks : [],
      searchResults: []
    };
  }

  // Lifecycle
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  // Unique Methods

  // Render
  render() {
    let completedFirstSearch = this.state.completedFirstSearch;
    let view;
    if (completedFirstSearch) {
      view = <SearchPage/>;
    } else {
      view = <InitSearchPage/>;
    }

    return view;
  }
}

class InitSearchPage extends React.Component {
  render() {
    return(
      <InitSearchForm/>
    );
  }
}

class InitSearchForm extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Lifecycle
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    this.state.
    event.preventDefault();
  }

  render() {
    return(
      <div className="wrapper d-flex flex-column">
        <form onSubmit={this.handleSubmit} className="search">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="search-field d-flex"
            placeholder="Search Books..."/>
        </form>
      </div>
    );
  }
}

class SearchPage extends React.Component {
  render() {
    return(
      <p>Thanks for searching for that first book.</p>
    );
  }
}

export default Build;
