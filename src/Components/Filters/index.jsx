import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import './styles.scss';

export default function Filters() {
  return (
    <section style={{ display: 'flex' }}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={['All', 'Udupi', 'Kundapura']}
            value="All"
            sx={{ width: 300,  marginRight: 2 }}
            renderInput={(params) => <TextField {...params} label="Filter by location" />}
        />
    </section>
  );
}