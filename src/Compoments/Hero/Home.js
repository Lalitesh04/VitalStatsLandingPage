import React from 'react';

function Home() {
  const backgroundImage = {
    backgroundImage: `url("/hero.jpeg")`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    height: '100vh',
    width: '100vw' 
  };

  return (
    <div>
      <div className="w-full h-full bg-no-repeat -z-1 absolute" style={backgroundImage}></div>
      <section id="home" className="relative  w-full h-screen text-color-secondary px-10">
        <div className="container mx-auto py-20 relative">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:w-4/6 md:mx-32" data-aos="fade-up">
              <h1 className="max-w-md text-4xl font-bold text-center my-6 md:text-5xl md:text-left">
                Revolutionize Healthcare with Seamless Patient Data Management
              </h1>
              <div className="py-10 px-4 md:px-16">
                <p className="text-lg leading-relaxed my-2 gap-3 text-blue-600 md:text-left">
                  Welcome to the forefront of healthcare innovation! Our revolutionary platform is poised to transform the way patient data is managed, paving the way for seamless, efficient, and secure healthcare experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
