import "./codelam_page.css"
import {motion} from "framer-motion"

export default function Service() {
    return (
        <div id="codelam">
            <motion.div
             initial= {{scale: 1, opacity: 0, y: 70}}
             whileInView={{opacity: 1, y: 0}}
             transition={{duration: 0.5}}
             viewport={{once: false}}
            >
                <div className="TitleService">
                    <h1>Co dělám</h1>
                </div>
            </motion.div>

            <motion.div 
            initial= {{scale: 1, opacity: 0, y: 70}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            viewport={{once: false}}
            >
                <div className="containerService">
                    <div className="TypeService">
                        <img className="IconService" src="/Vector.png" alt="" />
                        <h1>Software <br /> Development</h1>
                    </div>
                    <div className="TypeService">
                        <img className="IconService" src="/Vector1.png" alt="" />
                        <h1>Web <br /> Development</h1>
                    </div>
                    <div className="TypeService">
                        <img className="IconService" src="/Vector2.png" alt="" />
                        <h1>Web <br /> Design</h1>
                    </div>
                </div>
            </motion.div>

        </div>
    )   
}