import React from 'react';
import DonateButton from '../../../components/DonateButton';

function DonateSection() {
  return (
    <div className="bg-primary-400 text-white-0 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Donate section image overlay */}
        <div className="relative h-[32rem] basis-96 md:basis-1/2 overflow-hidden bg-primary-50">
          {/* Donate section image */}
          <div className="absolute inset-0 bg-primary-800 opacity-50" />
          <img
            src="https://unsplash.com/photos/Ks4t8IK8Kgw/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYwNTA3MDc2&force=true&w=1920"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="relative basis-1/2 xl:basis-1/3 flex items-center">
          {/* Background flower */}
          <div className="absolute h-full -bottom-1/2 inset-x-0 opacity-25">
            <img
              className="h-full w-full"
              src="https://openclipart.org/download/175545/Syringa.svg"
              alt="Lilac"
            />
          </div>
          {/* Donate section content */}
          <div className="relative container space-y-8 py-12">
            <div>
              <h1 className="font-serif font-bold text-5xl mb-4">
                Lend a Helping Hand
              </h1>
              <p>
                The Lilac Foundation is a leading example of an organization
                focused on uplifting the quality of life of Lilanians in areas
                such as agriculture, education, health and housing. Be a part of
                our mission and donate today!
              </p>
            </div>
            <DonateButton fontSize={'lg'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateSection;
