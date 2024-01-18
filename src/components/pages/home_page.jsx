import "./home_page.css"
import CountUp from 'react-countup';


export default function HomePagee() {
    return (
        <div id="homepage" className="HomePage">
            <div className="hero">
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

                    <div className="button">
                        <a href="#form" className="green-button">Kontaktovat</a>
                    </div>
                </div>

                <div className="obrazek">
                    <img className="obrazek_muz" src="/dory.png" alt="muž" />
                </div>
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

                   
        </div>
    );
}