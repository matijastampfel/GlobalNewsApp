import React, { Component } from "react";

import "./App.css";
import Search from "./Components/Search/Search";
import List from "./Components/List/List";

import axios from "axios";

//
// ─── VARIABLES ──────────────────────────────────────────────────────────────────
//

let posts = [];
console.log(posts);

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      clicks: 1,
      apiLink: "",
      search: ""
    };
  }

  //
  // ─── API ────────────────────────────────────────────────────────────────────────
  //
  debugger;
  componentDidMount() {
    this.getNews(this.state.apiLink);
  }

  //
  // ─── HANDLERS ───────────────────────────────────────────────────────────────────
  //

  IncrementNumberHandler = event => {
    let clicks = this.state.clicks + 1;
    let search = this.state.search;
    let searchUrl =
      "https://newsapi.org/v2/everything?q=" +
      search +
      "&page=" +
      clicks +
      "&apiKey=914f1a282559480ba84f1513c9eb320d";

    this.getNews(searchUrl);
    this.setState({ clicks: clicks });
  };

  DecreaseNumberHandler = () => {
    let clicks = this.state.clicks - 1;
    let search = this.state.search;
    let searchUrl =
      "https://newsapi.org/v2/everything?q=" +
      search +
      "&page=" +
      clicks +
      "&apiKey=914f1a282559480ba84f1513c9eb320d";

    this.getNews(searchUrl);
    this.setState({ clicks: clicks });
  };

  inputChangeHandler = event => {
    let search = event.target.value;

    this.setState({ search: search });
    let page = this.state.clicks;
    let searchUrl =
      "https://newsapi.org/v2/everything?q=" +
      search +
      "&page=" +
      page +
      "&apiKey=914f1a282559480ba84f1513c9eb320d";

    this.getNews(searchUrl);
  };

  //
  // ─── FUNCTIONS ──────────────────────────────────────────────────────────────────
  //

  getNews = search => {
    axios.get(search).then(res => {
      console.log(res);
      posts = res.data.articles;
      if (posts !== undefined) {
        this.setState({
          posts
        });
      }
    });
  };

  //
  // ─── RENDER ─────────────────────────────────────────────────────────────────────
  //

  render() {
    return (
      <div className="App">
        <Search changed={this.inputChangeHandler} />
        <p>
          <a
            href="#"
            onClick={this.DecreaseNumberHandler}
            className="btn btn-primary"
            role="button"
            className="glyphicon glyphicon-backward"
          />{" "}
          <a href="#">{this.state.clicks}</a>
          <a
            href="#"
            className="btn btn-default"
            role="button"
            onClick={this.IncrementNumberHandler}
            className="glyphicon glyphicon-forward"
          />
        </p>

        <List posts={this.state.posts} />

        <p>
          <a
            href="#"
            onClick={this.DecreaseNumberHandler}
            className="btn btn-primary"
            role="button"
            className="glyphicon glyphicon-backward"
          />{" "}
          <a href="#">{this.state.clicks}</a>
          <a
            href="#"
            className="btn btn-default"
            role="button"
            onClick={this.IncrementNumberHandler}
            className="glyphicon glyphicon-forward"
          />
        </p>
      </div>
    );
  }
}

export default App;
