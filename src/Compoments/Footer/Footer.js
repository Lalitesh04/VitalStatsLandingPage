import React from 'react';

function Footer() {
  return (
    <div>
      <section id="footer">
        <div className="py-3" data-aos="fade-down" data-aos-offset="50">
          <div className="flex justify-center items-center gap-6 pb-4">
            <a href="https://www.facebook.com/profile.php?id=61556502329631&mibextid=ZbWKwL" target="_blank" rel='noreferrer' className="text-white hover:text-color-secondary text-2xl ease-in duration-200"><i className="fab fa-facebook-f"></i></a>
            <a href="https://x.com/Vitalstats2023?t=ISd8bI71gqFGIULL4_tDsw&s=08" target="_blank" rel='noreferrer' className="text-white hover:text-color-secondary text-2xl ease-in duration-200"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/vital-stats2023/" target="_blank" rel='noreferrer' className="text-white hover:text-color-secondary text-2xl ease-in duration-200"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/vitalstats2023?igsh=MTNyNHZudzBidXE1Nw==" rel='noreferrer' target="_blank" className="text-white hover:text-color-secondary text-2xl ease-in duration-200"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="flex justify-center border-t border-gray-200 py-7 w-3/4 mx-auto mt-3" data-aos="fade-up" data-aos-offset="50">
            <a href="" className="text-lg hover:text-color-secondary">&copy; Vital Health Solutions. All Rights Reserved.</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
