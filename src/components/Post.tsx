import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPostProps from '../types/BlogPostProps';

const BlogPostPage: React.FC = () => {
  const [blogPost, setBlogPost] = React.useState<BlogPostProps | null>(null);
  const { id } = useParams<{ id: string }>();
  const fetchAPI = 'https://jsonplaceholder.typicode.com/posts/';

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

  return (
    <div>
      <h2>{blogPost?.title}</h2>
      <p>{blogPost?.body}</p>
    </div>
  );
};

export default BlogPostPage;
