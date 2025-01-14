
import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import Stack from '@mui/material/Stack';
import '../css/Home.css'

import { useTreeViewApiRef } from '@mui/x-tree-view/hooks';

const MUI_X_PRODUCTS = [
  {
    id: 'Bread',
    label: 'Bread',
    children: [
      { id: 'Chocolate-Bread', label: 'Chocolate' , price: '45'},
      { id: 'Vanilla-Bread', label: 'Vanilla' , price: '25' },
    ],
  },
  {
    id: 'Filling',
    label: 'Filling',
    children: [
      { id: 'Banana-Filling', label: 'Banana', price: '55' },
      { id: 'Cream-Filling', label: 'Cream', price: '95' },
    ],
  },
  {
    id: 'Cover',
    label: 'Cover',
    children: [{ id: 'Chantilly-Cream-Cover', label: 'Chantilly Cream', price: '75' },
               { id: 'Butter-Cream-Cover', label: 'Butter Cream', price: '13' }
    ],
  },
  {
    id: 'Decoration',
    label: 'Decoration',
    children: [{ id: 'Birthday-Decoration', label: 'Birthday', price: '78' },
               { id: 'Weedings-Decoration', label: 'Weedings', price: '64' }
    ],
  },
  {
    id: 'Size',
    label: 'Size',
    children: [{ id: 'Small-Size', label: 'Small', price: '99' },
               { id: 'Medium-Size', label: 'Medium', price: '74' },
               { id: 'Large-Size', label: 'Large', price: '68' }
    ],
  },
];


const Home = () => {
  const [list, setList] = React.useState([]);

  const apiRef = useTreeViewApiRef();

  const [lastSelectedItem, setLastSelectedItem] = React.useState(null);

  const [selectedItem, setSelectedItem] = React.useState(null);
 
  const handleSelectedItemsChange = (event, itemId) => {
    if (itemId == null) {
      setSelectedItem(null);
    } else {
      setSelectedItem(apiRef.current.getItem(itemId));
      console.log(itemId);
      const newList = list.concat({ itemId });

      
      setList(newList);
    }
  };

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

            apiRef={apiRef}
            selectedItems={selectedItem?.id ?? null}
            onSelectedItemsChange={handleSelectedItemsChange}
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
              : `Last selected item id: ${lastSelectedItem}`}
          </Typography>
 
          <Typography sx={{ minWidth: 300 }}>
            Selected item : {selectedItem == null ? 'none' : ( selectedItem.label + " " ) } 
                             
                            { selectedItem == null ? ' none' : ( selectedItem.price )  }
          </Typography>

          <ul>
            {list.map((item) => (
            <li key={item.itemId}>{item.itemId}</li>
           ))}
      </ul>
        </Grid>
      </Grid>
    </Box>
    </>
    )
       
  };
  
  export default Home;