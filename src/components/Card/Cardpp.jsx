import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cardpp = ({ title = 'Título no disponible', imageUrl = 'https://via.placeholder.com/300', description = 'Descripción no disponible', onDelete }) => {
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
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <button
            onClick={onDelete}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Eliminar bitácora"
          >
            <FontAwesomeIcon icon={faTrash} size="lg" color="red" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

Cardpp.propTypes = {
  title: PropTypes.string.isRequired, 
  imageUrl: PropTypes.string, 
  description: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default Cardpp;
