import React from 'react';

function Download() {
  return (
    <div>
      <section id="download-app" className="bg-color-primary-light" data-aos="zoom-out-up">
        <div className="container h-[80vh] grid place-items-center">
          <div className="text-center md:w-2/3 m-auto">
            <h1 className="title">Medical Health Data Storage and Reporting</h1>
            <p className="leading-relaxed pt-5 text-color-secondary">Effortlessly manage and securely store your medical records and reports with our comprehensive app.</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-10" data-aos="fade-right">
              <a href="#" className="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70">
                <img src="/ios-store-dark.png" alt="iOS App Store" />
              </a>
              <a href="#" className="bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70">
                <img src="/g-play-dark.png" alt="Google Play Store" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Download;
