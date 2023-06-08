import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Project from './components/Project'
import './App.css';
import 'dotenv/config'

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    // Using axios to fetch posts from Wordpress backend
    axios
      .get(process.env.POSTS_URL)
      .then((res) => {
        setPosts(res.data);
      });
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
      <div className='App'>
        <h1 className='App-header'>Chien-hsueh Huang's Project Highlights</h1>
        <div>
        {posts.map((item) => (
          <Project post={item} />
        ))}
        </div>
      </div>
  );
}

export default App;
