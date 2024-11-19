import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cardpp = ({ 
  title = 'Título no disponible', 
  imageUrl = 'https://via.placeholder.com/300', 
  description = 'Descripción no disponible', 
  onDelete 
}) => {
  return (
    <Card className='carta'
      sx={{ 
        maxWidth: 400, 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        margin: '10px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between' 
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={imageUrl} 
        alt={title}
      />
      <CardContent className='Card_Content'>
        <Typography variant="h6" component="div">
          {title} 
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
          {description} 
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button id="deleteBit"
            onClick={onDelete}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Eliminar bitácora"
          >
            <FontAwesomeIcon icon={faTrash} size="s" color="red" />
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
