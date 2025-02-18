import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import WorkIcon from '@mui/icons-material/Work';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import '../css/contact.css'
import riky from '../images/rikyhappy.jpg';


const Contact = () => {
    return <>
        <h1>Contact Me</h1>

        <Box sx={{ flexGrow: 1 }} className='contain'
        >

            <Grid container spacing={2}    >
                <Grid size={{ xs: 12, md: 12 }} >
                    <Card sx={{}} style={{ width: 400 }}>
                        <CardMedia
                            sx={{ height: 650 }}
                            image={riky}
                            title="Riky"

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Riky Macias
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              <WorkIcon/>  Computer Enginner
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              <AlternateEmailIcon/>ramo2884@gmail.com
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              <PhoneAndroidIcon/>6641268391
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </Box>
    </>;

};

export default Contact;