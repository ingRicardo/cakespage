
import * as React from 'react';

import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../css/Blog.css'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';

import { useState, useEffect } from 'react';

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [newarticle, setNewarticle] = React.useState('');

  const [selectedArticle, setSelectedArticle] = React.useState(null);

  const [posttitle, setPosttitle] = React.useState('');
  const [postcontent, setPostcontent] = React.useState('');
  const [jsonposts, setJsonposts] = React.useState([]);
  const [jsonallposts, setJsonallposts] = React.useState([]);


  var url = "https://conisoft.org/cakes/loadarticles.php";


  const handleArticleChange = (event) => {
    setNewarticle(event.target.value);
  };

  
  const handlePosttitleChange = (event) => {
    setPosttitle(event.target.value);

  };

  const handlePostcontentChange = (event) => {
    setPostcontent(event.target.value);
  };

  const createPost = () => {
    if (posttitle !== '' &&  postcontent !=='' && selectedArticle !== null)
      if (localStorage.getItem('user') && localStorage.getItem('user') !== '') {


        var  postdata = {
          article: selectedArticle,
          posttitle: posttitle,
          postcomment: postcontent,
          username: localStorage.getItem('user')
        };

        var jsonDataToSend = JSON.stringify(postdata);
        var url = "https://conisoft.org/cakes/insertpost.php";

        axios
        .post(url, jsonDataToSend)
        .then((response) =>{
            
            console.log("success ",response.data);
        //    localStorage.setItem('user', response.data['result']);
            alert('your post was created '+response.data['posttitle']);
            window.location.href="blogs";
        
        })
        .catch((error) => console.error(error));

    } else {
        alert(' log in/ sign up  PLEASE! ');
      }

  }
  

  const createArticle = () => {
    if (newarticle !== '')
      if (localStorage.getItem('user') && localStorage.getItem('user') !== '') {

        alert(newarticle);

        var articledata = {
          articlename: newarticle,
          username: localStorage.getItem('user')
        };

        var jsonDataToSend = JSON.stringify(articledata);
        var url = "https://conisoft.org/cakes/insertarticle.php";

        axios
          .post(url, jsonDataToSend)
          .then((response) => {

            console.log("success ", response.data);
            window.location.href = "blogs";

          })
          .catch((error) => console.error(error));

      } else {
        alert(' log in/ sign up  PLEASE! ');
      }

  }
  useEffect(() => {

    axios.get(url)
      .then(response => {
        // Handle successful response
     //   console.log(response.data); // Access response data
        setSelectedArticle(response.data[0]['articlename']);
        setArticles(response.data);

        var postsbyarticle = {
          article: response.data[0]['articlename']

        }

        var jsonDataToSend = JSON.stringify(postsbyarticle);
        var url = "https://conisoft.org/cakes/loadposts.php";
      //  let postarray = [];
           // array.push(obj);
        axios
          .post(url, jsonDataToSend)
          .then((postrespond) => {
            /*
            for (var i =0; i < postrespond.data.length; i++){
             // console.log(postrespond.data[i]['article'], " _ ", response.data[0]['articlename']);
              if(postrespond.data[i]['article'] === response.data[0]['articlename'] ){
                console.log(" success ", postrespond.data[i]);
             //   setJsonposts(postrespond.data[i]);
                postarray.push(postrespond.data[i]);
              }
            }
            */
            setJsonallposts(postrespond.data);

            const filterPostByArticle = () => {
              return postrespond.data.filter(p => p.article === response.data[0]['articlename']);
            };

            setJsonposts(filterPostByArticle);
            //console.log(response.data[0]['articlename']);
           /*
            for (var i =0; i < postrespond.data.length; i ++){
              console.log(postrespond.data[i]);
              arr.push(postrespond.data[i]);
              setJsonposts(arr);
            } */
           })
          .catch((error) => console.error(error));

      

      })
      .catch(error => {
        // Handle error 
        console.error(error);
      });

    

  }, [url]);

  /*
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
  */
  /*
      <ul>
          {
            articles.map(r =>
            <li>  {r.id + " " + r.content} </li>
            )
          }
          </ul>
      <Box sx={{ flexGrow: 1 }}  >
        <Grid container spacing={2} >
          <Grid size={{ xs: 12, md: 2 }}>
      
  
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            aria-label="articles"
          >
                {
            articles.map(r =>
  
              <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary={r.content} />
              </ListItemButton>
            </ListItem>
  
              
            )
          }
  
       
    
          </List>
  
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
                     {idValue === r.id ? (<p> title : <b>{jsonValue.postTitle}</b> post: <b>{jsonValue.postContent}</b></p>):""}
                    <form method="post" onSubmit={handleSubmit}  >
                       
                    <Box sx={{ flexGrow: 1 }}  >
                      <Grid container spacing={2} >
                        <Grid size={{ xs: 6, md: 3 }}>
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Post title"
                          multiline
                          maxRows={4}
                          name="postTitle"
                          defaultValue="Eating"
                        />
                        <input name="postId" defaultValue= {r.id}  type="hidden" />
                      
                        </Grid>
                        <Grid size={{ xs: 6, md: 9 }}>
                        <TextField fullWidth
                          id="outlined-multiline-static"
                          name="postContent"
                          label="Edit your post"
                          multiline
                          rows={4}
                          defaultValue="I really enjoyed eating cakes yesterday!"
                        />
                        </Grid>
                        <Grid size={{ xs: 12, md: 12 }}>
                          <hr />
                        </Grid>
                        <Grid size={{ xs: 12, md: 12 }}>
                        <Button type="reset">Reset edits</Button>
                        <Button type="submit">Save post</Button>
                        </Grid>
                      
        
                      </Grid>
                      </Box>
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
            <ul>
                {articles.map(article => (
                  <li key={article.id}>{article.articlename} {article.username}</li>
                ))}
              </ul>
  */
  const handleArticleClick = (article) => {

    // console.log('You clicked on ',article['articlename'] );
    setSelectedArticle(article['articlename']);


    const filterPostByArticle = () => {
      return jsonallposts.filter(p => p.article === article['articlename']);
    };

    setJsonposts(filterPostByArticle);
  }

  return <>
    <h1>Blog Articles</h1>

    <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2} >
        <Grid size={{ xs: 12, md: 2 }}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            aria-label="articles">
            {
              articles.map(article =>
                <ListItem key={article.id} disablePadding >
                  <ListItemButton onClick={() => handleArticleClick(article)}   >
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={article.articlename} secondary={article.username} />
                  </ListItemButton>
                </ListItem>
              )
            }
          </List>

        </Grid>
        <Grid size={{ xs: 12, md: 10 }}>
          <Grid>
            <TextField id="standard-basic" label="new article " variant="standard" value={newarticle} onChange={handleArticleChange} />
            <Button variant="contained" onClick={createArticle} size="large">
              Add
            </Button>

          </Grid>
          <Grid  > <h4>{selectedArticle}</h4>
          <div>
          {
              
             jsonposts.map(paragraph => <> <p>  {paragraph.posttitle} {paragraph.postcomment} user: <b>{paragraph.username}</b></p>  </>)
/*
             jsonposts && jsonposts.filter(p => p.article === selectedArticle)
             .map((p, index) => {
               return (
              
                 <p>{p.article}</p>
               );
             })
*/

            }


            
        </div>
            <Box sx={{ flexGrow: 1 }}  >
              <Grid container spacing={2} >
                <Grid size={{ xs: 6, md: 3 }}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Post title"
                    multiline
                    maxRows={4}
                    name="posttitle"
                    defaultValue=""
                    onChange={handlePosttitleChange}
                  />

                </Grid>
                <Grid size={{ xs: 6, md: 9 }}>
                  <TextField fullWidth
                    id="outlined-multiline-static"
                    name="postcontent"
                    label="Edit your post"
                    multiline
                    rows={4}
                    defaultValue=""
                    onChange={handlePostcontentChange}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>

     

                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                  <hr />
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>

                  <Button variant="contained" onClick={createPost}>Save post</Button>
                </Grid>


              </Grid>
            </Box>


          </Grid>
        </Grid>
      </Grid>
    </Box>

  </>
};

export default Blogs;