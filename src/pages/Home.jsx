import React, { useState } from 'react';
import Header from '../components/Header';
import Login from './Login';
import Register from './Register';
import TweetInput from '../components/TweetInput';
import TweetList from '../components/TweetList';
import { Container } from '@mui/material';

const Home = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false); // Register画面の表示制御
  const [tweets, setTweets] = useState([]);

  const handleLogin = (username) => {
    setCurrentUser(username);
  };

  const handleRegister = () => {
    setShowRegister(false); // 登録後にログイン画面に戻る
  };

  const toggleToRegister = () => {
    setShowRegister(true); // 新規登録画面を表示
  };

  const toggleToLogin = () => {
    setShowRegister(false); // ログイン画面を表示
  };

  return (
    <div>
      <Header />
      <Container sx={{ mt: 4 }}>
        {!currentUser ? (
          showRegister ? (
            <Register onRegister={handleRegister} toggleToLogin={toggleToLogin} />
          ) : (
            <Login onLogin={handleLogin} toggleToRegister={toggleToRegister} />
          )
        ) : (
          <>
            <TweetInput onAddTweet={(tweet) => setTweets([tweet, ...tweets])} currentUser={currentUser} />
            <TweetList tweets={tweets} />
          </>
        )}
      </Container>
    </div>
  );
};

export default Home;
