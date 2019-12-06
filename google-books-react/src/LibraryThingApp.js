import React from 'react';
import { Button } from 'reactstrap';
import { render } from 'react-dom';
import './index.css';

const devKey = '6ba3579232dbc6d1b9bb1adcab5313d5';
const DEFAULT_QUERY='wolfegene';

// LibraryThing API
const API='http://www.librarything.com/services/rest/1.1/?method=librarything.ck.getauthor&name=';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const defaultApiCall = API + DEFAULT_QUERY + '&apikey=' + devKey;
    console.log(defaultApiCall);
    fetch(defaultApiCall, {mode: 'no-cors'})
      .then(response => response.text())
      .then(response => console.log(response));
  }

  render() {

    return (
      <div>

      </div>
    );
  }
}

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div></div>
    );
  }
}

export default App;
