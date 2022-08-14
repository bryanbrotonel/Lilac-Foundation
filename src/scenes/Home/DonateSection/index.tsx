import React from 'react';
import DonateButton from '../../../components/DonateButton';

function DonateSection() {
  return (
    <div className="bg-primary-400 text-white-0">
      <div className="md:w-1/2 container flex-col content-center space-y-4 py-28 text-center">
        <h1 className="font-sans font-bold text-3xl">
          Donate The Gift of Life
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          corrupti aut aperiam id et deserunt facere est dolor. Consectetur
          tenetur repellendus nemo minus delectus debitis earum labore quos.
          Repellat, optio?
        </p>
        <DonateButton fontSize={'lg'} />
      </div>
    </div>
  );
}

export default DonateSection;
