import { useMutation } from '@apollo/client';
import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { ADD_CAR } from '../../graphQL/queries';

const AddCarForm = () => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [horsePowers, setHorsePowers] = useState(0);
    const [color, setColor] = useState('');

    const [addCar, { loading, error}] = useMutation(ADD_CAR)

    const handleSubmit = (e) => {
        e.preventDefault();
        addCar({ variables: { brand, model, horsePowers, color } })
    }

    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
    return (
   <form onSubmit={handleSubmit}>
        <Box sx={{display: 'flex', gap: '10px'}}>
          <TextField
            required
            id="outlined-required"
            label="Brand"
                  defaultValue="BMW"
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Model"
                    defaultValue="X5"
                    value={model}
                    onChange= {e=> setModel(e.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Color"
                    defaultValue="Black"
                    value={color}
                    onChange= {e=> setColor(e.target.value)}
          />
          <TextField
            
                    type='number'
            id="outlined-required"
            label="Horse powers"
                    defaultValue={500}
                    value={horsePowers}
                    onChange={e=> setHorsePowers(e.target.value)}
          />
          <Button
            type="submit"
                    variant="outlined"
          >
            Add Car
          </Button>
        </Box>
   </form>
  );
}

export default AddCarForm
