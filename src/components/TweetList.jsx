import React from "react";
import Tweet from "./Tweet";

// eslint-disable-next-line no-unused-vars
const TweetList = ({ tweets, onDeleteTweet }) => {
    return (
      <div>
        {tweets.map((tweet, index) => (
          <Tweet
            key={`${tweet.text}-${index}`} // キー生成を安全な方法に変更
            text={tweet.text}
            user={tweet.user}
            onDelete={() => onDeleteTweet(index)}
          />
        ))}
      </div>
    );
  };
  export default TweetList;
