import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const Tweet = ({ text, user, onDelete }) => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
      setLikes(likes + 1);
    };

    return (
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1">{user}</Typography>
          <Typography variant="body1">{text}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="text" onClick={handleLike}>
              ❤️ Like {likes}
            </Button>
            <Button variant="text" color="error" onClick={onDelete}>
              🗑 Delete
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  };


export default Tweet;
