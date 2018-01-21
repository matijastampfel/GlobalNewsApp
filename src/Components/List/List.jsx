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
                <a href={post.url}>{post.title}</a>
                <Image src={post.urlToImage} alt="" width={340} height={140} />
                {post.description}
                <br />
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
