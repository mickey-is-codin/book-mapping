import React from 'react';
import { Button } from 'reactstrap';
import { render } from 'react-dom';
import './index.css';

const DEFAULT_QUERY='Gene Wolfe';

// Google API
const API='https://www.googleapis.com/books/v1/volumes?q=';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    var requestURL = API + DEFAULT_QUERY + "&maxResults=40";
    fetch(encodeURI(requestURL))
      .then(response => response.json())
      .then(data => this.setState({
        items: data.items
      }));
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        {items.map(item =>
          <Book apiEntry={item}/>
        )}
      </div>
    );
  }
}

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.handleMoreClick = this.handleMoreClick.bind(this);
    this.handleLessClick = this.handleLessClick.bind(this);
    this.state = {
      descShowing: false
    }
  }

  handleMoreClick() {
    this.setState({descShowing: true});
  }

  handleLessClick() {
    this.setState({descShowing: false});
  }

  render() {

    const descShowing = this.state.descShowing;
    let descButton;
    let desc;

    if (descShowing) {
      descButton = <Button color="primary" onClick={this.handleLessClick}>Less</Button>;
      desc = this.props.apiEntry.volumeInfo.description;
    } else {
      descButton = <Button color="primary" onClick={this.handleMoreClick}>More</Button>;
      desc = "";
    }

    var imageLink = this.props.apiEntry.volumeInfo.imageLinks === undefined
        ? ""
        : `${this.props.apiEntry.volumeInfo.imageLinks.thumbnail}`;

    return (
      <div>
        <img
          src={imageLink}
          alt={this.props.apiEntry.volumeInfo.title}>
        </img>
        <h3>{this.props.apiEntry.volumeInfo.title}</h3>
        {descButton}
        <br/>
        {desc}
      </div>
    )
  }
}

export default App;
