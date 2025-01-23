
 
import * as React from 'react';

import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import '../css/Login.css'


import { useState } from "react";
import $ from "jquery";


const Login = () => {

  const [pwdValue, setPwdValue] = React.useState('');

  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
      setName(e.target.value);
  };

  const handleChangePwd = (e) => {
    setPwdValue(e.target.value);
};

  const handleSubmit = (e) => {
      e.preventDefault();
      if (name !== '' &&  pwdValue !== ''){

        // create ajax to find the user 

      const form = $(e.target);
      $.ajax({
          type: "POST",
          url: form.attr("action"),
          data: form.serialize(),
          success(data) {
            if(data !==' '){
              setResult(data);
              localStorage.setItem('user', data);
            }
                
          },
      });

    }


  };

    return <>
    <h1>Log in</h1>
    <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2} >
 
        <Grid size={{ xs: 12, md: 6 }}>

        <Box sx={{   minWidth: 250 }} className="mainlog">
            <form
                action="https://conisoft.org/cakes/sample.php"
                method="post"
                onSubmit={(event) => handleSubmit(event)}
            >
              
                <TextField
                    type="text"
                    label="user"
                    id="name"
                    name="name"
                    variant="standard"
                    value={name}
                    fullWidth
                    onChange={(event) =>
                        handleChange(event)
                    }
                />
                <br />
                <TextField
                    type="password"
                    label="password"
                    id="pwd"
                    name="pwd"
                    fullWidth
                    variant="standard"
                    value={pwdValue}
                    onChange={(event) =>
                        handleChangePwd(event)
                    }
                />
                <br />
                <Button variant="contained" type="submit">Submit</Button>
            </form>
            {result !== ' '  ? (<h1>  {result}</h1>) :'' }
        </Box>


        </Grid>
 
      </Grid>

    </Box>

    </>;
  
};

export default Login;