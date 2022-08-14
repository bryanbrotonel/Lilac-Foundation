import React from 'react';

function Hero() {
  return (
    <div className="h-fit lg:h-3/4 py-24 bg-primary-400">
      <div className="h-full flex flex-col lg:flex-row gap-12 lg:gap-0 justify-evenly container">
        <div className="basis-1/2 flex flex-col justify-center text-white-0 animate-fadeInRight">
          <h1 className="capitalize font-serif text-6xl mb-6">
            To enrich the lives of those we embody
          </h1>
          <span className="md:w-3/4 text-xl">
            Dedicated to using Lila’s core values and influences to aid the
            quality of life of the community.
          </span>
          <div className="mt-12">
            <button className="py-2 px-6 text-white-0 bg-primary-800 rounded-lg">
              <a className="subpixel-antialiased" href="about">
                &#9829;&ensp;Donate
              </a>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="animate-fadeInUp">
            <img
              className="w-96"
              src="https://images.ctfassets.net/lviz1x4y4a6n/Y31mEdGqqaeUaIEyoIe6A/d91209c6768d43e6a77447ebd6c97e8e/TLF-Logo-LILAC-OFF.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
