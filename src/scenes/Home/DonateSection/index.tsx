import React, { useEffect, useState } from 'react';
import { fetchContentfulContentEntryByID } from '../../../api/contentful';
import DonateButton from '../../../components/DonateButton';
import { TypeBlurb } from '../../../types';

import Lilac from '../../../static/assets/images/lilac.inline.svg';

function DonateSection() {
  const [donateParagraph, setDonateParagraph] = useState<TypeBlurb>(null);

  useEffect(() => {
    (async () => {
      // Fetch donate paragraph
      const donateBlurb = (await fetchContentfulContentEntryByID(
        '32q3yAUuT6sYWiqAsiEyQE'
      )) as TypeBlurb;

      setDonateParagraph(donateBlurb);
    })();
  }, []);

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
            <Lilac className="h-full w-full" />
          </div>
          {/* Donate section content */}
          <div className="relative container space-y-8 py-12">
            <div>
              <h1 className="font-serif font-bold text-5xl mb-4">
                {donateParagraph && donateParagraph.fields.blurbTitle}
              </h1>
              <p>{donateParagraph && donateParagraph.fields.blurbContent}</p>
            </div>
            <DonateButton fontSize={'lg'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateSection;
