import './form.scss'

function Form() {
    return (<form className='form'>
        <h2 className='form__title'>Contact Form</h2>
        <div className='form__inputs'>
            <input type="text" className='form__inputs-name' placeholder='Full name'/>
            <input type="email" className='form__inputs-email' placeholder='Email address'/>
        </div>
        <textarea className='form__message' maxLength='500' cols="20" rows="5" placeholder='Your message'></textarea>
        <button className='form__btn' type="submit">Send Message</button>
    </form>);
}

export default Form;