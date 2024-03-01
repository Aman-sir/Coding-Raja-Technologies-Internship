import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Providers from "../src/rtk/Providers"
import Blogs from "../src/components/Blogs"
import Blogpage from './components/Blogpage';


function App() {
  return (
    <div className="App bg-black min-h-screen">

      <BrowserRouter>
        <Providers>
          <Navbar />

          <Routes>
            <Route exact path='/' element={<Container />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/Blogs' element={<Blogs />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signUp' element={<Signup/>}></Route>
            <Route exact path='/Blog/:id' element={<Blogpage />}></Route>
          </Routes>
        </Providers>
      </BrowserRouter>
    </div>
  );
}

export default App;
