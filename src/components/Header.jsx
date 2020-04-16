import React from 'react';
import '../assets/styles/Header.css';

const Header = () => (
    <>
    <header class="col-md-12">
    <nav class="navbar navbar-expand-lg">
        <h1 class="navbar-brand">Sabiweb </h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto"></ul>
          <li class="navbar-text" onclick="goToAbout()">
            ABOUT ME
          </li>
          <li class="navbar-text" onclick="goToContact()">
            CONTACT
          </li>
        </div>
      </nav>
      <div class="row">
        <div class="col-6">
        </div>    
        <div class="col-6 header-right-text">
           <h1>Software Developer <br/>
               & DevOps</h1>
               <h6>Hi, I'm software developer from Dominican Republic <br/>
                focused on creating clean and user-friendly <br/>
                experiences.</h6>
        </div>
       </div>
</header>

<div class="col-md-12 header-text-mobile">
    <h1>Software Developer 
        & DevOps</h1>
        
 </div>

    </>
)

export default Header;