import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './containers/home/Home';
import Tech from './containers/tech/Tech';
import Life from './containers/Life';
import Blog from './containers/Blog';
import Newsroom from './containers/Newsroom';
import Join from './containers/Join';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tech" element={<Tech/>}/>
        <Route path="/life" element={<Life/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/newsroom" element={<Newsroom/>}/>
        <Route path="/jobs" element={<Join/>}/>
      </Routes>
    </div>
  );
}

export default App;
