import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import '../css/Layout.css';
import logo from '../cake_logo_int.png';
import Button from '@mui/material/Button';
import {  useContext } from 'react';
import {AppContext} from '../App.js'

 // <Link to="/">Home</Link>
const Layout = () => {
    const { globalUserState } = useContext(AppContext);
  
  return (
    <>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <span>{globalUserState.user ? (<span>   {globalUserState.user} </span>): ''}</span>

        <Grid size={{ xs: 12, md: 2 }}>
        
      
                
                <span>
                <img src={logo} alt="Logo"  style={{ width: '30%', height: '50px'}} />
                </span>      
                <span className="title">Cakes' Page</span>  
        </Grid>
        <Grid size={{ xs: 3, md: 2 }}>
           
           
            <Button href="/" variant="contained" style={{ width: '100%', height: '100%' }}>
              Home
            </Button>  
         

        </Grid>
        <Grid size={{ xs: 3, md: 2 }}>
           
             
            <Button href="/blogs" variant="contained"  style={{ width: '100%', height: '100%' }}>
            Blogs
            </Button>  
          
        </Grid>

        <Grid size={{ xs: 3, md: 2}}>
           

           <Button   href="/login" variant="contained"  style={{ width: '100%', height: '100%' }}>
           Log in
           </Button>  
          
 
         </Grid>
         <Grid size={{ xs: 3, md: 2}}>
           

           <Button href="/contact" variant="contained"  style={{ width: '100%', height: '100%' }}>
           Contact
           </Button>  
          
 
         </Grid>
      </Grid>
    </Box>

 
          <Outlet />

    </>
  )
};

export default Layout;