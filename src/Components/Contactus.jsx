import React from 'react';
import Container from './Layout/Container';

function Contactus() {
  return (
    <Container>
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-6 text-4xl font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <form action="#" className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="How can we help you?"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg shadow-sm border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="py-3 px-8 text-sm font-medium text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </Container>
  );
}   

export default Contactus;
