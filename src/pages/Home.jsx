/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useCallback } from 'react'; // useCallbackを追加
import Header from '../components/Header';
import TweetInput from '../components/TweetInput';
import TweetList from '../components/TweetList';
import { Container, IconButton } from '@mui/material'; // IconButton を追加
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme'; // テーマ設定
import Brightness7Icon from '@mui/icons-material/Brightness7'; // 明るいアイコン
import Brightness4Icon from '@mui/icons-material/Brightness4'; // 暗いアイコン



const Home = () => {
    const [tweets, setTweets] = useState(() => {
      const storedTweets = localStorage.getItem('tweets');
      return storedTweets ? JSON.parse(storedTweets) : [];
    });

    const [darkMode, setDarkMode] = useState(false);

    const addTweet = useCallback((tweet) => {
        const updatedTweets = [tweet, ...tweets];
        setTweets(updatedTweets);
        localStorage.setItem('tweets', JSON.stringify(updatedTweets));
      }, [tweets]);

      const deleteTweet = useCallback((index) => {
        const updatedTweets = tweets.filter((_, i) => i !== index);
        setTweets(updatedTweets);
        localStorage.setItem('tweets', JSON.stringify(updatedTweets));
      }, [tweets]);

      return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <div>
            <Header />
            <Container sx={{ mt: 4 }}>
              <IconButton onClick={() => setDarkMode(!darkMode)} sx={{ float: 'right' }}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <TweetInput onAddTweet={addTweet} />
              <TweetList tweets={tweets} onDeleteTweet={deleteTweet} />
            </Container>
          </div>
        </ThemeProvider>
      );
    };


export default Home;
