import "./home_page.css"
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import CountUp from 'react-countup';
import { introdata, socials } from '../my_data' 

export default function HomePagee() {
    return (
        <div className="HomePage">
                <div className="HomeText">
                    <div className="DoryInfo"> 
                        <p>Grafik & Web developer</p>
                    </div>
                    <div className="nadpis">
                        <h2>Ahoj, jsem</h2>
                    </div>
                    <div className="jmeno">
                        <h1>Darien Kalist</h1>
                    </div>
                </div>
                    
                    {/* <div className="icons"> 
                        <a className="icons" href="https://www.facebook.com/tvoje-facebook-stranka" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={25} />
                        </a>
                        <a className="icons" href="https://www.instagram.com/tvoje-instagram-stranka" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={25} />
                        </a>
                        <a className="icons" href="https://www.twitter.com/tvoje-twitter-stranka" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={25} />
                        </a>
                        <a className="icons" href="https://github.com//tvoje-Github-stranka" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={25} />
                        </a>
                    </div> */}
                    
                    <div className="button">
                        <button className="green-button">Kontaktovat</button>
                    </div>

                    <div className="rating-container">
                        <div className="rating-item">
                            <span className="rating-value"><CountUp end={80}/>+</span><br></br>
                            <span className="rating-label">Complete Project</span>
                        </div>
                        <div className="rating-item">
                            <span className="rating-value"><CountUp end={120}/>+</span><br></br>
                            <span className="rating-label">Client Around World</span>
                        </div>
                        <div className="rating-item">
                            <span className="rating-value"><CountUp end={5}/></span><br></br>
                            <span className="rating-label">Overall Rate</span>
                        </div>
                    </div>

                    <div className="obrazek">
                        <img className="obrazek_muz" src="/Muž.png" alt="muž" />
                    </div>
                    
        </div>
    );
}