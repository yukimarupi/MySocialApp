// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useCallback } from 'react'; // useCallbackを追加
import Header from '../components/Header';
import TweetInput from '../components/TweetInput';
import TweetList from '../components/TweetList';
import { Container } from '@mui/material';

const Home = () => {
  const [tweets, setTweets] = useState(() => {
    // 初回レンダリング時にローカルストレージからデータを取得
    const storedTweets = localStorage.getItem('tweets');
    return storedTweets ? JSON.parse(storedTweets) : [];
  });

  // ツイートの保存をuseCallbackでメモ化
  const addTweet = useCallback((tweet) => {
    const updatedTweets = [tweet, ...tweets];
    setTweets(updatedTweets);
    localStorage.setItem('tweets', JSON.stringify(updatedTweets)); // ローカルストレージに保存
  }, [tweets]);

  const deleteTweet = useCallback((index) => {
    const updatedTweets = tweets.filter((_, i) => i !== index);
    setTweets(updatedTweets);
    localStorage.setItem('tweets', JSON.stringify(updatedTweets)); // ローカルストレージに保存
  }, [tweets]);

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
