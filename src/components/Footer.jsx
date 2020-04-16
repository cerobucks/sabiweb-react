import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => (
    <footer class="col-md-12">
    <div class="container text-center">
       <h1>Sabiweb</h1>
       <h6>Learn, grow & innovate.</h6>

       <div class="social">
       <a href="https://www.linkedin.com/in/sergio-sabino-3a27281a5/" target="_blanc"><i class="fa fa-linkedin"></i></a>
       <a href="https://www.facebook.com/sabiwebs/" target="_blanc"><i class="fa fa-facebook"></i></a>
       <a href="https://www.instagram.com/sabiwebs/" target="_blanc"><i class="fa fa-instagram"></i></a>
       <a href="https://twitter.com/sabiwebs/" target="_blanc"><i class="fa fa-twitter"></i></a>
       <a href="https://github.com/sabiwebs" target="_blanc"><i class="fa fa-github"></i></a>
       <a href="mailto: info@sabiweb.net" target="_blanc"><i class="fa fa-envelope"></i></a>
       </div>

       <div class="bottom">
           <h6>Made by me</h6>
           <h6 class="bottom-logo">© Sabiweb</h6>
           
        </div>
    </div>
</footer>
)

export default Footer;