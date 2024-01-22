import "./reference_page.css"
import {motion} from "framer-motion"

export default function Reference() {
    return (
            <div id="reference" class="landing-clients">
                <motion.div 
                initial= {{scale: 1, opacity: 0, y: 70}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                viewport={{once: false}}
                >
                    <h1 class="titleReference">Pracoval <span className="spanReference">jsem</span> například pro</h1>
                </motion.div>

                <motion.div
                 initial= {{scale: 1, opacity: 0, y: 70}}
                 whileInView={{opacity: 1, y: 0}}
                 transition={{duration: 0.5}}
                 viewport={{once: false}}
                >
                    <div class="container">
                        <div class="loga">
                                <div>
                                    <img className="logoReference" src="/csob.png" alt="" />
                                </div>
                                <div>
                                    <img className="logoReference" src="/glorious.png" alt="" />
                                </div>
                                <div>
                                    <img className="logoReference" src="/judo.png" alt="" />
                                </div>
                        </div>
                    </div>
                </motion.div>
            </div>

    )   
}