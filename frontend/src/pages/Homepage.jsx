import React,{useState,useEffect} from 'react';
import Layout from '../Layout/Layout';
import axios from 'axios';
import { baseUrl } from '../baseUrl';
import Post from '../components/Post';
const Homepage = () => {
  const [posts,setPosts] = useState([]);

  const fetchAllPosts=async()=>{
    const {data}=await axios.get(`${baseUrl}/api/post/all-posts`)
    if(data.success)
    setPosts(data.posts)
  console.log(data.posts)
  }
  useEffect(() => {
    fetchAllPosts()
  }, []);
  return (
    <div>
      <Layout type="mainHeading">
           {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
      </Layout>
    </div>
  );
}

export default Homepage;
