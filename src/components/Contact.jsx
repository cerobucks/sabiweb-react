import React from 'react';
import '../assets/styles/Contact.css';

const Contact = () => (
    <section class="contact col-md-12 text-center" id="contact">
    <h1>How can I help you?</h1>
    <div class="container p-4">

        <div class="row">
            <div class="col-md-6 text-left">
                <h6>Name</h6>
                <input type="text" class="form-control" placeholder="John Doe"/>
            </div>
            <div class="col-md-6 text-left"> 
                <h6>Email</h6>
                <input type="text" class="form-control" placeholder="john@mail.com"/>
            </div>
            <div class="col-md-12 text-left">
            <h6>Message</h6>
            <textarea type="text"class="form-control" placeholder="Hi, I'm John..." rows="10"></textarea>
            </div>
            <div class="col-md-12 text-right pt-2">
                <input type="submit" class="btn " />
            </div>
        </div>

    </div>
</section>
)

export default Contact;