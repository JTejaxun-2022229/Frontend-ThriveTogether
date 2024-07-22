import './hero.css';
import heroImg from '../../assets/img/hero-img.png';

export const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-image-container">
        <img src={heroImg} alt="hero" className="hero-image" />
      </div>
      <div className="hero-content">
        <div className="title-container">
          <h1 className="title">
            Thrive <br className="sm:block hidden" />
            <span className="text-gradient">Together</span>
          </h1>
        </div>
        <h1 className="subtitle">Un nuevo comienzo</h1>
        <p className="paragraph">
          Nuestro equipo de expertos y sobrevivientes está 
          aquí para proporcionarte las herramientas y el apoyo 
          necesarios para superar la adicción. Juntos, podemos 
          ayudarte a encontrar un camino hacia la recuperación.
        </p>
      </div>
    </section>
  );
};
