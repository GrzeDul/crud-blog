import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import PropTypes from 'prop-types';
const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [author, setAuthor] = useState(props.author || '');
  const [content, setContent] = useState(props.content || '');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
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
        {actionText}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  actionText: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  content: PropTypes.string,
  shortDescription: PropTypes.string,
};

export default PostForm;
