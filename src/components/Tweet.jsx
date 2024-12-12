import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  TextField,
  Button,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          {user}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {timestamp}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {text}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box>
            <IconButton onClick={handleLike} aria-label="Like">
              <FavoriteIcon color="error" />
            </IconButton>
            {likes}

            <IconButton onClick={handleRetweet} aria-label="Retweet">
              <RepeatIcon color="primary" />
            </IconButton>
            {retweets}

            <IconButton aria-label="Comment">
              <CommentIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              color="error"
              onClick={onDelete}
              aria-label="Delete Tweet"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            placeholder="Add a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            multiline
            rows={2}
          />
          <Button
            variant="contained"
            sx={{ mt: 1 }}
            onClick={handleAddComment}
            disabled={!commentText.trim()}
          >
            Comment
          </Button>
        </Box>
        {comments.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              Comments:
            </Typography>
            {comments.map((comment, index) => (
              <Typography
                key={`${comment}-${index}`}
                sx={{ mt: 1 }}
                variant="body2"
              >
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
