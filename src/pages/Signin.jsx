

import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../css/Login.css'
import axios from "axios";


const Signin = () => {

    const [name , setName ] = React.useState('');
    const [username , setUsername ] = React.useState('');
    const [pwd , setPwd ] = React.useState('');
    const [email , setEmail ] = React.useState('');
    
    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    };
    
    const handlePasswordChange =  (e) => {
        setPwd(e.target.value);
    };
    
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    
     const handleEmailChange =  (e) => {
        setEmail(e.target.value);
    };
    

    const handleLogin = (e) => {
        window.location.href="login";
        };

    const handleSubmit = (event) => {
        event.preventDefault();
        var insertdata = {
            name: name,
            username: username,
            password: pwd,
            email: email,
        };
  
        var jsonDataToSend = JSON.stringify(insertdata);
        var url = "https://conisoft.org/cakes/insertuser.php"

       if (name !=="" && username !== "" && pwd !=="" && email !== "")
        axios
        .post(url, jsonDataToSend)
        .then((response) =>{
            
            console.log("success ",response.data);
            localStorage.setItem('user', response.data['result']);
            alert('welcome : '+response.data['result']);
            window.location.href="/";
        
        })
        .catch((error) => console.error(error));
    }

    return <>
    <h1>Sign In</h1>
    <Box sx={{ flexGrow: 1 }}  >
        <Grid container spacing={2} >
            <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{   minWidth: 250 }} className="mainlog">
                <form onSubmit={(event) => handleSubmit(event)}>
                                
                                    
                    <TextField
                        type="text"
                        name="name"
                        label="Name"
                        variant="standard"
                        fullWidth
                        onChange={handleNameChange}
                    />
                
                <br />
                <TextField
                        type="text"
                        name="username"
                        label="User Name"
                        variant="standard"
                        fullWidth
                        onChange={handleUserNameChange}
                    />
                
                <br />
                
                    <TextField
                        type="password"
                        name="password"
                        variant="standard"
                        label="Password"
                        fullWidth
                        onChange={handlePasswordChange}
                    />
                    <TextField
                        type="email"
                        name="email"
                        label="E-mail"
                        variant="standard"
                        fullWidth
                        onChange={handleEmailChange}
                    />
                
                <br />
                    <Button variant="contained" id="bt1"  type="submit">Submit</Button>
                    <Button variant="contained"  id="bt2" onClick={handleLogin} type="text">Login</Button>

                </form>
                </Box>
            </Grid>
        </Grid>
    </Box>
    


    </>;
  
};

export default Signin;