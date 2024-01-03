
import './App.css';
import HomePage from './components/pages/home_page';
import Navbar from './components/navbar/navbar';
import AboutMe from './components/pages/second_page';
import Service from './components/pages/third_page';
import Footer from './components/footer/footer';

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>   
      <AboutMe></AboutMe>
      <Service></Service>
      <Footer></Footer>
    </div>                      
  );
}
