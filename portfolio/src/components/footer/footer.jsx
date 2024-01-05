import "./footer.css"
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (

        <div className="containerFooter">
            <div className="LogoFooter">
                <a href="#">D<span className="span">K</span></a>
                <p className="InfoFooter">© 2024 darienkalist s.r.o</p>
            </div>
            <div className="SocialFooter">
                <h1 className="TitleSocial">Sleduj mě</h1>
                <div className="icons"> 
                            <a className="icons" href="https://www.facebook.com/darien.kalist?locale=cs_CZ" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={25} />
                            </a>
                            <a className="icons" href="https://www.instagram.com/d.kalistt/?next=%2F" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={25} />
                            </a>
                            <a className="icons" href="https://twitter.com/franta1626944" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={25} />
                            </a>
                            <a className="icons" href="https://github.com/kalibear99" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={25} />
                            </a>
                </div>
            </div>
            <div className="KontatFooter">
                <h1 className="TitleKontakt">Kontaktovat</h1>
                <p className="EmailFooter">dory@gmail.com</p>
                <p className="PhoneFooter">+420 123 456 789</p>
            </div>
        </div>

    )   
}