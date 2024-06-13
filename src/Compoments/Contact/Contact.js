import React from 'react';

function Contact() {
  return (
    <div className='mt-10'>
      <section id="contact">
        <div className="container py-20" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <div className="text-center m-auto mb-20 md:w-1/2" data-aos="fade-right">
            <h4 className="font-bold text-color-secondary mb-4">Have A Question</h4>
            <h1 className="title">Get In Touch</h1>
          </div>
          <form>
            <div className="w-full m-auto sm:mx-auto px-4 text-center md:w-2/3">
              <div className="text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2">
                <input name="name" required type="text" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary" placeholder="Name" />
                <input name="email" required type="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary" placeholder="Email" />
                <input name="phonenumber" required type="tel" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary" placeholder="Phone" />
                <input name="company" required type="text" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary" placeholder="Company" />
              </div>
              <textarea name="message" required rows="4" className="text-color-primary-dark bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary" placeholder="Message"></textarea>
              <button type="submit" className="btn mt-10">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
