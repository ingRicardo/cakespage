import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';


import '../css/contact.css'


const Contact = () => {
    return <>
        <h1>Contact Me</h1>

        <Box sx={{ flexGrow: 1 }} className='contain'
        >

            <Grid container spacing={2}    >
                <Grid size={{ xs: 12, md: 12 }} >
                    <Card sx={{}} style={{ width: 470 }}>
                        <CardMedia
                            sx={{ height: 700 }}
                            image="https://scontent.ftij1-3.fna.fbcdn.net/v/t39.30808-6/465419538_10162068417375359_5459318880259107201_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFp1m3-Y24q0cUb0bGeWspmAjM4uILI6ucCMzi4gsjq54EFwnUZYLfAH8c2MXSlDu4&_nc_ohc=FELqBlEVDLAQ7kNvgHJKHBG&_nc_zt=23&_nc_ht=scontent.ftij1-3.fna&_nc_gid=AMnYJBU7cxLOOSWEbz6SRWs&oh=00_AYAjGkCjm6KwntcaleX6A6xUj_AGDYIdmWX3I-vrWtfCRA&oe=67A81F41"
                            title="Riky"

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Riky Macias
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Computer Enginner
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                E-mail: ramo2884@gmail.com
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Cellphone: 6641268391
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