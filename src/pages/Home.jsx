
import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import Stack from '@mui/material/Stack';
import '../css/Home.css'
const MUI_X_PRODUCTS = [
  {
    id: 'grid',
    label: 'Bread',
    children: [
      { id: 'grid-bread-choco', label: 'Chocolate' },
      { id: 'grid-bread-vanilla', label: 'Vanilla' },
    ],
  },
  {
    id: 'grid-fill',
    label: 'Filling',
    children: [
      { id: 'grid-fill-bana', label: 'Banana' },
      { id: 'grid-fill-crea', label: 'Cream' },
    ],
  },
  {
    id: 'grid-cover',
    label: 'Cover',
    children: [{ id: 'grid-cover-chan', label: 'Chantilly Cream' },
               { id: 'grid-cover-butt', label: 'Butter Cream' }
    ],
  },
  {
    id: 'grid-decoration',
    label: 'Decoration',
    children: [{ id: 'grid-deco-birth', label: 'Birthday' },
               { id: 'grid-deco-wedd', label: 'weedings' }
    ],
  },
  {
    id: 'grid-size',
    label: 'Size',
    children: [{ id: 'grid-size-small', label: 'Small' },
               { id: 'grid-size-medium', label: 'Medium' },
               { id: 'grid-size-large', label: 'Large' }
    ],
  },
];


const Home = () => {
  const [lastSelectedItem, setLastSelectedItem] = React.useState(null);


  const handleItemSelectionToggle = (event, itemId, isSelected) => {
    if (isSelected) {
      setLastSelectedItem(itemId);
     
    }
  };

    return (
    <>
    <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2} >
        <Grid size={{ xs: 4, md: 2 }}>
          <h1>Menu</h1>
          <Box sx={{ minHeight: 352, minWidth: 250 }}>
          <Stack spacing={2}>
      <Typography>
        <b>Create Your Cake:</b>
      </Typography>
      <Box sx={{ minHeight: 352, minWidth: 300 }}>
        <RichTreeView
          items={MUI_X_PRODUCTS}
          onItemSelectionToggle={handleItemSelectionToggle}
        />
      </Box>
    </Stack>
    </Box>
          
        </Grid>
        <Grid size={{ xs: 8, md: 10 }}>
          <h1>Home</h1>
          <Typography>
            {lastSelectedItem == null
              ? 'No item selection recorded'
              : `Last selected item: ${lastSelectedItem}`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
    </>
    )
       
  };
  
  export default Home;