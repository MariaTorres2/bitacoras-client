import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Cardpp = ({ title = 'Título no disponible', imageUrl = 'https://via.placeholder.com/300', description = 'Descripción no disponible' }) => {
  return (
    <Card sx={{ maxWidth: 300, border: '1px solid #ccc', borderRadius: '8px', margin: '10px' }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl} 
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description} 
        </Typography>
      </CardContent>
    </Card>
  );
};

// Define las validaciones de las props
Cardpp.propTypes = {
  title: PropTypes.string.isRequired, 
  imageUrl: PropTypes.string, 
  description: PropTypes.string,
};

export default Cardpp;