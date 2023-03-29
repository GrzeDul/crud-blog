import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { getCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const CategoriesList = () => {
  const postsCategories = useSelector((state) => getCategories(state));
  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <Col xs='auto' md={6}>
          <ListGroup>
            {postsCategories.map((category) => (
              <Link
                className='w-100'
                key={category}
                to={`/category/${category}`}
              >
                <ListGroup.Item className='w-100'>{category}</ListGroup.Item>
              </Link>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoriesList;
