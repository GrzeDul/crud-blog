import RenderPosts from '../../features/RenderPosts/RenderPosts';
import Button from 'react-bootstrap/Button';
const Home = () => {
  return (
    <main>
      <div className='main-title d-flex flex-row mb-5'>
        <h1 className='m-0 fs-3 text-bold'>All Posts</h1>
        <Button variant='outline-success' className='ms-auto'>
          Edit
        </Button>
      </div>
      <RenderPosts />
    </main>
  );
};

export default Home;
