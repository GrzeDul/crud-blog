import PostForm from '../PostForm/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { editPost, getPostById } from '../../../redux/postsRedux';
const EditPostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postData = useSelector((state) => getPostById(state, id));
  if (!postData) return <Navigate to='/' />;
  const handleSubmit = (post) => {
    dispatch(editPost({ id, ...post }));
    navigate('/');
  };
  return (
    <PostForm actionText='Edit post' action={handleSubmit} {...postData} />
  );
};

export default EditPostForm;
