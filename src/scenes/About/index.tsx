import React, { useEffect, useState } from 'react';

import { fetchContentfulContentEntries } from '../../api/contentful';
import { TypeAboutItem } from '../../types';
import Loading from '../../components/Loading';

import AboutItem from './AboutItem';
import BlockQuote from '../../components/BlockQuote';
import ValuesGrid from './ValuesGrid';
import Markdown from 'markdown-to-jsx';

function About() {
  const [aboutItems, setAboutItems] = useState<TypeAboutItem[]>([]);

  useEffect(() => {
    (async () => {
      const entries = (await fetchContentfulContentEntries(
        'aboutItem',
        'fields.order'
      )) as TypeAboutItem[];
      setAboutItems(entries);
    })();
  }, []);

  return (
    <div className="container mt-12">
      <h1 className="font-bold font-serif text-6xl">About</h1>
      <hr className="mt-4 mb-8 border-white-30" />
      <div>
        {aboutItems.length === 0 ? (
          <Loading />
        ) : (
          <React.Fragment>
            {/* Our History section */}
            <AboutItem item={aboutItems[0]} justified={false} />

            {/* Who We Are  section */}
            <div className="py-12 bg-gray-200 text-center">
              <h1 className="font-serif text-4xl text-primary-400">
                {aboutItems[1].fields.title}
              </h1>
              <div className="prose mx-auto">
                <Markdown>{aboutItems[1].fields.description}</Markdown>
              </div>
            </div>

            {/* Our Vision section */}
            <AboutItem item={aboutItems[2]} justified={true} />

            {/* Our Mission section */}
            <BlockQuote
              title={aboutItems[3].fields.title}
              quote={aboutItems[3].fields.description}
            />

            {/* Core Values section */}
            <ValuesGrid values={aboutItems[4].fields.description} />

            {/* Donate section */}
            <AboutItem item={aboutItems[5]} justified={true} />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default About;
