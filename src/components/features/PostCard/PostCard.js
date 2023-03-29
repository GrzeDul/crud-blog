import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const PostCard = ({
  author,
  title,
  publishedDate,
  shortDescription,
  id,
  category,
}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body className='d-flex flex-column'>
        <Card.Title>{title}</Card.Title>
        <p className='mb-1 '>
          <span className='text-bold'>Author: </span>
          {author}
        </p>
        <p className='mb-1 '>
          <span className='text-bold'>Published: </span>
          {publishedDate}
        </p>
        <p className='mb-1'>
          <span className='text-bold'>Category: </span>
          {category}
        </p>
        <Card.Text className='my-3'>{shortDescription}</Card.Text>
        <Link to={`/post/${id}`} className='mt-auto'>
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
  category: PropTypes.string.isRequired,
};

export default PostCard;
