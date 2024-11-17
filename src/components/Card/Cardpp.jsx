import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Cardpp = () => {
  return (
    <Card sx={{ maxWidth: 300, border: '1px solid #ccc', borderRadius: '8px' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/300" // Puedes reemplazar esto con la URL de la imagen
        alt="Product image"
      />
      <CardContent>
        <Typography variant="h6" component="div">
          Text
        </Typography>
        <Typography variant="h5" component="div" fontWeight="bold">
          $0
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Body text.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cardpp;