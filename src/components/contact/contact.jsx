import './contact.scss'
import Testimonial from "../about/testimonials/testimonial";
import Form from "./form/form";

function Contact() {
    return (
        <div className='contact'>
            <h1>Aloqa</h1>
            <hr/>
            <div className='contact__map'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60315.37569059441!2d72.3055821156051!3d40.78410171337472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc901d6b13d4ef%3A0xfc45bcaa7973dfac!2sAndijan%2C%20Uzbekistan!5e0!3m2!1sen!2sbd!4v1667296825668!5m2!1sen!2sbd"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Form/>
        </div>
    );
}

export default Contact;