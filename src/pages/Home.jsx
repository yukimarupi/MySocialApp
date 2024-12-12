import React, { useState } from 'react';
import Header from '../components/Header';
import Login from './Login';
import Register from './Register';
import TweetInput from '../components/TweetInput';
import TweetList from '../components/TweetList';
import { Container } from '@mui/material';

const Home = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [tweets, setTweets] = useState([]);

  const handleLogin = (username) => {
    setCurrentUser(username);
  };

  const handleRegister = () => {
    setShowRegister(false);
  };

  const toggleToRegister = () => {
    setShowRegister(true);
  };

  const toggleToLogin = () => {
    setShowRegister(false);
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
