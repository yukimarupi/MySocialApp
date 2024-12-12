import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Box, TextField, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import CommentIcon from '@mui/icons-material/Comment';

const Tweet = ({ text, user, timestamp, onDelete }) => {
  const [likes, setLikes] = useState(0);
  const [retweets, setRetweets] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => setLikes(likes + 1);
  const handleRetweet = () => setRetweets(retweets + 1);
  const handleAddComment = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
      <Typography variant="subtitle1">{user}</Typography>
        <Typography variant="body2" color="textSecondary">{timestamp}</Typography>
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
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            placeholder="Add a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <Button variant="contained" sx={{ mt: 1 }} onClick={handleAddComment}>
            Comment
          </Button>
        </Box>
        {comments.length > 0 && (
          <Box sx={{ mt: 2 }}>

            <Typography variant="subtitle2">Comments:</Typography>
            {comments.map((comment, index) => (
              <Typography key={index} sx={{ mt: 1 }}>
                {comment}
              </Typography>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default Tweet;
