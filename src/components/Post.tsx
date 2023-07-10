import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogPostProps from '../types/BlogPostProps';

const BlogPostPage: React.FC = () => {
  const [blogPost, setBlogPost] = React.useState<BlogPostProps | null>(null);
  const { id } = useParams<{ id: string }>();
  const fetchAPI = 'https://jsonplaceholder.typicode.com/posts/';
  let navigate = useNavigate();

  React.useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`${fetchAPI}${id}`);
        const data: BlogPostProps = await response.json();
        setBlogPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };
    fetchBlogPost();
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  const goHome = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div className='container mx-auto p-5'>
      <h2 className='text-4xl mb-2 font-semibold'>{blogPost.title}</h2>
      <p className='my-4'>{blogPost.body}</p>
      <button
        className='p-2 bg-red-900 text-white rounded-md shadow-sm hover:text-gray-800 hover:bg-lime-300'
        onClick={goHome}>
        Go Back
      </button>
    </div>
  );
};

export default BlogPostPage;
