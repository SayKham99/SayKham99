import './form.scss'
import {useState} from "react";

function Form() {
    const token = '5715823415:AAHTTBY9JGgwPt-scALDv9MJuFZNe1r0d2A'
    const userID = '5235430145';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    let request = `Name: ${name} %0AEmail: ${email} %0AMessage: ${message}`
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${userID}&text=${request}`
    let api = new XMLHttpRequest()
    const Send = (e) => {
        e.preventDefault();
        if (name !== '' && email !== '' && message !== '') {
            api.open("GET", url, true)
            api.send()
        }
        setName('')
        setEmail('')
        setMessage('')
    }


    return (<form className='form'>
        <h2 className='form__title'>Contact Form</h2>
        <div className='form__inputs'>
            <input type="text"
                   className='form__inputs-name'
                   placeholder='Full name'
                   value={name}
                   onChange={e => setName(e.target.value)}
            />
            <input type="email" className='form__inputs-email' placeholder='Email address'
                   value={email}
                   onChange={e => setEmail(e.target.value)}
            />
        </div>
        <textarea className='form__message' maxLength='500' cols="20" rows="5" placeholder='Your message'
                  value={message}
                  onChange={e => setMessage(e.target.value)}
        ></textarea>
        <button className='form__btn' type="submit" onClick={e => Send(e)}>Send Message</button>
    </form>);
}

export default Form;