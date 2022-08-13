import React from 'react';
import InViewObserver from '../../../components/InViewObserver';

function AboutSection() {
  return (
    <div className="bg-primary-100 text-white-0 py-24">
      <div className="flex flex-col-reverse md:flex-row container justify-evenly">
        <div className="md:w-1/3 flex flex-col justify-center">
          <div>
            <div className="space-y-3">
              <span className="uppercase">About</span>
              <h1 className="font-serif text-5xl font-bold mb-1">
                Read Our Story
              </h1>
              <h2 className="text-xl">
                Our History. Who we are. Our Mission. Our Vision. Our Core
                Values.
              </h2>
            </div>
            <button className="mt-12 py-4 px-3 bg-transparent hover:bg-primary-400 text-white-0 rounded-lg border-white-0 hover:border-primary-400 border-2">
              More About Us
            </button>
          </div>
        </div>
        <InViewObserver
          className="opacity-0"
          transitionClass="transition duration-700 ease-out -translate-y-4 opacity-100"
        >
          <img
            className="h-80 w-auto "
            src="https://openclipart.org/download/175545/Syringa.svg"
            alt="Lilac"
          />
        </InViewObserver>
      </div>
    </div>
  );
}

export default AboutSection;
