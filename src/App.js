import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Team from './pages/Team';
import About from './pages/About';
import NoPage from './pages/NoPage';
import NavBar from './components/NavBar';
import AppFoot from './components/appFoot';

// rename /resources to /data
// study the layouts you've used a few times and create another appropriately named layout that takes in the children (other components to render)
// !! Dont forget to link through to a specific blog ultilising react-router-dom. NO hard coding.

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />} >
        <Route exact path="/" element={<Home />} />
        <Route exact path="blog" element={<Blog />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="team" element={<Team />} />
        <Route exact path="contactus" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

// Extract this into its own dir called layouts.
function AppLayout(){
  return(
    <>
    <NavBar />
    <Outlet />
    <AppFoot />
    </>
  )
}

export default App;
