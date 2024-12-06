import React, { useState } from 'react';
import Header from '../components/Header';
import TweetInput from '../components/TweetInput';
import TweetList from '../components/TweetList';
import { Container } from '@mui/material';

const Home = () => {
    const [tweets, setTweets] = useState([]);

    const addTweet = (tweet) => {
      setTweets([tweet, ...tweets]);
    };

    const deleteTweet = (index) => {
      const newTweets = tweets.filter((_, i) => i !== index);
      setTweets(newTweets);
    };

    return (
      <div>
        <Header />
        <Container sx={{ mt: 4 }}>
          <TweetInput onAddTweet={addTweet} />
          <TweetList tweets={tweets} onDeleteTweet={deleteTweet} />
        </Container>
      </div>
    );
  };


export default Home;
