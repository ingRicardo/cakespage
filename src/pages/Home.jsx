
import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import Stack from '@mui/material/Stack';
import '../css/Home.css'
import Button from '@mui/material/Button';

import { useTreeViewApiRef } from '@mui/x-tree-view/hooks';

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
         console.log(total);
      }
  
    }
  };

 
  function handleRemove() {
 
    setList([]);
    setTotal(0);
  }


    return (
    <>
    <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2} >
        <Grid size={{ xs: 4, md: 2 }}>
          <h1>Menu</h1>
          <Box sx={{ minHeight: 352, minWidth: 250 }}>
          <Stack spacing={2}>
      <Typography>
        <b>Select Your Ingredients:</b>
      </Typography>
        <Box sx={{ minHeight: 352, minWidth: 300 }}>
          <RichTreeView
            items={MUI_X_PRODUCTS}
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
          {list && list.length >0
            ? (<div className='containerTitle'>
              <Typography>
                <b>Create Your Cake:</b>
                <Button type="button" onClick={handleRemove}>
                  X
                </Button>
              </Typography>
              </div> )
            : (<p>Select Cake's Ingredients from left menu</p>)
          }
          <ul>
            {list.map((item) => (
            <li key={item.id}>{item.id} ,{item.label} , $ {item.price}</li>
           ))}
          </ul>
          <div className='containerTitle'>
            <Typography>
              <b>TOTAL:</b> <span>$ {total}</span>
            </Typography>
          </div>
        
        </Grid>
      </Grid>
    </Box>
    </>
    )
       
  };
  
  export default Home;