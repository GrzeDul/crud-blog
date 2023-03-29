import Container from 'react-bootstrap/Container';
import PostCard from '../PostCard/PostCard';
import CardGroup from 'react-bootstrap/CardGroup';
import { getAllPosts } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { dateToString } from '../../../utils';
const RenderPosts = ({
  selector = getAllPosts,
  noPostText = 'No posts',
  category,
}) => {
  const posts = useSelector(selector);

  return (
    <Container>
      <CardGroup>
        {posts.length === 0 && <h2 className='m-auto'>{noPostText}</h2>}
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
