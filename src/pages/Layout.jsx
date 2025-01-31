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
      
       { localStorage.getItem('user') ? (<div className="mainlayout"><span><b>{localStorage.getItem('user')}</b>  
         <Button onClick={handleClickSession}  variant="text" >logout</Button></span></div>)
        : <div className="mainlayout"><span >Guest</span></div>
      }
      
    
        <Grid size={{ xs: 12, md: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
              <div>
                <span>
                <img src={logo} alt="Logo"  style={{ width: '30%', height: '50px'}} />
                </span>      
                <span className="title"><b>Cakes' Page</b></span>  
              </div>
          </Box>
        </Grid>
        <Grid size={{ xs: 3, md: 2 , sm:3}}>
           
        <Box sx={{ flexGrow: 1 }}>
            <Button href="/" variant="contained" style={{ width: '100%', height: '100%' }}>
              Home
            </Button>  
         </Box>

        </Grid>
        <Grid size={{ xs: 3, md: 2 , sm:3}}>
           
        <Box sx={{ flexGrow: 1 }}>

            <Button href="/blogs" variant="contained"  style={{ width: '100%', height: '100%' }}>
            Blogs
            </Button>  
        </Box>
        </Grid>

        <Grid size={{ xs: 3, md: 2, sm:3}}>
           
        <Box sx={{ flexGrow: 1 }}>

           <Button   href="/login" variant="contained"  style={{ width: '100%', height: '100%' }}>
           Log in
           </Button>  
        </Box>
 
         </Grid>
         <Grid size={{ xs: 3, md: 2, sm:3}}>
           
         <Box sx={{ flexGrow: 1 }}>

           <Button href="/contact" variant="contained"  style={{ width: '100%', height: '100%' }}>
           Contact
           </Button>  
        </Box>          
 
         </Grid>


      </Grid>
    </Box>

 
          <Outlet />

    </>
  )
};

export default Layout;