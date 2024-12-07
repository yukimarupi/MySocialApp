import React from "react";
import Tweet from "./Tweet";
import { v4 as uuidv4 } from 'uuid'; // UUIDをインポート

const TweetList = ({ tweets, onDeleteTweet }) => {
    return (
      <div>
        {tweets.map((tweet, index) => (
          <Tweet
            key={uuidv4()} // UUIDでユニークなキーを生成
            text={tweet.text}
            user={tweet.user}
            onDelete={() => onDeleteTweet(index)}
          />
        ))}
      </div>
    );
};
export default TweetList;
