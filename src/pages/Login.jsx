
 
import * as React from 'react';

import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import '../css/Login.css'
import users from '../data/users.json';
import { useContext } from 'react';
import {AppContext} from '../App.js'
const Login = () => {
    
  const { setGlobalUserState } = useContext(AppContext);
  
  const [userValue, setUserValue] = React.useState('');
  const handleUserChange = (event) => {
    setUserValue(event.target.value);

  };
  const [pwdValue, setPwdValue] = React.useState('');
  const handlePwdChange = (event) => {
    setPwdValue(event.target.value);

  };

 
  const loginfunc = () => {
    if(userValue!=='' && pwdValue !==''){      
      
 
     
      users.filter(user  =>{
        if (user.username ===  userValue && user.password === pwdValue){
          setGlobalUserState({ user: userValue });
          alert("Welcome : "+ user.username  );
          setUserValue('');
          setPwdValue('');
        }
       
        return userValue;
      
      });

      
    
    }
  }

    return <>
    <h1>Log in</h1>
    <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2} >
 
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{   minWidth: 250 }} className="mainlog">
            <div>
                <TextField id="standard-basic" label="user " fullWidth variant="standard"  value={userValue} onChange={handleUserChange} />
            </div>
            <div>
            <TextField id="standard-pwd" label="password " fullWidth type='password' variant="standard" value={pwdValue} onChange={handlePwdChange}  />
            </div>
            <Button variant="contained"  onClick={loginfunc}  size="large">
                Login
            </Button>
        
          </Box>
        </Grid>
 
      </Grid>

    </Box>

    </>;
  
};

export default Login;