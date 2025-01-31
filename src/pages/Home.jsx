
import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import Stack from '@mui/material/Stack';
import '../css/Home.css'
import Button from '@mui/material/Button';
import { useTreeViewApiRef } from '@mui/x-tree-view/hooks';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled, alpha } from '@mui/material/styles';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CakeIcon from '@mui/icons-material/Cake';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.grey[200],
  [`& .${treeItemClasses.content}`]: {
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
    [`& .${treeItemClasses.label}`]: {
      fontSize: '1.2rem',
      fontWeight: 500,
    },
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(0, 1.2),
    ...theme.applyStyles('light', {
      backgroundColor: alpha(theme.palette.primary.main, 0.25),
    }),
    ...theme.applyStyles('dark', {
      color: theme.palette.primary.contrastText,
    }),
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
  ...theme.applyStyles('light', {
    color: theme.palette.grey[800],
  }),
}));

const MUI_X_PRODUCTS = [
  {
    id: 'Bread',
    label: 'Bread',
    children: [
      { id: 'Chocolate-Bread', label: 'Chocolate' , price: '45.00'},
      { id: 'Vanilla-Bread', label: 'Vanilla' , price: '25.00' },
    ],
  },
  {
    id: 'Filling',
    label: 'Filling',
    children: [
      { id: 'Banana-Filling', label: 'Banana', price: '55.00' },
      { id: 'Cream-Filling', label: 'Cream', price: '95.00' },
    ],
  },
  {
    id: 'Cover',
    label: 'Cover',
    children: [{ id: 'Chantilly-Cream-Cover', label: 'Chantilly Cream', price: '75.00' },
               { id: 'Butter-Cream-Cover', label: 'Butter Cream', price: '13.00' }
    ],
  },
  {
    id: 'Decoration',
    label: 'Decoration',
    children: [{ id: 'Birthday-Decoration', label: 'Birthday', price: '78.00' },
               { id: 'Weedings-Decoration', label: 'Weedings', price: '64.00' }
    ],
  },
  {
    id: 'Size',
    label: 'Size',
    children: [{ id: 'Small-Size', label: 'Small', price: '99.00' },
               { id: 'Medium-Size', label: 'Medium', price: '74.00' },
               { id: 'Large-Size', label: 'Large', price: '68.00' }
    ],
  },
];


const Home = () => {
  const [list, setList] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const apiRef = useTreeViewApiRef();
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [emailAddress, setEmail] = React.useState( );

  const handleSelectedItemsChange = (event, itemId) => {
    if (itemId == null) {
      setSelectedItem(null);
    } else {
      setSelectedItem(apiRef.current.getItem(itemId));
   
      if(apiRef.current.getItem(itemId).price){
        const newList = list.concat({ id: itemId, label:  apiRef.current.getItem(itemId).label , price: apiRef.current.getItem(itemId).price} );
          
        setList(newList);

         const uniqIds = [...new Set(newList.map(item => (  item.id  )))]
         const uniqLabels = [...new Set(newList.map(item => (  item.label  )))]
         const uniqPrices = [...new Set(newList.map(item => (  item.price  )))]

         var listtmp =[];
         var tot =0.0;
         for (let i = 0; i < uniqIds.length; i++) {
           listtmp = listtmp.concat({ id: uniqIds[i], label:  uniqLabels[i] , price: uniqPrices[i]} );
           tot += parseInt(uniqPrices[i]);
         }
         setList(listtmp);
         setTotal(tot);
      }
  
    }
  };

 
  function handleRemove() {
 
    setList([]);
    setTotal(0);
    setEmail();
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleRemoveItem(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);

    var tot =0.0;
    for (let i = 0; i < newList.length; i++) {
      
      tot += parseInt(newList[i]['price']);
    }
   
    setTotal(tot);

  }

    return (
    <>
    <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2} >
        <Grid size={{ xs: 12, md: 2 }}>
          <h1>Menu</h1>
          <Box  sx={{ flexGrow: 1 }}>
            <Stack spacing={2}>
            <Typography>
              <b className='textstyle'>Select Your Ingredients:</b>
            </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <RichTreeView
                  items={MUI_X_PRODUCTS}
                  apiRef={apiRef}
                  selectedItems={selectedItem?.id ?? null}
                  onSelectedItemsChange={handleSelectedItemsChange}
                  defaultExpandedItems={['grid']}
                  slots={{ item: CustomTreeItem }}
                />
              </Box>
              <React.Fragment>
              {list && list.length >0
            ?
              <Button variant="outlined" onClick={handleClickOpen}>
                Add E-mail
              </Button> :""}
              <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                  component: 'form',
                  onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const email = formJson.email;
                    
                    setEmail(email);
                    handleClose();
                  },
                }}
              >
                <DialogTitle>E-mail</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To create your cake , please enter your email address here. We
                    will send updates occasionally.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit">Subscribe</Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>

            </Stack>
          </Box>
          
      </Grid>
        <Grid size={{ xs: 12, md: 10 }}>
          <h1>Home</h1>
          <Box  sx={{ flexGrow: 1 }}>

          {list && list.length >0
            ? (<><div className='containerTitle'>
              <Typography>
                <b className='textstyle'>Create Your Cake:</b>
                <Button type="button" onClick={handleRemove}>
                  X
                </Button>
              </Typography>
              </div>

              <List sx={{ width: '100%',   bgcolor: 'background.paper' }}>
                {emailAddress ? (<>
                  <Typography>
                    <b>Your E-MAIL:</b> <span> {emailAddress}</span>
                  </Typography></>) : ''}
        
                {list.map((item) => (
                      <>
                      <ListItem alignItems="flex-start" key={item.id}>
                        <ListItemAvatar>
                          <Avatar   >
                          <CakeIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary={item.id}
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                              >
                               {item.label}<span>_</span>
                              </Typography>
                                 $ {item.price} pesos
                            </React.Fragment>
                          }
                        />
                        <Button type="button" onClick={() => handleRemoveItem(item.id)}>
                                 X
                        </Button>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      </>
                ))}

              </List>
              <div className='containerTotal'>
                  <Typography>
                    <b>TOTAL:</b> <span>$ {total}</span>  <span>pesos</span>           
                  </Typography>

              </div>
              </> )
            : (<><Typography> 
                <b className='textstyle'>Select Cake's Ingredients from the menu</b>
              </Typography>
              <div style={{ display: 'block', width: '100%', padding: 30 }}>
                <h4>Delicious Cakes</h4>
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src="https://circle-cakes-app.web.app/assets/img/wedding14.jpg"
                      alt="wedding One"
                    />
                    <Carousel.Caption>
                      <h3>Wedding Cake</h3>
                      <p>Wedding Cake</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src="https://circle-cakes-app.web.app/assets/img/birthdaycake.jpg"
                      alt="birthday Two"
                    />
                    <Carousel.Caption>
                      <h3>Birthday Cake</h3>
                      <p>Birthday Cake</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src="https://circle-cakes-app.web.app/assets/img/halloween7.jpg"
                      alt="halloween Three"
                    />
                    <Carousel.Caption>
                      <h3>Halloween Cake</h3>
                      <p>Halloween Cake</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              
              </>)
          }

          </Box>
        </Grid>
      </Grid>
    </Box>
    </>
    )
       
  };
  
  export default Home;