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
      apiLink:
        "https://newsapi.org/v2/everything?q=Sweden&page=" +
        this.clicks +
        "&apiKey=914f1a282559480ba84f1513c9eb320d",
      search: ""
    };
  }

  //
  // ─── API ────────────────────────────────────────────────────────────────────────
  //

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
        <h3 onChange={this.inputChangeHandler}>{this.state.clicks}</h3>
        <button onClick={this.DecreaseNumberHandler}>Previous</button>

        <button onClick={this.IncrementNumberHandler}>Next</button>
        <List posts={this.state.posts} />
        <h3 onChange={this.inputChangeHandler}>{this.state.clicks}</h3>
        <button onClick={this.DecreaseNumberHandler}>Previous</button>

        <button onClick={this.IncrementNumberHandler}>Next</button>
      </div>
    );
  }
}

export default App;
