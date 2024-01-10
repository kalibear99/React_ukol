
import './App.css';
import HomePage from './components/pages/home_page';
import Navbar from './components/navbar/navbar';
import AboutMe from './components/pages/aboutme_page';
import Service from './components/pages/codelam_page';
import Form from './components/pages/kontakt_page';
import Footer from './components/footer/footer';
import Reference from './components/pages/reference_page';


export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>   
      <AboutMe></AboutMe>
      <Service></Service>
      <Reference></Reference>
      <Form></Form>
      <Footer></Footer>
    </div>                      
  );
}
