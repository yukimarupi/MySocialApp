import React from "react";
import Tweet from "./Tweet";
// eslint-disable-next-line no-unused-vars
import { v4 as uuidv4 } from 'uuid'; // UUIDをインポート

const TweetList = ({ tweets, onDeleteTweet }) => {
    return (
      <div>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id} // idをキーに使用
            text={tweet.text}
            user={tweet.user}
            timestamp={tweet.timestamp}
            onDelete={() => onDeleteTweet(tweet.id)} // idで削除
          />
        ))}
      </div>
    );
  };

export default TweetList;
