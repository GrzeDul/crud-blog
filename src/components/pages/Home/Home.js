import RenderPosts from '../../features/RenderPosts/RenderPosts';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <main>
      <div className='main-title d-flex flex-row mb-5'>
        <h1 className='m-0 fs-3 text-bold'>All Posts</h1>
        <Link to='post/add' className='ms-auto'>
          <Button variant='outline-success'>Add post</Button>
        </Link>
      </div>
      <RenderPosts />
    </main>
  );
};

export default Home;
