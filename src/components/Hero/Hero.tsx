import "./Hero.css";
const Hero = () => {
    return (
        <section className="hero">
          <div>
            <h1>Hire Verified Interns with Ease</h1>
            <p>
                A smart platform that connects you to skilled interns who fits your business needs.
            </p>
            <div className="hero__buttons">
                <button className="primary">Post Job</button>
                <button className="secondary">Register for Free</button>
            </div> 
          </div>
          <div className="hero__image">
            <img src="" alt="Professional woman holding a laptop" />
          </div>
        </section>
    );
};
export default Hero;