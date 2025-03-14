
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


import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';



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
    if (posttitle !== '' && postcontent !== '' && selectedArticle !== null)
      if (localStorage.getItem('user') && localStorage.getItem('user') !== '') {


        var postdata = {
          article: selectedArticle,
          posttitle: posttitle,
          postcomment: postcontent,
          username: localStorage.getItem('user')
        };

        var jsonDataToSend = JSON.stringify(postdata);
        var url = "https://conisoft.org/cakes/insertpost.php";

        axios
          .post(url, jsonDataToSend)
          .then((response) => {

            console.log("success ", response.data);
            alert('your post was created ' + response.data['posttitle']);
            window.location.href = "blogs";

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

        //   console.log(response.data); // Access response data
        setSelectedArticle(response.data[0]['articlename']);
        setArticles(response.data);

        var postsbyarticle = {
          article: response.data[0]['articlename']

        }

        var jsonDataToSend = JSON.stringify(postsbyarticle);
        var url = "https://conisoft.org/cakes/loadposts.php";

        axios
          .post(url, jsonDataToSend)
          .then((postrespond) => {

            setJsonallposts(postrespond.data);

            const filterPostByArticle = () => {
              return postrespond.data.filter(p => p.article === response.data[0]['articlename']);
            };

            setJsonposts(filterPostByArticle);

          })
          .catch((error) => console.error(error));



      })
      .catch(error => {
        // Handle error 
        console.error(error);
      });



  }, [url]);


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

    <Box sx={{ flexGrow: 1 }} className='maincl' >
      <Grid container spacing={2} >
        <Grid size={{ xs: 5, md: 2 }}>
          <div className='scrollcontainer'>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            aria-label="articles">
              <ListItem   disablePadding >
              <TextField id="standard-basic" label="new article " variant="standard" value={newarticle} onChange={handleArticleChange} />
            <Button variant="contained" onClick={createArticle}  >
             Add 
            </Button>
              </ListItem>
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
          </div>
        </Grid>
        <Grid size={{ xs: 7, md: 10 }}>
 
    
          <Grid  > <span>Article:</span>   <span><b>{selectedArticle}</b></span>

          <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>


          {
          jsonposts.map(paragraph =><>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
             
            </ListItemAvatar> 
            <ListItemText primary={paragraph.posttitle} secondary={paragraph.postcomment }  />
          </ListItem>
           <div> user: {paragraph.username}   </div>
           <Grid size={{ xs: 12, md: 12 }}>
                  <hr />
          </Grid>
          </>)
         }


        </List>

            <Box sx={{ flexGrow: 1 }}  >
              <Grid container spacing={2} >
                <Grid size={{ xs: 12, md: 12 }}>
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
                <Grid size={{ xs: 12, md: 12 }}>
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
                  <Button variant="contained" onClick={createPost}>Save post</Button>
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                  <hr />
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