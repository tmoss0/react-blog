import BlogList from './components/List';
import BlogPostPage from './components/Post';

const App: React.FC = () => {
  return (
    <div className='App'>
      <BlogList blogPosts={BlogPostPage} />
    </div>
  );
};

export default App;
