import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';

const PostForm = ({ action, actionText, ...props }) => {
  // const [title, setTitle] = useState(props.title || '');
  // const [shortDescription, setShortDescription] = useState(
  //   props.shortDescription || ''
  // );
  // const [publishedDate, setPublishedDate] = useState(
  //   props.publishedDate || new Date()
  // );
  // const [author, setAuthor] = useState(props.author || '');
  // const [content, setContent] = useState(props.content || '');
  // const [contentError, setContentError] = useState(false);
  // const [dateError, setDateError] = useState(false);

  const [formData, setFormData] = useState({
    title: props.title || '',
    shortDescription: props.shortDescription || '',
    publishedDate: props.publishedDate || new Date(),
    author: props.author || '',
    content: props.content || '',
    contentError: false,
    dateError: false,
  });

  const {
    title,
    author,
    publishedDate,
    shortDescription,
    content,
    contentError,
    dateError,
  } = formData;

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (e) => {
    setFormData((prev) => ({ ...prev, contentError: !content }));
    setFormData((prev) => ({ ...prev, dateError: !publishedDate }));

    if (content && publishedDate) {
      action({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
      });
    }
  };
  return (
    <Form onSubmit={validate(handleFormSubmit)}>
      <Row>
        <Col sm={8} md={6}>
          <Form.Group className='mb-3' controlId='formTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              {...register('title', { required: true, minLength: 3 })}
              type='text'
              placeholder='Enter Title'
              value={title}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, title: e.target.value }));
              }}
            />
            {errors.title && (
              <small className='d-block form-text text-danger mt-2'>
                This field is required and must be minimum 3 characters long
              </small>
            )}
          </Form.Group>
          <Form.Group className='mb-3' controlId='formAuthor'>
            <Form.Label>Author</Form.Label>
            <Form.Control
              {...register('author', { required: true, minLength: 3 })}
              type='text'
              placeholder='Enter author'
              value={author}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, author: e.target.value }));
              }}
            />
            {errors.author && (
              <small className='d-block form-text text-danger mt-2'>
                This field is required and must be minimum 3 characters long
              </small>
            )}
          </Form.Group>
          <Form.Group className='mb-3' controlId='formPublished'>
            <Form.Label>Published</Form.Label>
            <DatePicker
              selected={publishedDate}
              onChange={(date) =>
                setFormData((prev) => ({ ...prev, publishedDate: date }))
              }
            />
            {dateError && (
              <small className='d-block form-text text-danger mt-2'>
                Date can't be empty
              </small>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className='mb-3' controlId='TextareaDescription'>
        <Form.Label>Short description</Form.Label>
        <Form.Control
          {...register('shortDescription', { required: true, minLength: 20 })}
          as='textarea'
          rows={3}
          placeholder='Leave a comment here'
          value={shortDescription}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              shortDescription: e.target.value,
            }));
          }}
        />
        {errors.shortDescription && (
          <small className='d-block form-text text-danger mt-2'>
            This field is required and must be minimum 20 characters long
          </small>
        )}
      </Form.Group>
      <Form.Group className='mb-3' controlId='TextareaContent'>
        <Form.Label>Main content</Form.Label>
        <ReactQuill
          theme='snow'
          placeholder='Leave a comment here'
          value={content}
          onChange={(content) => setFormData((prev) => ({ ...prev, content }))}
        />
        {contentError && (
          <small className='d-block form-text text-danger mt-2'>
            Content can't be empty
          </small>
        )}
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
