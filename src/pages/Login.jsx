
 
import * as React from 'react';

import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



const Login = () => {
    return <>
    <h1>Log in</h1>
    <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2} >
        <Grid size={{ xs: 12, md: 12 }}>
            <div>
                <TextField id="standard-basic" label="user " variant="standard"   />
            </div>
            <div>
            <TextField id="standard-pwd" label="password " variant="standard"   />
            </div>
            <Button variant="contained"   size="large">
                Login
            </Button>

        </Grid>
      </Grid>
    </Box>

    </>;
  
};

export default Login;