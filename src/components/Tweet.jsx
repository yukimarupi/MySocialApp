import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import CommentIcon from '@mui/icons-material/Comment';

const Tweet = ({ text, user, onDelete }) => {
  const [likes, setLikes] = useState(0);
  const [retweets, setRetweets] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleRetweet = () => setRetweets(retweets + 1);

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle1">{user}</Typography>
        <Typography variant="body1">{text}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box>
            <IconButton onClick={handleLike}>
              <FavoriteIcon color="error" />
            </IconButton>
            {likes}

            <IconButton onClick={handleRetweet}>
              <RepeatIcon color="primary" />
            </IconButton>
            {retweets}

            <IconButton>
              <CommentIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton color="error" onClick={onDelete}>
              🗑
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Tweet;
