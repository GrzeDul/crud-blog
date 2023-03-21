import PostForm from '../PostForm/PostForm';
import { addPost } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (post) => {
    dispatch(addPost(post));
    navigate('/');
  };

  return <PostForm actionText='Add post' action={handleSubmit} />;
};

export default AddPostForm;
