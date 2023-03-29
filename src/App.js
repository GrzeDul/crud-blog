import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Post from './components/pages/Post/Post';
import NotFound from './components/pages/NotFound/NotFound';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Container from 'react-bootstrap/Container';
import CategoriesList from './components/pages/CategoriesList/CategoriesList';
import Category from './components/pages/Category/Category';
function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<CategoriesList />} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/add' element={<PostAdd />} />
        <Route path='/post/edit/:id' element={<PostEdit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
