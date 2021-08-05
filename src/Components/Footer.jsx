import '../Styles/footerStyles.css';

import { GrInstagram } from 'react-icons/gr';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

let iconStyles = { fontSize: "22pt", margin: "10px" };

const Footer = () => {
    return (
        <div className="container">
            <ul className="flexboxOne">
                <a href="https://goo.gl/maps/2kcuevedkTU8n4sg6" target="_blank"><p>KBH - Commerce & Culture</p>
                <p>Nørregade 28D, 1. sal</p>
                <p>1165 København K</p>
                </a>
            </ul>
            <ul className="flexboxTwoUl">
                <div className="flexboxTwo">
                    <p>Følg os:</p>

                    <div className="flexboxTwo-paragraph">
                        <a href="https://www.facebook.com/cphcitycenter/" target="_blank">
                            <FaFacebookSquare style={iconStyles} />
                        </a>
                        <a href="https://www.instagram.com/cphcitycenter/" target="_blank">
                            <GrInstagram style={iconStyles} />
                        </a>
                        <a href="https://www.linkedin.com/company/34749072" target="_blank">
                            <AiFillLinkedin style={iconStyles} />
                        </a>
                    </div>
                </div>
            </ul>
            <ul className="flexboxThree">
                <a href="tel:36856606"><p>36 85 66 06</p></a>
                <a href="mailto:info@kcc.dk"><p>info@kcc.dk</p></a>
            </ul>
        </div>
    );
}

export default Footer;