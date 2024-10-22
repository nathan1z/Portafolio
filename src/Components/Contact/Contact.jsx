import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5f17ff9d-bfa8-4ff9-b974-bd5781bbb6c5");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };


  return (
    <div  id= "contact" className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am available to take on new projects and challenges in the world of programming and developing new technologies, so feel free to reach out to me about any project you’d like me to work on. You can contact me at any time</p>
            
            <div className="contacts-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>jznathan01@gmail.com</p>
                </div>
                <div className="contact-detail">
                <img src={call_icon} alt="" /> <p>+593 984416401</p>
                </div>
                <div className="contact-detail">
                <img src={location_icon} alt="" /> <p>Quito, Ecuador</p>
                </div>
            </div>
        </div>  
        <form onSubmit={onSubmit} action="" className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your name' name= 'name' />
            <label htmlFor="">Your Email</label>
            <input type="mail" placeholder='Enter Your mail' name= 'email' />
            <label htmlFor="">Write your message here</label>
            <textarea type="message" rows="8" placeholder='Enter Your message' name= 'name' />
            <button  type='submit' className='contact-submit'>Submit now</button>
        </form>
    </div>
    </div>
  )
}

export default Contact