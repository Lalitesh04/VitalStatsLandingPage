import React from 'react';

function Features() {
    return (
        <div className='mt-10'>
            <section id="features" className="bg-color-primary-light my-4" data-aos="zoom-in">
                <div className="container py-20 mt-10">
                    <div className="text-center m-auto mb-20 md:w-1/2" data-aos="fade-left">
                        <h4 className="font-bold text-color-secondary mb-4">Our Features</h4>
                        <h1 className="title">Empowering Your Healthcare Journey</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
                        <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200" data-aos="flip-left">
                            <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                                <i className="fa-solid fa-database text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-bold py-4">Data Storage and Fast Retrieval</h3>
                            <p className="leading-relaxed">Efficiently store and retrieve patient data with lightning-fast speed.</p>
                        </div>

                        <div className="bg-color-primary-dark hover:bg-color-primary border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer" data-aos="flip-right">
                            <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                                <i className="fa-solid fa-file-alt text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-bold py-4">Report Generation</h3>
                            <p className="leading-relaxed">Generate comprehensive reports for detailed analysis and decision-making.</p>
                        </div>

                        <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200" data-aos="flip-left">
                            <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                                <i className="fa-solid fa-folder-split text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-bold py-4">Data Splitting</h3>
                            <p className="leading-relaxed">Organize reports, prescriptions, and scans efficiently for easy access.</p>
                        </div>

                        <div className="bg-color-primary-dark hover:bg-color-primary border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer" data-aos="flip-right">
                            <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                                <i className="fa-solid fa-chart-line text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-bold py-4">Medical Data Analysis</h3>
                            <p className="leading-relaxed">Leverage powerful analytics tools to gain insights from medical data.</p>
                        </div>

                        <div className="border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200" data-aos="flip-left">
                            <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                                <i className="fa-solid fa-heartbeat text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-bold py-4">Health Suggestions</h3>
                            <p className="leading-relaxed">Receive personalized health suggestions based on your medical history.</p>
                        </div>

                        <div className="bg-color-primary-dark hover:bg-color-primary border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer" data-aos="flip-right">
                            <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                                <i className="fa-solid fa-hospital-user text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-bold py-4">Nearby Hospital & Pharmacy</h3>
                            <p className="leading-relaxed">Locate nearby hospitals and pharmacies for convenient access to healthcare services.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Features;
