import React from 'react';
import { Box, Typography } from '@mui/material';

const TweetList = ({ tweets }) => {
  return (
    <Box>
      {tweets.map((tweet, index) => (
        <Box key={index} sx={{ mt: 2, p: 2, border: '1px solid #ddd' }}>
          <Typography variant="body1">{tweet.text}</Typography>
          <Typography variant="caption" color="textSecondary">
            {tweet.timestamp}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TweetList;
