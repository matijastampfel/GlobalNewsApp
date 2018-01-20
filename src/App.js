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
      apiLink:
        "https://newsapi.org/v2/everything?q=Russia&apiKey=914f1a282559480ba84f1513c9eb320d"
    };
  }

  //
  // ─── API ────────────────────────────────────────────────────────────────────────
  //

  componentDidMount() {
    axios.get(this.state.apiLink).then(res => {
      console.log(res);
      posts = res.data.articles;
      this.setState({
        posts
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Search />
        <List posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
