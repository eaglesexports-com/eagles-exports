import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Head Office - Indore</h4>
                    <span>18/1 Balaji Vihar, Sanwer Road, Industry Area, Indore M.P</span>
                    <h4>Corporate Office</h4>
                    <span>49/C Nagin Nagar Indore, M.P India</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>+91 9243986665</span>
                    <h4>Whatsapp</h4>
                    <span>+91 9243986665</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>info@eaglesexports.com</span>
                    <div><h5>Quick Links</h5></div>
                 <div style={{display:"flex",gap:"10px"}}><p><Link to='/' style={{textDecoration:"none",color:"#FEA116"}}>Home</Link></p>
                 <p><Link to='/about' style={{textDecoration:"none",color:"#FEA116"}}>About</Link></p>
                 <p><Link to='/products' style={{textDecoration:"none",color:"#FEA116"}}>Products</Link></p>
                 <p><Link to='/services' style={{textDecoration:"none",color:"#FEA116"}}>Services</Link></p>
                 <p><Link to='/contact' style={{textDecoration:"none",color:"#FEA116"}}>Contact</Link></p>
                 </div> 
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright &copy; 2025, All Right Reserved Eagle Exports.</p>
                </div>
              </div>
      
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
