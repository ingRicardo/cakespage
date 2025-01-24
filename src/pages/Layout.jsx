import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import '../css/Layout.css';
import logo from '../cake_logo_int.png';
import Button from '@mui/material/Button';


const Layout = () => {

  const handleClickSession = () => {
    alert("bye "+localStorage.getItem('user'));
    localStorage.clear();
    window.location.href="/login";
  };

  return (
    <>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      { localStorage.getItem('user') ? (<span>{localStorage.getItem('user')}  
         <Button onClick={handleClickSession}  variant="text" >logout</Button></span>)
        : ''
      }
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