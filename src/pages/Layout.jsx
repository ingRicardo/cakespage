import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import '../Layout.css';
import logo from '../logo.svg';
import Button from '@mui/material/Button';
 
  
 // <Link to="/">Home</Link>
const Layout = () => {
  return (
    <>


    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }}>
        
      
                
                <span>
                <img src={logo} alt="Logo"  style={{ width: '50%', height: '50px'}} />
                </span>      
                <span className="title">Cakes' Page</span>  
        </Grid>
        <Grid size={{ xs: 4, md: 3 }}>
           
           
            <Button href="/" variant="contained" style={{ width: '100%', height: '100%' }}>
              Home
            </Button>  
         

        </Grid>
        <Grid size={{ xs: 4, md: 3 }}>
           
             
            <Button href="/blogs" variant="contained"  style={{ width: '100%', height: '100%' }}>
            Blogs
            </Button>  
          
        </Grid>
        <Grid size={{ xs: 4, md: 3}}>
           

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