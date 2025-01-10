import { Outlet, Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  

const Layout = () => {
  return (
    <>


    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Item><h3>Cakes' Page</h3></Item>
        </Grid>
        <Grid size={{ xs: 4, md: 4 }}>
          <Item><Link to="/">Home</Link></Item>
        </Grid>
        <Grid size={{ xs: 4, md: 4 }}>
          <Item><Link to="/blogs">Blogs</Link></Item>
        </Grid>
        <Grid size={{ xs: 4, md: 4}}>
          <Item><Link to="/contact">Contact</Link></Item>
        </Grid>
      </Grid>
    </Box>


      <nav>
        <ul>
   
        
         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;