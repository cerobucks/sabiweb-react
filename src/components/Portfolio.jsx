import React from 'react';
import '../assets/styles/Portfolio.css';
import frontendIcon from '../assets/img/frontend.png';
import backendIcon from '../assets/img/backend.png';
import devopsIcon from '../assets/img/devops.png';


const Portfolio = () => (
    <section class="portfolio col-md-12">

    <h1>Portfolio</h1>

    <div class="row">
        <div class="col-md-3 side-bar">
            <div class="p-1">
                <div class="card">
                    <img src={frontendIcon} class="center-block" alt="front-end"/>
                    <h6>Frontend Dev.</h6>
                </div>
            </div>
            <div class="p-1">
            <div class="card">
                <img src={backendIcon} class="center-block" alt="front-end"/>
                <h6>Backend Dev.</h6>
            </div>
        </div>
        <div class="p-1">
            <div class="card">
                <img src={devopsIcon} class="center-block" alt="front-end"/>
                <h6>DevOps</h6>
            </div>
        </div>
    </div>
        <div class="col-md-9">
         <div class="col-md-12">
            <div class="row">
                
                <div class="p-1 col-md-4">
                    <div class="card  portfolio-item">
  
                    </div>
                </div>
                <div class="p-1 col-md-4">
                    <div class="card  portfolio-item">
  
                    </div>
                </div>
                <div class="p-1 col-md-4">
                    <div class="card  portfolio-item">
  
                    </div>
                </div>

                <div class="p-1 col-md-4">
                    <div class="card  portfolio-item">
  
                    </div>
                </div>
                <div class="p-1 col-md-4">
                    <div class="card  portfolio-item">
  
                    </div>
                </div>
                <div class="p-1 col-md-4">
                    <div class="card  portfolio-item">
  
                    </div>
                </div>
             
             
            </div>
         </div>
        </div>
    </div>
</section>
)

export default Portfolio;