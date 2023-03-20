import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const PostCard = ({ author, title, publishedDate, shortDescription, id }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p className='mb-1 text-bold'>
          <span>Author: {author}</span>
        </p>
        <p className='mb-1 text-bold'>
          <span>Published: {publishedDate}</span>
        </p>
        <Card.Text className='my-3'>{shortDescription}</Card.Text>
        <Link to={`post/${id}`}>
          <Button variant='primary'>Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

PostCard.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PostCard;
