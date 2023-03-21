import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { addPost } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({ title, author, publishedDate, content, shortDescription })
    );
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setContent('');
    setShortDescription('');
    navigate('/');
  };
  return (
    <Form onSubmit={handleFormSubmit}>
      <Row>
        <Col sm={8} md={6}>
          <Form.Group className='mb-3' controlId='formTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Title'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formAuthor'>
            <Form.Label>Author</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter author'
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formPublished'>
            <Form.Label>Published</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter date'
              value={publishedDate}
              onChange={(e) => {
                setPublishedDate(e.target.value);
              }}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className='mb-3' controlId='TextareaDescription'>
        <Form.Label>Short description</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          placeholder='Leave a comment here'
          value={shortDescription}
          onChange={(e) => {
            setShortDescription(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='TextareaContent'>
        <Form.Label>Main content</Form.Label>
        <Form.Control
          as='textarea'
          rows={6}
          placeholder='Leave a comment here'
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default AddPostForm;
