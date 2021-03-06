import React, { Component } from 'react';
// import axios from '../../axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
//import FullPost from '../FullPost/FullPost';

class Blog extends Component {

	render () {
		
 		return (
					<div className="Blog">
						 <header>
								 <nav>
									 <ul>
										 <li><NavLink
													activeClassName="my-active"
													activeStyle={{
														color: '#fa923f',
														textDecoration: 'underline'
													}}
													to="/posts/" 
													exact>Posts</NavLink></li>
										 <li><NavLink to={{
											 			pathname: '/new-posts',
														hash: '#submit',
														search: '?quick-submit=true'
										 }}>New Posts</NavLink></li>
									 </ul>
								 </nav>
						 </header>
							
						{/*	 <Route path="/" exact render={ () => <h1>Home</h1> } /> */}
						
						<Switch>
							<Route path="/new-posts" component={NewPost}/>
							<Route path="/posts" component={Posts}/>
						</Switch>
							
					</div>
			);
	}
}

export default Blog;