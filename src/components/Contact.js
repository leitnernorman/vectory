import React from 'react';
import './Contact.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
  return (
    <footer className="container-fluid" id="contact">
        <div className="row mr-0 ml-0">
            <div className="col-md-6 pr-0 pl-0 map">
            <iframe title="whereto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.0816440340423!2d18.226607671362416!3d46.07472987646505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742b1333438b24b%3A0x29ee4f173e7a887b!2sVectory%20Tattoo!5e0!3m2!1shu!2shu!4v1624956973755!5m2!1shu!2shu"  allowFullScreen="" loading="lazy"></iframe>            </div>
            <div className="col-md-6 content-us">
                <div className="contact-form" id="contactm">
                <h3 className="text-uppercase">Időpontfoglalás</h3>
                <input type="text" className="form-control" placeholder="Neved"/>
                <input type="text" className="form-control" placeholder="E-mail címed"/>
                <textarea className="form-control" placeholder="Üzenet"></textarea>
                <button type="submit">Küldés</button>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Contact;
