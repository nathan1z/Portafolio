import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import pdf from "../../assets/ZAPATA_JONATHAN_CV.pdf";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile Image" className="profile-img" />
      <h1>
        {" "}
        <span> I'm Jonathan Zapata,</span> frontend developer base in Ecuador
      </h1>
      <p>
        I am a frontend developer, recently graduated in Software Engineering
        from the University of the Forces Armed ESPE in Ecuador, highly
        motivated and passionate about technology, with 1 year of experience in
        programming, developing applications, and web development .
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchorlink" offset={50} href="#contact">
            Connect With me
          </AnchorLink>
        </div>
        <a href={pdf} download="ZAPATA_JONATHAN_CV.pdf" className="pdf">
        <div className="hero-resume">         
            My Resume
        </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
