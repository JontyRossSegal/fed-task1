import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Team from './pages/Team';
import About from './pages/About';
import NoPage from './pages/NoPage';
import AppLayout from './layouts/AppLayout';
import ViewBlog from './pages/ViewBlog';

// study the layouts you've used a few times and create another appropriately named layout that takes in the children (other components to render)
// !! Dont forget to link through to a specific blog ultilising react-router-dom. NO hard coding.

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />} >
        <Route exact path="/" element={<Home />} />
        <Route exact path="blog">
          <Route path="" element={<Blog />} />
          <Route path=":id" element={<ViewBlog />} />
        </Route>
        <Route exact path="about" element={<About />} />
        <Route exact path="team" element={<Team />} />
        <Route exact path="contactus" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
