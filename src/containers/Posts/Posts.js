import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
// import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
    state = {
      posts : []
    }

    componentDidMount(){
      console.log(this.props);
      axios.get('/posts')
        .then((response) => {
            const posts = response.data.slice(0, 6);
            const updatedPosts = posts.map( post => {
              return {
                ...post,
                author: 'Denny'
              }
            })
            this.setState({posts: updatedPosts})
            // console.log(res);
        })
        .catch((err) => {
          console.log(err);
          // this.setState({ error: true})
        })
    }

    
    postSelectedHandler = (id) => {
      this.props.history.push({ pathname: '/posts/' + id });
      // this.props.history.push('/' + id);
    }


    render(){

      let posts = <p style={{textAlign:'center'}}>Something Went Wrong</p>
      if(!this.state.error){
        posts = this.state.posts.map(post => {
           //<Link to={`/${post.id}`} key={post.id}>
         return <Post
              key={post.id}
              title={post.title} 
              author={post.author}
              clicked={ () => { this.postSelectedHandler(post.id) } }/>
          //</Link>
        })
      }

      return (
        <div>
          <section className="Posts">
            {posts}
          </section>
          <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
        </div>
      )
    }
}

export default Posts;