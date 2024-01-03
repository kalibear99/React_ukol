import "./second_page.css"
import 'animate.css';



export default function AboutMe() {
    return (
        <div>
            <div className="aboutme_nadpis">
                 <h1>O mně</h1>
            </div>

            <div className="aboutme_info">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>

            <div className="container">
                <div className="about">
                    <div className="circle black">
                        <div className="inner-circle green"></div>
                    </div>
                    <p className="phone">123 456 789</p>
                </div>

                <div className="about">
                    <div className="circle black">
                        <div className="inner-circle green"></div>
                    </div>
                    <p className="email">dory@gmail.com</p>
                </div>

                <div className="about">
                    <div className="circle black">
                        <div className="inner-circle green"></div>
                    </div>
                    <p className="text">Darien Kalist</p>
                </div>
            </div>
            
        </div>
    );
        
}