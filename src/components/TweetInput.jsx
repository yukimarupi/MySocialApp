import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TweetInput = ({ onAddTweet }) => {
    const [tweet, setTweet] = useState('');
    const [username, setUsername] = useState('');

    const handleTweetSubmit = () => {
      if (tweet.trim() && username.trim()) {
        onAddTweet({ text: tweet, user: username });
        setTweet('');
        setUsername('');
      }
    };

    return (
      <Box sx={{ display: 'flex', gap: 2, mt: 2, flexDirection: 'column' }}>
        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label="What's happening?"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleTweetSubmit}>
          Tweet
        </Button>
      </Box>
    );
  };


export default TweetInput;
