// == Import : npm
import React from 'react';
import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import {
  contactInputChange,
  contactInputDelete,
} from '../../actions';

// == Import : local
import './styles.scss';
import 'react-toastify/dist/ReactToastify.css';

// == Composant
const Contact = ({
  contactData,
  contactInputChange,
  contactInputDelete,
}) => {
  const handleName = (evt) => {
    contactInputChange('name', evt.target.value);
  };
  const handleEmail = (evt) => {
    contactInputChange('email', evt.target.value);
  };
  const handleMessage = (evt) => {
    contactInputChange('message', evt.target.value);
  };
  const sendEmail = () => {
    emailjs.send('service_l6cb95b', 'template_9jf6epb', contactData, 'user_3A2LAMBGj0zkhQGT1D4LG')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Votre message a bien été envoyé, merci !', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        contactInputDelete();
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="container" id="contact">
      <form className="contact-form">
        <h2>Contactez-moi !</h2>
        <div className="form-group">
          <label htmlFor="name">Votre nom</label>
          <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Saisissez ici votre nom" onChange={handleName} value={contactData.name} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Votre adresse email</label>
          <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Saisissez ici votre email" onChange={handleEmail} value={contactData.email} />
          <small id="email" className="form-text text-muted">Je ne partagerai jamais cet email.</small>
        </div>
        <div className="form-group">
          <label htmlFor="message">Votre message</label>
          <textarea className="form-control" id="message" placeholder="Saisissez ici votre message" onChange={handleMessage} value={contactData.message} />
        </div>
        <button
          type="submit"
          className="btn"
          onClick={(evt) => {
            if (contactData.name && contactData.email && contactData.message) {
              evt.preventDefault();
              sendEmail(evt);
            }
            else {
              evt.preventDefault();
              toast.error("Oups ! Je crois que vous avez oublié un champ. Votre message n'a pas pu être envoyé :'(", {
                position: toast.POSITION.BOTTOM_CENTER,
              });
            }
          }}
        >Envoyer
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

Contact.propTypes = {
  contactData: PropTypes.object.isRequired,
  contactInputChange: PropTypes.func.isRequired,
  contactInputDelete: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  contactData: state.contact.contactData,
});

const mapDispatch = (dispatch) => ({
  contactInputChange: (stateName, payload) => {
    dispatch(contactInputChange(stateName, payload));
  },
  contactInputDelete: () => {
    dispatch(contactInputDelete());
  },
});

export default connect(
  mapState,
  mapDispatch,
)(Contact);
