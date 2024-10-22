import './About.css'
import profile_img from "../../assets/profile_img.svg"
const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About me</h1>
        </div>  
        <div className="about-sections">
            <div className="about-left">
            <img src={profile_img} alt="Profile Image" className="profile-img1" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am looking for an opportunity to apply my technical and creative skills in a work environment challenging that me allow continue developing myself as professional</p>
                    <p>My aim is work in a company innovative that offers opportunities for professional growth and development.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p> HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"> <p> Javascript</p><hr style={{width:"65%"}} /></div>
                    <div className="about-skill"> <p> React JS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"> <p> Python</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"> <p> Node JS</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>2+</h1>
                <p>YEARS OF HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About