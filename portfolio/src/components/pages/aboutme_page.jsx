import "./aboutme_page.css"
import 'animate.css';
import {motion} from "framer-motion"



export default function AboutMe() {
    return (

        <div id="aboutme">
            <motion.div
                initial= {{scale: 1, opacity: 0, y: 70}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                viewport={{once: false}}
            >
                <div className="aboutme_nadpis">
                    <h1>O mně</h1>
                </div>
            </motion.div>

            <motion.div 
            initial= {{scale: 1, opacity: 0, y: 70}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            viewport={{once: false}}
            >
                <div className="aboutme_info">
                    <p>Ahoj, jmenuji se <span className="spanForm">Darien Kalist</span> a je mi 18 let. Momentálně studuji na <span className="spanForm">Střední škole Baltaci</span> ve Zlíně, kde se zaměřuji na zajímavý svět informatiky. Baví mě nejen digitální svět, ale také bojové sporty. Mimo školní život se věnuji <span className="spanForm">brazilskému jiu-jitsu</span>. Bojové sporty mi nejen <span className="spanForm">poskytují fyzickou sílu</span>, ale také mě učí disciplíně a strategii. Je to pro mě nejen sport, ale i forma <span className="spanForm"> sebepoznání a seberealizace</span>.</p>
                </div>
            </motion.div>

            <motion.div
             initial= {{scale: 1, opacity: 0, y: 50}}
             whileInView={{opacity: 1, y: 0}}
             transition={{duration: 0.5}}
             viewport={{once: false}}
            
            >
                <div className="container">
                    <div className="about">


                        
                        <div className="circle black">
                            <div className="inner-circle green"></div>
                        </div>
                            <p className="text">Darien Kalist</p>
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
                            <p className="phone">123 456 789</p>
                    </div>
                </div>
            </motion.div>
            
        </div>
    );
        
}