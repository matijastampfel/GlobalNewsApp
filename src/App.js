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
      search: "",
      apiLink:
        "https://newsapi.org/v2/everything?q=Russia&apiKey=914f1a282559480ba84f1513c9eb320d"
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

  inputChangeHandler = event => {
    let search = event.target.value;
    let searchUrl =
      "https://newsapi.org/v2/everything?q=" +
      search +
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
        <List posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
