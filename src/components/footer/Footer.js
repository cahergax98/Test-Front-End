import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import corebizLogo from './../../imgs/site-logo-corebiz-preto-cinza.svg';
import vTexLogo from './../../imgs/vtex.png';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <footer className='footer'>
          <div className="ubicacion">
            <h3 className="title">Ubicación</h3>
            <div className="separator white"></div>
            <div className="postal-dir">Avenida Andrômeda, 2000. Bloco 6 e 8 <br/> Alphavile SP</div>
            <div className="contact-phone">
              <a className="contact-link" href="tel:551130901039">
                +55 11 3090 1039
              </a>
            </div>
            <div className="contact-email">
              <a className="contact-link" href="email:brasil@corebiz.ag">brasil@corebiz.ag</a>
            </div>
          </div>
          <div className="contactanos">
            <div className="contact-email-btn">
              <a className='contact-btn-link' href="email:brasil@corebiz.ag">
                <FontAwesomeIcon className='icon-contact-email' icon={faEnvelope}/>
                <span className="contact-bnt-text">
                  contáctanos
                </span>
              </a>
            </div>
            <div className="contact-phone-btn">
              <a className='contact-btn-link' href="tel:551130901039">
                <FontAwesomeIcon className='icon-contact-phone' icon={faHeadphones}/>
                <span className="contact-btn-text">
                  habla con un consultor
                </span>
              </a>
            </div>
          </div>
          <div className="sponsors">
            <div className="sponsor">
              <div className="subtitle">Desarrollado por corebiz</div>
              <img src={corebizLogo} className="corebiz-logo" alt="Corebiz" />
            </div>
            <div className="sponsor">
              <div className="subtitle">Powered by</div>
              <img src={vTexLogo} className="vtex-logo" alt="VTex" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer