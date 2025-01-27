import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sending message...');
    // TODO: Implement actual message sending
    alert('Merci pour votre message !');
  };

  return (
    <div className="contact">
      <h2>Contactez-nous</h2>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Nom :</span>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        
        <label htmlFor="email">
          <span>Email :</span>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label htmlFor="subject">
          <span>Sujet :</span>
          <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </label>

        <label htmlFor="message">
          <span>Message :</span>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;