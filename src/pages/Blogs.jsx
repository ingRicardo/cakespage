 
import * as React from 'react';

import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../css/Blog.css'

const Blogs = () => {

  const [inputValue, setInputValue] = React.useState('');
  var [articles, setArticles] = React.useState(
    [
      { id: 1, content: "How to create a fondant cake"},
      { id: 2, content: "I like to bake sweet cakes"},
      { id: 3, content: "My favorite dessert is a vanilla cake with banana"},
      { id: 4, content: "I love cakes"},
      { id: 5, content: "This is about selling cakes"}
    ]);

    const handleInputChange = (event) => {
      setInputValue(event.target.value);

    };

    const shoot = () => {
      if(inputValue!==''){
        const newList = articles.concat({ id: articles.length+1, content: inputValue  } );
        setArticles(newList);
      }
    }


    return <>
    <h1>Blog Articles</h1>

    <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2} >
        <Grid size={{ xs: 12, md: 2 }}>
        <ul>
        {
          articles.map(r =>
          <li>  {r.id + " " + r.content} </li>
          )
        }
        </ul>
        </Grid>
        <Grid size={{ xs: 12, md: 10 }}>
        <Box className='maincl'>
          <TextField id="standard-basic" label="add article " variant="standard"  value={inputValue} onChange={handleInputChange}/>
          <Button variant="contained" onClick={shoot} size="large">
          Add
        </Button>
        <React.Fragment>
          { 
             <div className='maincl' >  
            
            {
              articles.map(r =><>
              <div>  {r.id + " " + r.content} </div>
              <textarea name="postContent" rows={4} cols={40} />
              <div>  
                         <Button variant="contained"  size="small"> Post</Button>
              </div>
               </>)
            }
            
             </div>
             
          }
          </React.Fragment>

       
        </Box>

        </Grid>
      </Grid>
    </Box>

    </>
  };
  
  export default Blogs;