import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { useParams, Navigate } from 'react-router';
import { useState } from 'react';
import { deletePost } from '../../../redux/postsRedux';
const Post = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const handleDeleteClick = () => {
    dispatch(deletePost(id));
    handleClose();
  };
  const postData = useSelector((state) => getPostById(state, id));
  if (!postData) return <Navigate to='/' />;
  const { title, author, publishedDate, content } = postData;
  return (
    <article>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            The operation will completely remove post from the app. Are you sure
            you want to do that?
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </Button>
          <Button variant='danger' onClick={handleDeleteClick}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>

      <Container>
        <Row className='justify-content-md-center mb-5'>
          <Col xs lg='7' className='d-flex flex-row'>
            <h1 className='m-0 fs-3 text-bold'>{title}</h1>
            <div className='buttons ms-auto'>
              <Link to={`/post/edit/${id}`} className='ms-2'>
                <Button variant='outline-success'>Edit</Button>
              </Link>
              <Button
                variant='outline-danger'
                className='ms-2'
                onClick={() => {
                  handleShow();
                }}
              >
                Delete
              </Button>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col xs lg='7'>
            <p className='mb-1 text-bold'>
              <span>Author: {author}</span>
            </p>
            <p className='mb-1 text-bold'>
              <span>Published: {publishedDate}</span>
            </p>
            <p className='my-3'>{content}</p>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default Post;
