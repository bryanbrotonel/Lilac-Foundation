import React from 'react';

function AboutSection() {
  return (
    <div className="relative bg-primary-100 text-white-0 py-24 overflow-hidden">
      <div className="absolute -top-48 left-4 lg:left-1/4">
        <img
          className="w-96 -rotate-180 translate-x-4 translate-y-4"
          src="https://openclipart.org/download/175545/Syringa.svg"
          alt="Lilac"
        />
      </div>
      <div className="absolute -bottom-48 right-4 lg:right-1/4">
        <img
          className="w-96 -rotate-12 -translate-y-4 "
          src="https://openclipart.org/download/175545/Syringa.svg"
          alt="Lilac"
        />
      </div>
      <div className="container text-center">
        <div className="py-20">
          <div className="space-y-3">
            <span className="uppercase">About</span>
            <h1 className="font-serif text-5xl font-bold mb-1">
              Read Our Story
            </h1>
            <h2 className="text-xl">
              Our History. Who we are. Our Mission. Our Vision. Our Core Values.
            </h2>
          </div>
          <button className="mt-12 py-2 px-3 bg-transparent hover:bg-primary-400 text-white-0 rounded-lg border-white-0 hover:border-primary-400 border-2">
            <a href="about">More About Us</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
