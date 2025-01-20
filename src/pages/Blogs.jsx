 
import * as React from 'react';

import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../css/Blog.css'

const Blogs = () => {

  const [inputValue, setInputValue] = React.useState('');
  const [idValue, setIdValue] = React.useState('');

  var [articles, setArticles] = React.useState(
    [
      { id: 1, content: "How to create a fondant cake"  , txtcontent: "great"},
      { id: 2, content: "I like to bake sweet cakes", txtcontent: "nice"},
      { id: 3, content: "My favorite dessert is a vanilla cake with banana", txtcontent: "cool"},
      { id: 4, content: "I love cakes", txtcontent: "pretty well"},
      { id: 5, content: "This is about selling cakes", txtcontent: "just do it"}
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

 

    const [jsonValue, setJsonValue] = React.useState('');

    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // You can pass formData as a fetch body directly:
     // fetch('/some-api', { method: form.method, body: formData });
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
 
      setJsonValue(formJson);

       articles.filter(articles  =>{
        if (articles.id ===  parseInt(formJson['postId']))
          setIdValue(articles.id); 
        return parseInt(formJson['postId']);
      
      });

 
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
                  <p>{r.txtcontent}</p>
                   {idValue === r.id ? (<p> title : {jsonValue.postTitle} comment: {jsonValue.postContent}</p>):""}
                  <form method="post" onSubmit={handleSubmit}  >
                    <label>
                      Post title: <input name="postTitle" defaultValue="Eating"  />
                     
                      <input name="postId" defaultValue= {r.id}  type="hidden" />
                    </label>
                    <label>
                      Edit your post:
                      <textarea
                        name="postContent"
                        defaultValue="I really enjoyed eating cakes yesterday!"
                        rows={4}
                        cols={40}
                        
                      />
                    </label>
                    <hr />
                    <Button type="reset">Reset edits</Button>
                    <Button type="submit">Save post</Button>
                  </form>
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