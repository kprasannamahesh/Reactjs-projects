import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AddContactPage = (props) =>{
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const contactCurrent = {
      name: data.get('Name'),
      email: data.get('Email')
    };
    console.log(contactCurrent);
    props.addContactHandler(contactCurrent);
  };
    return (
        <>
        <Typography component="h1" variant="h5">
              Add Contacts
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Full Name"
                label="Full Name"
                name="Name"
                autoComplete="Full Name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Email"
                label="Email Address"
                type="Email Address"
                id="Email Address"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color='primary'
                sx={{ mt: 3, mb: 2 }}
              >
                ADD
              </Button>
              </Box>
              </>
    )
};
export default AddContactPage;