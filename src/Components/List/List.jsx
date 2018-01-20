import "./List.css";

import React from "react";
import Image from "react-image-resizer";
//const keyIndex = require("react-key-index");

const List = props => {
  // let idx = keyIndex(props.posts, 1);

  return (
    <div>
      <ul className="newsList">
        {props.posts.map((post, idx) => (
          // key={idx}
          <div className="newsContainer">
            <li>
              <div className="newsTitle">
                <h1>{post.title}</h1>
                <Image src={post.urlToImage} alt="" width={340} height={140} />
                {post.description}
                <br />
                <a href={post.url}>Go to page</a>
              </div>
            </li>
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
