import React from 'react';

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
        <button className="bg-primary-50 hover:bg-primary-40 text-white-0 leading-6 font-bold py-2 px-3 rounded-lg">
          Donate
        </button>
      </div>
    </div>
  );
}

export default DonateSection;
