import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-easy-navy mb-6">Contactez-nous</h1>
        <p className="text-gray-600 mb-12">
          N'hésitez pas à nous contacter pour toute question ou demande de renseignements.
        </p>

        <form className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-gray-300 focus:border-easy-orange focus:ring-easy-orange rounded-md shadow-sm block w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-gray-300 focus:border-easy-orange focus:ring-easy-orange rounded-md shadow-sm block w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border-gray-300 focus:border-easy-orange focus:ring-easy-orange rounded-md shadow-sm block w-full"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-easy-orange text-white px-4 py-2 rounded-md hover:bg-easy-gold transition-colors"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
