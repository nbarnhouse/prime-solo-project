import React from 'react';

import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types'; // Import PropTypes
// import '../../App/App.css';

export default function BasicTextInput({ label, value, type, onChange }) {
  return (
    <div>
      <TextField
        id="outlined-input"
        label={label}
        type={type}
        //required
        value={value}
        onChange={onChange}
        sx={{
          width: '80%',
          backgroundColor: 'white',
          margin: '10px',
          borderRadius: '5px',
          border: '1px solid',
          '& .MuiInputLabel-root': {
            marginTop: '8px', // Adjust the top margin of the label
          },
        }}
      />
    </div>
  );
}

PropTypes.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
