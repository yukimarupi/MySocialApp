import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const TweetInput = ({ onAddTweet }) => {
  const [tweet, setTweet] = useState('');
  const maxLength = 280;
  const [error, setError] = useState('');

  const handleTweetSubmit = () => {
    if (tweet.trim() === '') {
      setError('Tweet content is required.');
      return;
    }
    if (tweet.length > maxLength) {
      setError('Tweet exceeds the maximum length.');
      return;
    }

    onAddTweet({ text: tweet, timestamp: new Date().toLocaleString() });
    setTweet('');
    setError('');
  };

  return (
    <Box sx={{ mt: 2 }}>
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
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
        sx={{ mt: 1 }}
        onClick={handleTweetSubmit}
        disabled={tweet.length > maxLength}
      >
        Tweet
      </Button>
    </Box>
  );
};

export default TweetInput;
