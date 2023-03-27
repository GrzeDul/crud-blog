import Container from 'react-bootstrap/Container';
import PostCard from '../PostCard/PostCard';
import CardGroup from 'react-bootstrap/CardGroup';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { dateToString } from '../../../utils';
const RenderPosts = () => {
  const posts = useSelector(getAllPosts);
  return (
    <Container>
      <CardGroup>
        {posts.length === 0 && <h2 className='m-auto'>No posts</h2>}
        {posts.map((post) => (
          <PostCard
            key={post.id}
            {...post}
            publishedDate={dateToString(post.publishedDate)}
          />
        ))}
      </CardGroup>
    </Container>
  );
};

export default RenderPosts;
