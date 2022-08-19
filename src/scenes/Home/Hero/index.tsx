import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import DonateButton from '../../../components/DonateButton';
import {
  resetNavbarTheme,
  setNavbarTheme,
} from '../../../components/Navbar/navbarSlice';

import Clovetree from '../../../static/assets/images/clovetree.inline.svg';


function Hero() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Set navbar theme to hero theme
    dispatch(setNavbarTheme('bg-primary-400 text-white-0 border-primary-400'));

    return () => {
      // reset navbar theme to original theme
      dispatch(resetNavbarTheme());
    };
  }, []);

  return (
    <div className="relative h-fit lg:h-3/4 py-24 bg-primary-400 overflow-hidden">
      <div className="absolute h-full -left-8 -bottom-8 opacity-20">
        <Clovetree className="h-full w-full" />
      </div>
      <div className="relative h-full flex flex-col lg:flex-row gap-12 lg:gap-0 justify-evenly container">
        <div className="basis-1/2 flex flex-col justify-center text-white-0 animate-fadeInRight">
          <h1 className="capitalize font-serif text-6xl mb-6">
            To enrich the lives of those we embody
          </h1>
          <span className="md:w-3/4 text-xl">
            Dedicated to using Lila’s core values and influences to aid the
            quality of life of the community.
          </span>
          <div className="mt-12">
            <DonateButton fontSize={'xl'} />
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
