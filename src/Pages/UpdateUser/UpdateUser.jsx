import * as React from 'react'
import ModifyNavBar from '../../components/ModifyNavBar/ModifyNavBar'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';

import '../UpdateUser/UpdateUser.css'
const UpdateUser = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div id='cuerpo'>
      <ModifyNavBar />
      <div id='cuerpo2'>
        <div id='mitad1'>
          <div id='nalas'>
            <h3><img src='src/assets/Hojita.png' className='hojita' /> Nombres</h3>
            <input type="text" id="i1" />
            <h3><img src='src/assets/Hojita.png' className='hojita' /> Apellidos</h3>
            <input type="text" id="i2" />
          </div>
          <InputLabel id="demo-simple-select-label"><img src='src/assets/Hojita.png' className='hojita' />Genero</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Masculino</MenuItem>
            <MenuItem value={20}>Femenino</MenuItem>
          </Select>
          <div>
            <InputLabel id="demo-simple-select-label"><img src='src/assets/Hojita.png' className='hojita' />Rol</InputLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel className='circulito' value="Investigador" control={<Radio />} label="Investigador" />
              <FormControlLabel className='circulito' value="Colaborador" control={<Radio />} label="Colaborador" />
              <FormControlLabel className='circulito' value="Administrador" control={<Radio />} label="Administrador" />
            </RadioGroup>
          </div>
          <h3><img src='src/assets/Hojita.png' className='hojita' />Correo Electronico</h3>
          <input type="text" id="i3" />
          <Button id='reg'>ACTUALIZAR</Button>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser
