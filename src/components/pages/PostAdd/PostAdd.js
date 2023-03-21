import AddPostForm from '../../features/AddPostForm/AddPostForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const PostAdd = () => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md={8}>
          <h1>Add Post</h1>
          <AddPostForm />
        </Col>
      </Row>
    </Container>
  );
};

export default PostAdd;
