/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid'; // UUIDをインポート


const TweetInput = ({ onAddTweet }) => {
    const [tweet, setTweet] = useState('');
    const [username, setUsername] = useState('');
    const maxLength = 280;

    const [error, setError] = useState('');

    const handleTweetSubmit = () => {
      if (!username.trim() || !tweet.trim()) {
        setError('Username and tweet content are required.');
        return;
      }
      if (tweet.length > maxLength) {
        setError('Tweet exceeds the maximum length.');
        return;
      }

      const currentDateTime = new Date().toLocaleString(); // 現在の日時
      onAddTweet({ id: uuidv4(), text: tweet, user: username, timestamp: currentDateTime });
      setTweet('');
      setUsername('');
      setError('');
    };

    return (
      <Box sx={{ display: 'flex', gap: 2, mt: 2, flexDirection: 'column' }}>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label={`What's happening? (${tweet.length}/${maxLength})`}
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          error={tweet.length > maxLength}
          helperText={tweet.length > maxLength ? 'Maximum length exceeded' : ''}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleTweetSubmit}
          disabled={tweet.length > maxLength}
        >
          Tweet
        </Button>
      </Box>
    );
  };

export default TweetInput;
