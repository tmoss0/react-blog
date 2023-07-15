import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/List';
import BlogPostPage from './components/Post';
import BlogPostProps from './types/BlogPostProps';
import { fetchAPI } from './constants';

const App: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostProps[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(fetchAPI);
        const data: BlogPostProps[] = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<BlogList blogPosts={blogPosts} />} />
          <Route path='/:id' element={<BlogPostPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
