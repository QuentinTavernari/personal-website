// == Import : npm
import React from 'react';
import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  contactInputChange,
} from '../../actions';

// == Import : local
import './styles.scss';
import Header from '../Header';

// == Composant
const Contact = ({
  contactData,
  contactInputChange,
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
  console.log(emailjs);
  const sendEmail = (evt) => {
    console.log(contactData);
    emailjs.send('service_l6cb95b', 'template_9jf6epb', contactData, 'user_3A2LAMBGj0zkhQGT1D4LG')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };
  return (
    <div className="contact">
      <Header />
      <form>
        <div className="form-group">
          <label htmlFor="name">Votre nom</label>
          <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Saisissez ici votre nom" onChange={handleName} value={contactData.name} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Votre adresse email</label>
          <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Saisissez ici votre email" onChange={handleEmail} value={contactData.email} />
          <small id="email" className="form-text text-muted">Je ne partagerais jamais cet email.</small>
        </div>
        <div className="form-group">
          <label htmlFor="message">Votre message</label>
          <textarea className="form-control" id="message" placeholder="Saisissez ici votre message" onChange={handleMessage} value={contactData.message} />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(evt) => {
            evt.preventDefault(); 
            sendEmail(evt);
          }}
        >Submit
        </button>
      </form>
    </div>
  );
};

Contact.propTypes = {
  contactData: PropTypes.object.isRequired,
  contactInputChange: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  contactData: state.contact.contactData,
});

const mapDispatch = (dispatch) => ({
  contactInputChange: (stateName, payload) => {
    dispatch(contactInputChange(stateName, payload));
  },
});

export default connect(
  mapState,
  mapDispatch,
)(Contact);
