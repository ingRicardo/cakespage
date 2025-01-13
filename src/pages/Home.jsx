
import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import Stack from '@mui/material/Stack';
import '../css/Home.css'
const MUI_X_PRODUCTS = [
  {
    id: 'Bread',
    label: 'Bread',
    children: [
      { id: 'Chocolate-Bread', label: 'Chocolate' },
      { id: 'Vanilla-Bread', label: 'Vanilla' },
    ],
  },
  {
    id: 'Filling',
    label: 'Filling',
    children: [
      { id: 'Banana-Filling', label: 'Banana' },
      { id: 'Cream-Filling', label: 'Cream' },
    ],
  },
  {
    id: 'Cover',
    label: 'Cover',
    children: [{ id: 'Chantilly-Cream-Cover', label: 'Chantilly Cream' },
               { id: 'Butter-Cream-Cover', label: 'Butter Cream' }
    ],
  },
  {
    id: 'Decoration',
    label: 'Decoration',
    children: [{ id: 'Birthday-Decoration', label: 'Birthday' },
               { id: 'Weedings-Decoration', label: 'Weedings' }
    ],
  },
  {
    id: 'Size',
    label: 'Size',
    children: [{ id: 'Small-Size', label: 'Small' },
               { id: 'Medium-Size', label: 'Medium' },
               { id: 'Large-Size', label: 'Large' }
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