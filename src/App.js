
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomFooter from './components/footer/CustomFooter';
import Guests from './components/guests/Guests';
import Team from './components/teams/Team';
import Gallery from './components/gallery/Gallery';
import Schedule from './components/schedule/Schedule'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Register from './components/register/Register';
import PrivacyPolicy from './components/terms_conditions/PrivacyPolicy';
function App() {
  return (
    <div className='body'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/guest" element={<Guests />} />
        <Route path='/team' element={<Team />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/privacyplolicy' element={<PrivacyPolicy />} />
      </Routes>
      <CustomFooter />
    </div>
  );
}

export default App;