
 
import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../css/Login.css'

//import { useState } from "react";
//import $ from "jquery";
import axios from "axios";


const Login = () => {

  const [pwd , setPwd ] = React.useState('');
  const [username , setUsername ] = React.useState('');
 
  const handleSignin = (e) => {
    window.location.href="signin";
    };

  const handleNameChange = (e) => {
    setUsername(e.target.value);
};

 const handlePasswordChange =  (e) => {
    setPwd(e.target.value);
};

 const handleSubmit = (event) => {
      event.preventDefault();
      var post = {
          username: username,
          password: pwd
      };

      var jsonDataToSend = JSON.stringify(post);
      var url= "https://conisoft.org/cakes/sample.php";
/*
      $.ajax({
         type:'POST',
         url: "https://conisoft.org/cakes/sample.php",
         data: jsonDataToSend,
         success:function(data){

             // console.log("success ", data);
              setResult(data);
              if(data['username'] !== ''){
                localStorage.setItem('user', data['username']);
                alert('welcome : '+data['username']);
                window.location.href="/";
              }
                
         },
         error: function (data) {

              console.log("error", data);
          }
      });
      */
      axios
      .post(url, jsonDataToSend)
      .then((response) =>{
          
        //  console.log("success ",response.data);        
        if(response.data['username'] !== ''){
            localStorage.setItem('user', response.data['username']);
            alert('welcome : '+response.data['username']);
            window.location.href="/";
        }
      
      })
      .catch((error) => console.error(error));
  

  };
 
      return (
          <div>

            <h1>Log in</h1>
            <Box sx={{ flexGrow: 1 }}  >
                <Grid container spacing={2} >
            
                    <Grid size={{ xs: 12, md: 6 }}>

                        <Box sx={{   minWidth: 250 }} className="mainlog">

                            <form onSubmit={(event) => handleSubmit(event)}>
                                
                                    
                                    <TextField
                                        type="text"
                                        name="name"
                                        label="User Name"
                                        variant="standard"
                                        fullWidth
                                        onChange={handleNameChange}
                                    />
                                
                                <br />
                               
                                    <TextField
                                        type="text"
                                        name="password"
                                        variant="standard"
                                        label="Password"
                                        fullWidth
                                        onChange={handlePasswordChange}
                                    />
                                
                                <Button variant="contained" id="bt1"  type="submit">Submit</Button>
                                <Button variant="contained"  id="bt2"  onClick = {handleSignin}type="text">Sign Up</Button>
                            </form>
                            
                        </Box>
                    </Grid>
                </Grid>
            </Box>
          </div>
      );
  


  
};

export default Login;