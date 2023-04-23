const Contact = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="contact-ctn">
            <form className="form-wrapper"  onSubmit={handleFormSubmit}>
            <h1>Send a message</h1>
                <div className="name-inputs">
                    <input id="contact-fm" type="text" placeholder="First Name"/>
                    <input id="contact-fm" type="text" placeholder="Last Name"/>
                </div>
                <div className="contact-inputs">
                    <input id="contact-fm" type="tel" placeholder="123-456-7890"/>
                    <input id="contact-fm" type="email" placeholder="Email"/>
                </div>
                <input id="contact-fm" type="text" placeholder="Subject"/>
                <textarea placeholder="Message"/>
                <input id="contact-fm" className="sub-btn-2" type="submit" value="Send"/>
            </form>
        </div>
    )
};

export default Contact;