import Container from 'react-bootstrap/Container';
import PostCard from '../PostCard/PostCard';
import CardGroup from 'react-bootstrap/CardGroup';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
const RenderPosts = () => {
  const posts = useSelector(getAllPosts);
  return (
    <Container>
      <CardGroup>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </CardGroup>
    </Container>
  );
};

export default RenderPosts;
