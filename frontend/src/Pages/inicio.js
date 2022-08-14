import React from 'react';
import imgArena1 from './images/arena1.jpg';
import imgArena2 from './images/arena2.jpg';
import imgArena3 from './images/arena3.jpg';
import imgFooter from './images/footer.png'


const Inicio = () => {
   

    return(
        <>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
        <div class="carousel-item active">
            <img src={imgArena1} class="d-block w-100" alt="Arena1"/>
            <div class="carousel-caption d-none d-md-block">
            <h5>Arena Corinthians</h5>
            <p>Neo Quimica Arena.</p>
            </div>
        </div>
        <div class="carousel-item">
         <img src={imgArena2} class="d-block w-100" alt="Arena"/>
         <div class="carousel-caption d-none d-md-block">
            <h5>Arena Corinthians</h5>
            <p>Neo Quimica Arena.</p>
          </div>
        </div>
        <div class="carousel-item">
            <img src={imgArena3} class="d-block w-100" alt="Body"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Arena Corinthians</h5>
              <p>Neo Quimica Arena.</p>
            </div>
         </div>
         </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
      <br/>
      <img alt='footer' src={imgFooter} />
      </>
    )
}

export default Inicio;
