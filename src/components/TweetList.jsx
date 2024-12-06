import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ tweets, onDeleteTweet }) => {
  return (
    <div>
      {tweets.map((tweet, index) => (
      <Tweet key={index} text={tweet.text} user={tweet.user} onDelete={() => onDeleteTweet(index)} />

      ))}

    </div>
  );
};

export default TweetList;
