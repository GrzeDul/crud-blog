import RenderPosts from '../../features/RenderPosts/RenderPosts';
import { getPostByCategory } from '../../../redux/postsRedux';
import { useParams } from 'react-router-dom';
import { useCallback } from 'react';
const Category = () => {
  const { category } = useParams();
  const selector = useCallback(
    (state) => getPostByCategory(state, category),
    []
  );
  return <RenderPosts selector={selector} />;
};

export default Category;
